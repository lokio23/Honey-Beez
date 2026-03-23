"use client";

import { motion } from "framer-motion";

const sessions = [
  { id: 1, title: "What IS a Bee?", badge: "Bee Spotter" },
  { id: 2, title: "Secret Language", badge: "Waggle Dancer" },
  { id: 3, title: "Flower Connection", badge: "Pollination Pro" },
  { id: 4, title: "Bee Builders", badge: "Hive Architect" },
  { id: 5, title: "Meet the Family", badge: "Species Expert" },
  { id: 6, title: "Bees in Trouble", badge: "Bee Detective" },
  { id: 7, title: "Bee Scientists", badge: "Citizen Scientist" },
  { id: 8, title: "Bee Ambassador", badge: "Bee Ambassador" },
];

interface ProgressTrackerProps {
  completedSessions?: number[];
}

export default function ProgressTracker({ completedSessions = [] }: ProgressTrackerProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-amber-200">
      <h3 className="font-display text-xl font-bold text-amber-800 mb-4">
        Your Bee Journey
      </h3>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {sessions.map((session, i) => {
          const isComplete = completedSessions.includes(session.id);
          const isNext = !isComplete && (i === 0 || completedSessions.includes(sessions[i - 1].id));

          return (
            <motion.div
              key={session.id}
              whileHover={{ scale: 1.1 }}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl text-center cursor-pointer transition-colors ${
                isComplete
                  ? "bg-amber-100 border-2 border-amber-400"
                  : isNext
                  ? "bg-amber-50 border-2 border-dashed border-amber-300 animate-pulse-glow"
                  : "bg-gray-100 border-2 border-gray-200 opacity-50"
              }`}
            >
              <div className="text-2xl">
                {isComplete ? "⭐" : isNext ? "🐝" : "🔒"}
              </div>
              <span className="text-xs font-semibold leading-tight">
                {session.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
