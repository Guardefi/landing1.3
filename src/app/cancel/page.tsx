import { AlertTriangle, ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { MetalButton } from "@/components/ui/liquid-glass-button";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-war-room-void flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Cancel Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-war-room-void" />
          </div>
        </div>

        {/* Cancel Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-command text-cyber-cyan-bright tracking-wider">
            PAYMENT CANCELLED
          </h1>
          <p className="text-cyber-cyan-base font-terminal">
            Defense system activation was cancelled. Your payment was not
            processed.
          </p>
        </div>

        {/* Status Display */}
        <div className="bg-war-room-abyss/50 rounded-lg border border-yellow-500/30 p-6 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-cyber-cyan-dim font-terminal">STATUS:</span>
            <span className="text-yellow-400 font-command">CANCELLED</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-cyber-cyan-dim font-terminal">SHIELDS:</span>
            <span className="text-gray-400 font-command">OFFLINE</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-cyber-cyan-dim font-terminal">CHARGE:</span>
            <span className="text-gray-400 font-command">$0.00</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href="/#pricing" className="block">
            <MetalButton variant="cyber" className="w-full">
              <RotateCcw className="w-4 h-4" />
              <span className="font-command">TRY AGAIN</span>
            </MetalButton>
          </Link>

          <Link href="/" className="block">
            <MetalButton variant="default" className="w-full">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-command">RETURN TO BASE</span>
            </MetalButton>
          </Link>

          <p className="text-cyber-cyan-dim font-terminal text-xs">
            No charges were made to your account. You can try again anytime.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent h-px"></div>
        </div>
      </div>
    </div>
  );
}
