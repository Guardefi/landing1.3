"use client";
import { MetalButton } from "./ui/liquid-glass-button";
import { Terminal, Play, DollarSign, MessageCircle } from "lucide-react";
import { useState } from "react";

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

// Demo Popup Component
const DemoPopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-war-room-void border-2 border-cyber-cyan-dim/40 rounded-2xl p-6 md:p-8 max-w-6xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyber-cyan-base hover:text-cyber-cyan-bright transition-colors text-xl z-10"
        >
          ✕
        </button>

        <h2 className="text-xl md:text-2xl font-command text-cyber-cyan-bright mb-6 text-center">
          Scorpius Live Demo: Real-Time Threat Detection
        </h2>

        <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-cyber-cyan-dim/40 hover:border-cyber-cyan-bright/60 transition-all duration-300 bg-war-room-charcoal/60 backdrop-blur mb-6">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=675&fit=crop"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Cyber overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan-dim/10 via-transparent to-cyber-cyan-dim/10 pointer-events-none" />
        </div>

        {/* Demo features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-war-room-charcoal/60 backdrop-blur rounded-lg p-4 border border-cyber-cyan-dim/30">
            <div className="text-cyber-cyan-bright font-terminal mb-2">
              ⚡ Real-Time Detection
            </div>
            <div className="text-gray-300">
              Watch threats identified in milliseconds
            </div>
          </div>
          <div className="bg-war-room-charcoal/60 backdrop-blur rounded-lg p-4 border border-cyber-cyan-dim/30">
            <div className="text-cyber-cyan-bright font-terminal mb-2">
              🛡️ Auto Response
            </div>
            <div className="text-gray-300">
              See automated countermeasures deploy
            </div>
          </div>
          <div className="bg-war-room-charcoal/60 backdrop-blur rounded-lg p-4 border border-cyber-cyan-dim/30">
            <div className="text-cyber-cyan-bright font-terminal mb-2">
              📊 Live Analytics
            </div>
            <div className="text-gray-300">
              Monitor security metrics in real-time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
  const [showDemo, setShowDemo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-3 right-4 z-30 pointer-events-auto hidden md:block">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-war-room-void/50 backdrop-blur-sm border border-cyber-cyan-dim/20">
          {/* Main Command Button */}
          <button
            onClick={() => scrollToSection(0)}
            className="flex items-center px-3 py-1.5 text-cyber-cyan-bright hover:text-cyber-cyan-intense transition-colors duration-300 font-terminal text-sm"
          >
            <Terminal className="w-3.5 h-3.5 mr-1.5" />
            Command Center
          </button>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5">
            <MetalButton
              variant="cyber"
              className="px-3 py-1.5 text-xs"
              onClick={() => setShowDemo(true)}
            >
              <Play className="w-3.5 h-3.5 mr-1" />
              Demo
            </MetalButton>

            <MetalButton
              variant="cyber"
              className="px-3 py-1.5 text-xs"
              onClick={() => scrollToSection(9)}
            >
              <DollarSign className="w-3.5 h-3.5 mr-1" />
              Pricing
            </MetalButton>

            <MetalButton
              variant="cyber"
              className="px-3 py-1.5 text-xs"
              onClick={() => setShowContact(true)}
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1" />
              Contact
            </MetalButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-3 right-4 z-30 pointer-events-auto md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-war-room-void/50 backdrop-blur-sm border border-cyber-cyan-dim/20 text-cyber-cyan-bright hover:text-cyber-cyan-intense transition-colors"
        >
          <Terminal className="w-4 h-4" />
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-12 right-0 w-44 rounded-lg bg-war-room-void/60 backdrop-blur-sm border border-cyber-cyan-dim/20 p-1.5">
            <button
              onClick={() => {
                scrollToSection(0);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center px-2.5 py-1.5 rounded-md text-cyber-cyan-bright hover:bg-cyber-cyan-dim/15 transition-colors font-terminal text-xs"
            >
              <Terminal className="w-3.5 h-3.5 mr-1.5" />
              Command Center
            </button>

            <button
              onClick={() => {
                setShowDemo(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center px-2.5 py-1.5 rounded-md text-cyber-cyan-bright hover:bg-cyber-cyan-dim/15 transition-colors font-terminal text-xs"
            >
              <Play className="w-3.5 h-3.5 mr-1.5" />
              Demo
            </button>

            <button
              onClick={() => {
                scrollToSection(9);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center px-2.5 py-1.5 rounded-md text-cyber-cyan-bright hover:bg-cyber-cyan-dim/15 transition-colors font-terminal text-xs"
            >
              <DollarSign className="w-3.5 h-3.5 mr-1.5" />
              Pricing
            </button>

            <button
              onClick={() => {
                setShowContact(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center px-2.5 py-1.5 rounded-md text-cyber-cyan-bright hover:bg-cyber-cyan-dim/15 transition-colors font-terminal text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
              Contact
            </button>
          </div>
        )}
      </div>

      <DemoPopup isOpen={showDemo} onClose={() => setShowDemo(false)} />

      <ContactPopup
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </>
  );
}
