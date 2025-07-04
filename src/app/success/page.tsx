import { Suspense } from "react";
import { CheckCircle, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MetalButton } from "@/components/ui/liquid-glass-button";

function SuccessContent() {
  return (
    <div className="min-h-screen bg-war-room-void flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Success Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyber-cyan-bright to-cyber-cyan-base rounded-full flex items-center justify-center animate-pulse-glow">
            <CheckCircle className="w-12 h-12 text-war-room-void" />
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-cyber-cyan-bright/20 animate-ping"></div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-command text-cyber-cyan-bright tracking-wider">
            SHIELDS ENGAGED
          </h1>
          <p className="text-cyber-cyan-base font-terminal">
            Payment successfully processed. Your Scorpius War Room defenses are
            now online.
          </p>
        </div>

        {/* Status Display */}
        <div className="bg-war-room-abyss/50 rounded-lg border border-cyber-cyan-dim/30 p-6 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-cyber-cyan-dim font-terminal">STATUS:</span>
            <span className="text-cyber-cyan-bright font-command">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-cyber-cyan-dim font-terminal">SHIELDS:</span>
            <span className="text-cyber-cyan-bright font-command flex items-center gap-1">
              <Shield className="w-3 h-3" />
              OPERATIONAL
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-cyber-cyan-dim font-terminal">PROTOCOL:</span>
            <span className="text-cyber-cyan-bright font-command">
              SCORPIUS-7
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href="/" className="block">
            <MetalButton variant="cyber" className="w-full">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-command">RETURN TO BASE</span>
            </MetalButton>
          </Link>

          <p className="text-cyber-cyan-dim font-terminal text-xs">
            You will receive a confirmation email with your access credentials
            shortly.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan-dim/20 to-transparent h-px"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan-bright/40 to-transparent h-px animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-war-room-void flex items-center justify-center">
          <div className="text-cyber-cyan-bright font-command">LOADING...</div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
