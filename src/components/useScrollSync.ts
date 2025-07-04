import { useEffect, useState } from "react";

export function useScrollSync() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const rawScroll = window.scrollY / max;

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

        // Create a sticky zone in the middle 60% of demo section
        if (demoProgress >= 0.2 && demoProgress <= 0.8) {
          // Apply resistance - slow down scroll progression in sticky zone
          const stickyProgress = (demoProgress - 0.2) / 0.6;
          const easedProgress =
            0.2 + stickyProgress * stickyProgress * stickyProgress * 0.6;
          adjustedScrollValue =
            demoStartPercent +
            easedProgress * (demoEndPercent - demoStartPercent);
        }
      }

      setScroll(adjustedScrollValue);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scroll;
}
