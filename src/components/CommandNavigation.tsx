"use client";
import { LiquidButton, MetalButton } from "./ui/liquid-glass-button";
import { Terminal, Shield, Zap, Settings } from "lucide-react";

export default function CommandNavigation() {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto">
      <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-war-room-void/80 backdrop-blur-md border border-cyber-cyan-dim/30">
        {/* Main Command Button */}
        <LiquidButton
          size="lg"
          className="text-cyber-cyan-bright hover:text-cyber-cyan-intense"
        >
          <Terminal className="w-4 h-4 mr-2" />
          Command Center
        </LiquidButton>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <MetalButton variant="cyber" className="px-4 py-2">
            <Shield className="w-4 h-4 mr-1" />
            Defense
          </MetalButton>

          <MetalButton variant="cyber" className="px-4 py-2">
            <Zap className="w-4 h-4 mr-1" />
            Deploy
          </MetalButton>

          <MetalButton variant="cyber" className="px-4 py-2">
            <Settings className="w-4 h-4 mr-1" />
            Config
          </MetalButton>
        </div>
      </div>
    </div>
  );
}
