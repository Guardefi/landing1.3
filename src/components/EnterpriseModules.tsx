"use client";
import { motion } from "framer-motion";
import { EnhancedCard } from "@/components/ui/enhanced-card";

const enterpriseModules = [
  {
    icon: "🔮",
    name: "Quantum Security",
    readiness:
      "CRYSTALS-Kyber / Dilithium baked-in. Future-proof signatures, QKD simulation, quantum threat audits.",
    tier: "CLASSIFIED",
  },
  {
    icon: "🧪",
    name: "Simulation Sandbox",
    readiness:
      "Multi-chain forks, private mempools, flash-loan + oracle-manip hack lab, time-travel block warp, chaos-engineering toggles.",
    tier: "ADVANCED",
  },
  {
    icon: "📋",
    name: "Compliance Grid",
    readiness:
      "SOC 2 Type II, GDPR, PCI DSS, ISO 27001 autopilot. Evidence harvesting + exportable mappings.",
    tier: "ENTERPRISE",
  },
  {
    icon: "🛂",
    name: "Access Control Matrix",
    readiness:
      "Zero-trust RBAC, ABAC, MFA hardware tokens, anomaly-aware session watchdog.",
    tier: "FORTRESS",
  },
  {
    icon: "🧯",
    name: "Recovery Engine",
    readiness:
      "15-min RTO hot-standby, point-in-time restore, immutable triple-region backups, chaos-tested weekly.",
    tier: "IMMORTAL",
  },
  {
    icon: "📄",
    name: "Threat Reporting System",
    readiness:
      "Exec-level ROI dashboards, MITRE & NIST crosswalks, PoC-verified exploits, remediation runbooks.",
    tier: "EXECUTIVE",
  },
];

export default function EnterpriseModules() {
  return (
    <section className="relative py-16 px-8 z-20 bg-transparent mt-8 md:mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyber-cyan-dim to-cyber-cyan-base rounded-full text-black font-terminal text-sm font-bold mb-6">
            🧠 ENTERPRISE MODULES
          </div>
          <h2 className="text-5xl md:text-6xl font-command font-bold cyan-glow mb-6">
            Advanced Tier Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            When Fortune 500 meets medieval war tactics. These modules separate
            the knights from the peasants.
          </p>
        </motion.div>

        {/* Enterprise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {enterpriseModules.map((module, index) => (
            <EnhancedCard
              key={module.name}
              title={module.name}
              description={module.readiness}
              icon={module.icon}
              badge={module.tier}
              delay={index * 0.15}
              size="large"
              variant="glass"
              className="hover:shadow-xl hover:shadow-cyber-cyan-bright/20"
            >
              {/* Combat Readiness Bar */}
              <div className="mt-6 pt-4 border-t border-cyan-400/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-terminal text-cyan-400 uppercase">
                    Combat Readiness
                  </span>
                  <span className="text-xs font-terminal text-green-400">
                    OPERATIONAL
                  </span>
                </div>
                <div className="w-full bg-war-room-steel rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-full rounded-full w-full pulse-glow"></div>
                </div>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
