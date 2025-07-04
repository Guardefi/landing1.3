import { useEffect, useState, useRef } from "react";

export function useStickyDemoScroll() {
  const [scroll, setScroll] = useState(0);
  const [isDemoActive, setIsDemoActive] = useState(false);
  const scrollMomentum = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const lastScrollY = useRef(0);
  const stickyTarget = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const currentScrollY = window.scrollY;
      const rawScroll = currentScrollY / max;
      const now = Date.now();
      const deltaTime = now - lastScrollTime.current;

      // Calculate scroll momentum/velocity
      if (deltaTime > 0) {
        const deltaY = currentScrollY - lastScrollY.current;
        const velocity = Math.abs(deltaY) / deltaTime;

        // Apply momentum decay
        scrollMomentum.current = scrollMomentum.current * 0.9 + velocity * 0.1;
      }

      // Define demo section boundaries
      const totalSections = 11;
      const demoSectionIndex = 3;
      const demoStartPercent = demoSectionIndex / totalSections;
      const demoEndPercent = (demoSectionIndex + 1) / totalSections;

      // Check if we're in demo section
      const inDemoSection =
        rawScroll >= demoStartPercent && rawScroll <= demoEndPercent;
      setIsDemoActive(inDemoSection);

      let adjustedScroll = rawScroll;

      if (inDemoSection) {
        const demoProgress =
          (rawScroll - demoStartPercent) / (demoEndPercent - demoStartPercent);
        const demoCenter = 0.5; // Middle of demo section
        const stickyZoneSize = 0.4; // Size of sticky zone (40% of section)

        // Distance from center of demo section
        const distanceFromCenter = Math.abs(demoProgress - demoCenter);

        // If we're in the sticky zone and momentum is low
        if (
          distanceFromCenter < stickyZoneSize / 2 &&
          scrollMomentum.current < 1.5
        ) {
          // Apply strong magnetic pull toward center
          const pullStrength =
            (stickyZoneSize / 2 - distanceFromCenter) / (stickyZoneSize / 2);
          const centerPosition =
            demoStartPercent + demoCenter * (demoEndPercent - demoStartPercent);

          // Gradually pull toward center
          stickyTarget.current = centerPosition;
          adjustedScroll =
            rawScroll + (centerPosition - rawScroll) * pullStrength * 0.3;
        } else if (scrollMomentum.current >= 1.5) {
          // High momentum - allow natural scrolling to exit
          adjustedScroll = rawScroll;
        } else {
          // Low momentum but outside sticky zone - gentle resistance
          adjustedScroll = rawScroll * 0.95 + stickyTarget.current * 0.05;
        }
      }

      lastScrollTime.current = now;
      lastScrollY.current = currentScrollY;
      setScroll(adjustedScroll);
    };

    const smoothUpdate = () => {
      // Smooth scrolling towards target when in sticky mode
      if (isDemoActive) {
        const currentScroll =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        if (Math.abs(currentScroll - stickyTarget.current) > 0.001) {
          animationFrame = requestAnimationFrame(smoothUpdate);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isDemoActive]);

  return { scroll, isDemoActive, scrollMomentum: scrollMomentum.current };
}
