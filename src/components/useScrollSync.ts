import { useEffect, useState, useRef } from "react";

export function useScrollSync() {
  const [scroll, setScroll] = useState(0);
  const lastScrollTime = useRef(Date.now());
  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const currentScrollY = window.scrollY;
      const rawScroll = currentScrollY / max;
      const now = Date.now();
      const deltaTime = now - lastScrollTime.current;

      // Calculate scroll velocity
      if (deltaTime > 0) {
        const deltaY = currentScrollY - lastScrollY.current;
        scrollVelocity.current = Math.abs(deltaY) / deltaTime;
      }

      // Define demo section boundaries (section index 3 out of total sections)
      const totalSections = 11;
      const demoSectionIndex = 3;
      const demoStartPercent = demoSectionIndex / totalSections;
      const demoEndPercent = (demoSectionIndex + 1) / totalSections;

      let adjustedScrollValue = rawScroll;

      // Apply sticky behavior to demo section
      if (rawScroll >= demoStartPercent && rawScroll <= demoEndPercent) {
        const demoProgress =
          (rawScroll - demoStartPercent) / (demoEndPercent - demoStartPercent);

        // Create sticky behavior - require high velocity to exit
        const minVelocityToExit = 0.5; // Minimum scroll velocity needed to exit demo

        // In the middle 70% of the demo section, apply strong resistance
        if (demoProgress >= 0.15 && demoProgress <= 0.85) {
          if (scrollVelocity.current < minVelocityToExit) {
            // If scrolling slowly, keep user in the center of the demo section
            adjustedScrollValue =
              demoStartPercent + 0.5 * (demoEndPercent - demoStartPercent);
          } else {
            // Allow normal progression if scrolling with intent (fast)
            adjustedScrollValue = rawScroll;
          }
        } else {
          // Allow easier entry/exit at the edges
          adjustedScrollValue = rawScroll;
        }
      }

      lastScrollTime.current = now;
      lastScrollY.current = currentScrollY;
      setScroll(adjustedScrollValue);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scroll;
}
