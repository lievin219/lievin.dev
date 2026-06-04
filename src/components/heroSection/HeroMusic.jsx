import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import worshipmusic from "../../../public/audio/worship.mp3"

const HeroMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const tryPlay = () => {
      audioRef.current?.play().then(() => setPlaying(true)).catch(() => {});
    };
    document.addEventListener("click", tryPlay, { once: true });
    return () => document.removeEventListener("click", tryPlay);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () =>
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    audio.addEventListener("timeupdate", update);
    return () => audio.removeEventListener("timeupdate", update);
  }, []);

  const toggle = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="flex items-center gap-3 md:self-start sm:self-center mt-2 relative"
    >
      <audio ref={audioRef} src={worshipmusic} loop />

      {/* Tooltip that auto-hides */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute -top-10 left-0 bg-gray-900 border border-cyan/30 text-cyan text-[11px] px-3 py-1.5 rounded-lg whitespace-nowrap"
          >
            🎵 Gospel message related to the day i was saved— click play to listen
            <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-gray-900 border-r border-b border-cyan/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Player card */}
      <div className="relative flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gray-900/70 border border-white/10 backdrop-blur-md overflow-hidden">

        {/* Background glow when playing */}
        <AnimatePresence>
          {playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-orange/5 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan to-orange"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Animated bars (music visualizer look) */}
        <div className="flex items-end gap-[3px] h-5">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={
                playing
                  ? {
                      height: ["40%", "100%", "60%", "80%", "30%"],
                      transition: {
                        duration: 0.8 + i * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1,
                      },
                    }
                  : { height: "30%" }
              }
              className="w-[3px] rounded-full bg-gradient-to-t from-cyan to-orange"
              style={{ height: "30%" }}
            />
          ))}
        </div>

        {/* Text */}
        <div className="flex flex-col leading-tight">
          <span className="text-white text-xs font-semibold tracking-wide">
            ✦ 🎵 Gospel message related to the day i was saved— click play to listen
          </span>
          <span className="text-gray-400 text-[10px]">
            {playing ? "Now playing..." : "Paused"}
          </span>
        </div>

        {/* Mute */}
        <motion.button
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-cyan transition-colors"
          title={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </motion.button>

        {/* Play / Pause */}
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            playing
              ? "bg-gradient-to-br from-cyan to-cyan/70 shadow-lg shadow-cyan/40"
              : "bg-gradient-to-br from-orange to-orange/70 shadow-lg shadow-orange/40"
          }`}
        >
          {/* Ping ring when playing */}
          {playing && (
            <span className="absolute inset-0 rounded-full bg-cyan/30 animate-ping" />
          )}
          {playing ? (
            <Pause className="w-3.5 h-3.5 text-gray-900 relative z-10" />
          ) : (
            <Play className="w-3.5 h-3.5 text-white ml-0.5 relative z-10" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroMusic;