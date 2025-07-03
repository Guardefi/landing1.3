import dynamic from "next/dynamic";
import ScrollUIOverlay from "@/components/ScrollUIOverlay";

const ScorpiusCore = dynamic(() => import("@/components/ScorpiusCore"), {
  ssr: false,
});

export default function Home() {
  return (
    <main
      className="relative w-screen h-[900vh] bg-[#10141a]"
      id="scroll-container"
    >
      <div className="sticky top-0 left-0 w-screen h-screen pointer-events-none z-0">
        <ScorpiusCore />
      </div>
      <ScrollUIOverlay />
    </main>
  );
}
