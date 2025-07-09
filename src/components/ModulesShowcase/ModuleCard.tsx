"use client";
import { EnhancedCard } from "@/components/ui/enhanced-card";

interface ModuleCardProps {
  icon: string;
  name: string;
  pitch: string;
  firepower: string;
  uptime: string;
  response: string;
  specs: string[];
}

export default function ModuleCard({
  icon,
  name,
  pitch,
  firepower,
  uptime,
  response,
  specs,
}: ModuleCardProps) {
  return (
    <EnhancedCard
      title={name}
      description={
        <>
          <p className="text-cyan-300 text-sm mb-4 italic">"{pitch}"</p>

          {/* Firepower Description */}
          <div className="bg-war-room-void/50 rounded-lg p-4 mb-4">
            <h4 className="text-xs font-terminal text-cyan-400 mb-2 uppercase tracking-wide">
              Combat Specifications
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">{firepower}</p>
          </div>

          {/* Technical Specs */}
          <div className="mb-4">
            <h4 className="text-xs font-terminal text-cyan-400 mb-2 uppercase tracking-wide">
              Technical Arsenal
            </h4>
            <ul className="space-y-1">
              {specs.map((spec, i) => (
                <li key={i} className="flex items-center text-xs text-gray-300">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 pulse-glow"></div>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </>
      }
      icon={icon}
      badge="ACTIVE"
      size="large"
      variant="glass"
      className="h-full hover:shadow-xl hover:shadow-cyber-cyan-bright/20"
    >
      {/* Performance Metrics */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cyan-400/20 mt-auto">
        <div className="text-center">
          <div className="text-lg font-command text-cyan-400">{uptime}</div>
          <div className="text-xs text-gray-400">Uptime SLA</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-command text-cyan-400">{response}</div>
          <div className="text-xs text-gray-400">Response Time</div>
        </div>
      </div>
    </EnhancedCard>
  );
}
