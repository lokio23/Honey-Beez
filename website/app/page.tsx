"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProgressTracker from "@/components/ProgressTracker";

const modules = [
  {
    href: "/hive",
    title: "The Hive",
    description: "Explore inside a real beehive! Click to discover what bees do in every part of their home.",
    emoji: "🏠",
    color: "from-amber-400 to-amber-600",
    unlockSession: 1,
  },
  {
    href: "/adventure",
    title: "Day in the Life",
    description: "Choose your role — Forager, Nurse, Guard, or Scout — and live a day as a bee!",
    emoji: "🗺️",
    color: "from-green-400 to-green-600",
    unlockSession: 1,
  },
  {
    href: "/pollination",
    title: "Pollination Puzzle",
    description: "Match bees to their perfect flowers. Can you master buzz pollination?",
    emoji: "🌸",
    color: "from-pink-400 to-pink-600",
    unlockSession: 3,
  },
  {
    href: "/waggle",
    title: "Waggle Dance",
    description: "Decode the secret language of bees! Translate dances into directions and back again.",
    emoji: "💃",
    color: "from-purple-400 to-purple-600",
    unlockSession: 2,
  },
  {
    href: "/species",
    title: "Species Explorer",
    description: "Meet the 20,000+ bee species of the world. Take the quiz: Which bee are YOU?",
    emoji: "🔍",
    color: "from-blue-400 to-blue-600",
    unlockSession: 5,
  },
  {
    href: "/citizen-science",
    title: "Citizen Science",
    description: "Log your real bee observations and contribute to actual scientific research!",
    emoji: "🔬",
    color: "from-teal-400 to-teal-600",
    unlockSession: 7,
  },
];

const funFacts = [
  "Bees can count up to 4 and do basic math!",
  "A honeybee visits 50-100 flowers in one trip.",
  "Bees can recognize human faces.",
  "Honey never spoils — archaeologists found 3,000-year-old honey that was still good!",
  "Bees communicate by dancing — it's called the waggle dance.",
  "There are over 20,000 known species of bees worldwide.",
  "A single bee colony can pollinate 300 million flowers each day.",
  "Bees see ultraviolet light — flowers look completely different to them!",
];

export default function HomePage() {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-300 via-amber-200 to-cream py-16 px-4">
        <div className="honeycomb-bg absolute inset-0" />
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Animated Bee */}
          <motion.div
            className="text-8xl mb-6"
            animate={{
              y: [0, -20, -10, -25, 0],
              rotate: [0, 3, -2, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🐝
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-7xl font-bold text-amber-900 mb-4 drop-shadow-sm"
          >
            Honey Beez
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-amber-800 font-semibold mb-2"
          >
            From Curious Kid to Bee Ambassador
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-amber-700 max-w-2xl mx-auto mb-8"
          >
            Explore the incredible world of bees through interactive games,
            hands-on activities, and real science. Ready to join the hive?
          </motion.p>

          {/* Fun Fact Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border-2 border-amber-300"
          >
            <p className="text-amber-800 font-semibold">
              <span className="text-amber-500 mr-2">Did you know?</span>
              {randomFact}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="max-w-5xl mx-auto px-4 -mt-6 relative z-10 mb-12">
        <ProgressTracker completedSessions={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </section>

      {/* Module Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="font-display text-3xl font-bold text-amber-900 mb-8 text-center">
          Explore & Learn
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link href={mod.href} className="block group">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-amber-100 hover:border-amber-300 group-hover:-translate-y-1">
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${mod.color} p-4 flex items-center gap-3`}>
                    <span className="text-4xl group-hover:animate-bee-float">
                      {mod.emoji}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white drop-shadow-sm">
                      {mod.title}
                    </h3>
                  </div>
                  {/* Card Body */}
                  <div className="p-4">
                    <p className="text-amber-800 text-sm leading-relaxed">
                      {mod.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-amber-600">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                        Unlocked
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "8", label: "Sessions", emoji: "📚" },
            { number: "20+", label: "Bee Species", emoji: "🐝" },
            { number: "6", label: "Interactive Games", emoji: "🎮" },
            { number: "1", label: "Amazing You", emoji: "⭐" },
          ].map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="text-3xl mb-1">{stat.emoji}</div>
              <div className="font-display text-4xl font-bold">{stat.number}</div>
              <div className="text-amber-200 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 py-8 px-4 text-center">
        <p className="font-display text-lg mb-2">
          🐝 Honey Beez — Inspiring the next generation of bee ambassadors
        </p>
        <p className="text-amber-400 text-sm">
          Made with love for bees and the kids who will save them.
        </p>
      </footer>
    </div>
  );
}
