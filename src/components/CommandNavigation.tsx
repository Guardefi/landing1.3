"use client";
import { MetalButton } from "./ui/liquid-glass-button";
import { Terminal, Play, DollarSign, MessageCircle } from "lucide-react";
import { useState } from "react";

const navigateToSection = (sectionIndex: number) => {
  // Emit custom event to force section display
  const event = new CustomEvent("navigateToSection", {
    detail: { sectionIndex },
  });
  window.dispatchEvent(event);

  // Also scroll for visual feedback
  const container = document.getElementById("scroll-container");
  if (container) {
    const targetScrollPercentage = sectionIndex * 0.1;
    const targetScrollTop = targetScrollPercentage * container.scrollHeight;
    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });
  }
};

// Contact Popup Component
const ContactPopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-war-room-void border-2 border-cyber-cyan-dim/40 rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyber-cyan-base hover:text-cyber-cyan-bright transition-colors"
        >
          ✕
        </button>

        <h2 className="text-2xl font-command text-cyber-cyan-bright mb-6">
          Contact War Room
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-cyber-cyan-base text-sm mb-2 font-terminal">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-war-room-charcoal border border-cyber-cyan-dim/30 rounded-lg px-4 py-2 text-white focus:border-cyber-cyan-bright focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-cyber-cyan-base text-sm mb-2 font-terminal">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-war-room-charcoal border border-cyber-cyan-dim/30 rounded-lg px-4 py-2 text-white focus:border-cyber-cyan-bright focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-cyber-cyan-base text-sm mb-2 font-terminal">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-war-room-charcoal border border-cyber-cyan-dim/30 rounded-lg px-4 py-2 text-white focus:border-cyber-cyan-bright focus:outline-none resize-none"
              placeholder="Tell us about your security needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyber-cyan-bright text-black font-command font-bold py-3 rounded-lg hover:bg-cyber-cyan-intense transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default function CommandNavigation() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className="fixed top-6 right-6 z-30 pointer-events-auto">
        <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-war-room-void/80 backdrop-blur-md border border-cyber-cyan-dim/30">
          {/* Main Command Button */}
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
              <Play className="w-4 h-4 mr-1" />
              Watch Demo
            </MetalButton>

            <MetalButton
              variant="cyber"
              className="px-4 py-2"
              onClick={() => scrollToSection(9)}
            >
              <DollarSign className="w-4 h-4 mr-1" />
              Pricing
            </MetalButton>

            <MetalButton
              variant="cyber"
              className="px-4 py-2"
              onClick={() => setShowContact(true)}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              Contact Us
            </MetalButton>
          </div>
        </div>
      </div>

      <ContactPopup
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </>
  );
}
