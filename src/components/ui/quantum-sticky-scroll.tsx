"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Activity, Shield, Zap, Target } from "lucide-react";

const quantumContent = [
  {
    title: "Real-Time Quantum Threat Detection",
    description:
      "Advanced AI-powered detection systems combining artificial intelligence with quantum-aware algorithms to identify and neutralize emerging threats before they can execute. Modern systems leverage machine learning algorithms and AI models to instantly identify suspicious activities within milliseconds.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-war-room-void to-war-room-charcoal flex flex-col items-center justify-center text-white p-6 border border-cyber-cyan-dim">
        <Activity className="w-16 h-16 text-cyber-cyan-bright mb-4 animate-pulse" />
        <div className="text-center space-y-2">
          <div className="text-2xl font-command text-cyber-cyan-bright">
            97.8%
          </div>
          <div className="text-sm text-gray-300">Malware Detection Rate</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
          <div className="text-center">
            <div className="text-lg font-bold text-cyber-cyan-base">96.5%</div>
            <div className="text-gray-400">Phishing Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-cyber-cyan-base">98.2%</div>
            <div className="text-gray-400">Ransomware Success</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Blockchain Mempool Monitoring",
    description:
      "Sophisticated mempool monitoring systems provide enhanced network security through real-time transaction analysis. Identifies flood attacks through sudden mempool size increases, detects spam attacks via unusual transaction patterns, and recognizes coordinated manipulation attempts.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-war-room-charcoal to-war-room-steel flex flex-col items-center justify-center text-white p-6 border border-cyber-cyan-dim">
        <Shield className="w-16 h-16 text-cyber-cyan-intense mb-4 animate-pulse" />
        <div className="text-center space-y-2">
          <div className="text-2xl font-command text-cyber-cyan-bright">
            &lt;50ms
          </div>
          <div className="text-sm text-gray-300">Detection Latency</div>
        </div>
        <div className="mt-4 space-y-2 text-xs text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-cyber-cyan-bright rounded-full"></div>
            <span>Anomaly Detection</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-cyber-cyan-base rounded-full"></div>
            <span>Pattern Recognition</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Quantum Signature Validation",
    description:
      "Advanced quantum algorithms enable efficient detection of fraudulent transactions through quantum counting algorithms and PageRank-based quantum search. Achieves O(√N) time complexity providing quadratic speedup over classical methods with automatic cryptographic agility.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-war-room-steel to-war-room-charcoal flex flex-col items-center justify-center text-white p-6 border border-cyber-cyan-dim">
        <Zap className="w-16 h-16 text-cyber-cyan-intense mb-4 animate-pulse" />
        <div className="text-center space-y-2">
          <div className="text-2xl font-command text-cyber-cyan-bright">
            O(√N)
          </div>
          <div className="text-sm text-gray-300">Time Complexity</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
          <div className="text-center">
            <div className="text-lg font-bold text-cyber-cyan-base">35ms</div>
            <div className="text-gray-400">Key Rotation</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-cyber-cyan-base">99.99%</div>
            <div className="text-gray-400">Uptime SLA</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Enterprise Performance Metrics",
    description:
      "Production systems demonstrate exceptional performance with 99.99% uptime SLA guarantees, millions of transactions processed daily, and <0.01% false positive rates. Deployed across financial institutions, cryptocurrency exchanges, and government systems for national security applications.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-war-room-charcoal to-war-room-void flex flex-col items-center justify-center text-white p-6 border border-cyber-cyan-dim">
        <Target className="w-16 h-16 text-cyber-cyan-bright mb-4 animate-pulse" />
        <div className="text-center space-y-2">
          <div className="text-2xl font-command text-cyber-cyan-bright">
            2.1%
          </div>
          <div className="text-sm text-gray-300">False Positive Rate</div>
        </div>
        <div className="mt-4 space-y-2 text-xs text-center">
          <div className="text-cyber-cyan-base">24/7 Monitoring</div>
          <div className="text-cyber-cyan-base">Multi-Chain Security</div>
          <div className="text-cyber-cyan-base">Global Deployment</div>
        </div>
      </div>
    ),
  },
];

export function QuantumStickyScroll() {
  return (
    <div className="bg-war-room-void">
      <StickyScroll content={quantumContent} />
    </div>
  );
}
