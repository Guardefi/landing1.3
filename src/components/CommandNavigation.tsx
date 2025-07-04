"use client";
import { MetalButton } from "./ui/liquid-glass-button";
import {
  Menu,
  Terminal,
  Play,
  DollarSign,
  MessageCircle,
  CreditCard,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-war-room-void border-2 border-cyber-cyan-dim/40 rounded-2xl p-6 md:p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyber-cyan-base hover:text-cyber-cyan-bright transition-colors text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl md:text-2xl font-command text-cyber-cyan-bright mb-6">
          Contact War Room
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-cyber-cyan-base text-sm mb-2 font-terminal">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-war-room-charcoal border border-cyber-cyan-dim/30 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan-bright focus:outline-none text-sm md:text-base"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-cyber-cyan-base text-sm mb-2 font-terminal">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-war-room-charcoal border border-cyber-cyan-dim/30 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan-bright focus:outline-none text-sm md:text-base"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-cyber-cyan-base text-sm mb-2 font-terminal">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-war-room-charcoal border border-cyber-cyan-dim/30 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan-bright focus:outline-none resize-none text-sm md:text-base"
              placeholder="Tell us about your security needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyber-cyan-bright text-black font-command font-bold py-3 rounded-lg hover:bg-cyber-cyan-intense transition-colors text-sm md:text-base"
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu - Top Left */}
      <div className="fixed top-4 left-4 z-30 pointer-events-auto">
        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-war-room-void/80 backdrop-blur-md border border-cyber-cyan-dim/30 text-cyber-cyan-bright hover:text-cyber-cyan-intense transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>

        {/* Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-12 left-0 w-44 rounded-lg bg-war-room-void/90 backdrop-blur-md border border-cyber-cyan-dim/30 p-1 shadow-lg">
            <button
              onClick={() => {
                scrollToSection(0);
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center px-3 py-2 rounded-md text-cyber-cyan-bright hover:bg-cyber-cyan-dim/20 transition-colors font-terminal text-xs"
            >
              <Terminal className="w-3 h-3 mr-2" />
              Command Center
            </button>

            <button
              onClick={() => {
                scrollToSection(2);
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center px-3 py-2 rounded-md text-cyber-cyan-bright hover:bg-cyber-cyan-dim/20 transition-colors font-terminal text-xs"
            >
              <Play className="w-3 h-3 mr-2" />
              Demo
            </button>

            <button
              onClick={() => {
                scrollToSection(9);
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center px-3 py-2 rounded-md text-cyber-cyan-bright hover:bg-cyber-cyan-dim/20 transition-colors font-terminal text-xs"
            >
              <DollarSign className="w-3 h-3 mr-2" />
              Pricing
            </button>

            <Link href="/demo-payments">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center px-3 py-2 rounded-md text-cyber-cyan-bright hover:bg-cyber-cyan-dim/20 transition-colors font-terminal text-xs"
              >
                <CreditCard className="w-3 h-3 mr-2" />
                Payment Demo
              </button>
            </Link>

            <button
              onClick={() => {
                setShowContact(true);
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center px-3 py-2 rounded-md text-cyber-cyan-bright hover:bg-cyber-cyan-dim/20 transition-colors font-terminal text-xs"
            >
              <MessageCircle className="w-3 h-3 mr-2" />
              Contact
            </button>
          </div>
        )}
      </div>

      <ContactPopup
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </>
  );
}
