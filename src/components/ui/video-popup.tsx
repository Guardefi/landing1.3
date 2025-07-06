"use client";

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoPopup = ({ isOpen, onClose }: VideoPopupProps) => {
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

        <h2 className="text-xl md:text-2xl font-command text-cyber-cyan-bright mb-6">
          Scorpius in Action - Live Demo
        </h2>

        {/* Video Container */}
        <div className="relative mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-cyber-cyan-dim/40 hover:border-cyber-cyan-bright/60 transition-all duration-300 bg-war-room-charcoal/60 backdrop-blur">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm">
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
    </div>
  );
};
