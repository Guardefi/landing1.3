import { useEffect, useState, useRef } from "react";

export function useScrollSync() {
  const [scroll, setScroll] = useState(0);
  const lastScrollTime = useRef(Date.now());
  const scrollAccumulator = useRef(0);
  const lastRawScroll = useRef(0);
  const stickyLocked = useRef(false);
  const cinematicBuffer = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const rawScroll = window.scrollY / max;
      const now = Date.now();
      const deltaTime = now - lastScrollTime.current;

      // Enhanced cinematic scroll smoothing
      const scrollDelta = rawScroll - lastRawScroll.current;
      cinematicBuffer.current += scrollDelta;

      // Apply cinematic easing - slower transitions between sections
      const cinematicEasing = 0.15; // Slower easing for more cinematic feel
      cinematicBuffer.current *= cinematicEasing;

      // Define demo section boundaries (section index 3 out of total sections)
      const totalSections = 10; // Updated for new structure without demo section
      const demoSectionIndex = 3;
      const demoStartPercent = demoSectionIndex / totalSections;
      const demoEndPercent = (demoSectionIndex + 1) / totalSections;
      const demoCenter =
        demoStartPercent + 0.5 * (demoEndPercent - demoStartPercent);

      // Apply cinematic smoothing to base scroll value
      let adjustedScrollValue = lastRawScroll.current + cinematicBuffer.current;

      // Check if we're in demo section
      const inDemoSection =
        rawScroll >= demoStartPercent && rawScroll <= demoEndPercent;

      if (inDemoSection) {
        const demoProgress =
          (rawScroll - demoStartPercent) / (demoEndPercent - demoStartPercent);

        // Calculate scroll delta since last frame
        const scrollDelta = Math.abs(
          adjustedScrollValue - lastRawScroll.current,
        );

        // Enhanced cinematic scroll resistance in middle zones
        if (demoProgress >= 0.2 && demoProgress <= 0.8) {
          if (!stickyLocked.current) {
            stickyLocked.current = true;
            scrollAccumulator.current = 0;
          }

          // Accumulate scroll attempts with momentum consideration
          if (deltaTime > 0) {
            const momentum = Math.min(scrollDelta * 150, 0.1); // Enhanced momentum scaling
            scrollAccumulator.current += momentum;
          }

          // Higher threshold for more cinematic feel
          const exitThreshold = 0.25; // Increased resistance for dramatic effect

          if (scrollAccumulator.current < exitThreshold) {
            // Create tunnel vision lock with slight breathing effect
            const breathingOffset = Math.sin(now * 0.001) * 0.02;
            adjustedScrollValue = demoCenter + breathingOffset;
          } else {
            // Smooth exit with cinematic easing
            stickyLocked.current = false;
            scrollAccumulator.current = 0;
            adjustedScrollValue = rawScroll;
          }
        } else {
          // Cinematic entry/exit zones
          stickyLocked.current = false;
          scrollAccumulator.current = 0;
          // Apply subtle easing even in transition zones
          adjustedScrollValue =
            lastRawScroll.current + (rawScroll - lastRawScroll.current) * 0.3;
        }
      } else {
        // Outside demo section - reset sticky state
        stickyLocked.current = false;
        scrollAccumulator.current = 0;
        adjustedScrollValue = rawScroll;
      }

      lastScrollTime.current = now;
      lastRawScroll.current = rawScroll;
      setScroll(adjustedScrollValue);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scroll;
}
