import { useEffect, useState } from "react";

export function useScrollSync() {
  const [scroll, setScroll] = useState(0);
  const [adjustedScroll, setAdjustedScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const rawScroll = window.scrollY / max;

      // Define demo section boundaries (section index 3 out of total sections)
      // Assuming 11 total sections based on the sections array
      const totalSections = 11;
      const demoSectionIndex = 3;
      const demoStartPercent = demoSectionIndex / totalSections;
      const demoEndPercent = (demoSectionIndex + 1) / totalSections;

      let adjustedScrollValue = rawScroll;

      // Apply sticky behavior to demo section
      if (rawScroll >= demoStartPercent && rawScroll <= demoEndPercent) {
        // When in demo section, require more scroll to progress
        const demoProgress =
          (rawScroll - demoStartPercent) / (demoEndPercent - demoStartPercent);

        // Create a sticky zone in the middle 60% of the demo section
        const stickyZoneStart = 0.2;
        const stickyZoneEnd = 0.8;

        if (demoProgress >= stickyZoneStart && demoProgress <= stickyZoneEnd) {
          // Apply strong resistance in the sticky zone
          const stickyProgress =
            (demoProgress - stickyZoneStart) /
            (stickyZoneEnd - stickyZoneStart);
          // Use a dampening curve that makes it harder to scroll through
          const dampenedProgress =
            stickyZoneStart + stickyProgress * stickyProgress * 0.6;
          adjustedScrollValue =
            demoStartPercent +
            dampenedProgress * (demoEndPercent - demoStartPercent);
        }
      }

      setScroll(rawScroll);
      setAdjustedScroll(adjustedScrollValue);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return adjustedScroll;
}
