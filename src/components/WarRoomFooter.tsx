import Footer from "@/components/ui/animated-footer";

const WarRoomFooter = () => {
  return (
    <Footer
      leftLinks={[
        { href: "/terms", label: "Terms of Engagement" },
        { href: "/privacy", label: "Classified Protocol" },
        { href: "/security", label: "Security Clearance" },
        { href: "/compliance", label: "Mission Compliance" },
      ]}
      rightLinks={[
        { href: "/careers", label: "Join the Arsenal" },
        { href: "/about", label: "Command Structure" },
        { href: "/docs", label: "Tactical Manual" },
        { href: "/support", label: "Field Support" },
        { href: "https://github.com/scorpius", label: "Source Code" },
        { href: "/contact", label: "Secure Comms" },
      ]}
      copyrightText="SCORPIUS WAR ROOM 2025. ALL RIGHTS RESERVED. CLASSIFIED DEFENSE SYSTEMS."
      barCount={25}
    />
  );
};

export default WarRoomFooter;
