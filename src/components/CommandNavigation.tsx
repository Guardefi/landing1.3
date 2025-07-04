"use client";
import { MetalButton } from "./ui/liquid-glass-button";
import { Terminal, Shield, Zap, Settings } from "lucide-react";

const scrollToSection = (sectionIndex: number) => {
  const container = document.getElementById("scroll-container");
  if (container) {
    // Calculate scroll position based on section index
    // Each section is roughly 10% of the total height (100vh out of 1000vh)
    const targetScrollPercentage = sectionIndex * 0.1;
    const targetScrollTop = targetScrollPercentage * container.scrollHeight;

    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });
  }
};

export default function CommandNavigation() {
  return (
    <div className="fixed top-6 right-6 z-30 pointer-events-auto">
      <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-war-room-void/80 backdrop-blur-md border border-cyber-cyan-dim/30">
        {/* Main Command Button - Now plain button */}
        <button
          onClick={() => scrollToSection(0)}
          className="flex items-center px-4 py-2 text-cyber-cyan-bright hover:text-cyber-cyan-intense transition-colors duration-300 font-terminal"
        >
          <Terminal className="w-4 h-4 mr-2" />
          Command Center
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <MetalButton
            variant="cyber"
            className="px-4 py-2"
            onClick={() => scrollToSection(3)}
          >
            <Shield className="w-4 h-4 mr-1" />
            Arsenal
          </MetalButton>

          <MetalButton
            variant="cyber"
            className="px-4 py-2"
            onClick={() => scrollToSection(8)}
          >
            <Zap className="w-4 h-4 mr-1" />
            Deploy
          </MetalButton>

          <MetalButton
            variant="cyber"
            className="px-4 py-2"
            onClick={() => scrollToSection(9)}
          >
            <Settings className="w-4 h-4 mr-1" />
            Config
          </MetalButton>
        </div>
      </div>
    </div>
  );
}
