import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute
} from "react-icons/fa";
import { motion } from "framer-motion";
import video from '../assets/videos/masthead-pattern.mp4';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Herosection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play().catch(error => {
          console.log("Video play failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  const toggleVideoPlayback = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative overflow-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-24 xl:py-24"
    >
      {/* Main Content Layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Title and Stats */}
          <div className="text-white z-10">
            {/* Main Title */}
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              <span className="block">Create The</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Digital Future
              </span>
            </h1>

            {/* Stats Section */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: "150+", label: "Projects", color: "text-blue-400" },
                { number: "95%", label: "Success Rate", color: "text-green-400" },
                { number: "24/7", label: "Support", color: "text-purple-400" },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div
                    className={`text-3xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Video Only */}
          <div className="relative lg:flex justify-center items-center hidden">
            <div className="relative w-full max-w-2xl">
              {/* Video Container */}
              <div className="relative  overflow-hidden ">
                <video
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  className="w-full h-auto object-cover rounded-3xl"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient for Left Side */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:via-slate-900/95 lg:to-transparent z-0"></div>
    </section>
  );
}