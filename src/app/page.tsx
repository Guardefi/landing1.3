import dynamic from "next/dynamic";
import ScrollUIOverlay from "@/components/ScrollUIOverlay";
import PricingTiers from "@/components/PricingTiers";
import WarRoomFooter from "@/components/WarRoomFooter";
import CommandNavigation from "@/components/CommandNavigation";

const ScorpiusCore = dynamic(() => import("@/components/ScorpiusCore"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* Command Navigation */}
      <CommandNavigation />

      <main
        className="relative w-screen h-[2000vh] bg-black"
        id="scroll-container"
      >
        {/* Cinematic starfield background with depth */}
        <div className="fixed inset-0 z-0 perspective-[2000px] overflow-hidden">
          <div className="absolute inset-0 bg-black">
            {/* Generate layered stars for depth effect */}
            {Array.from({ length: 300 }).map((_, i) => {
              const depth = Math.random();
              const size = depth * 3 + 0.5;
              const opacity = 0.3 + depth * 0.7;
              const speed = (1 - depth) * 2 + 0.5;
              return (
                <div
                  key={i}
                  className="absolute bg-white rounded-full transform-gpu"
                  style={{
                    left: `${Math.random() * 120 - 10}%`,
                    top: `${Math.random() * 120 - 10}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity,
                    animationDelay: `${Math.random() * 3}s`,
                    animation: `twinkle ${2 + Math.random() * 3}s infinite ease-in-out alternate, tunnel-zoom ${8 + Math.random() * 4}s infinite ease-in-out`,
                    transform: `translateZ(${depth * 100 - 50}px)`,
                    filter:
                      depth > 0.7 ? `blur(${(1 - depth) * 0.5}px)` : "none",
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="sticky top-0 left-0 w-screen h-screen pointer-events-none z-10 overflow-hidden">
          <div className="w-full h-full perspective-[1000px] transform-gpu">
            <ScorpiusCore />
          </div>
        </div>
        <ScrollUIOverlay />
      </main>

      {/* Pricing section */}
      <PricingTiers />

      {/* Footer */}
      <WarRoomFooter />
    </>
  );
}
