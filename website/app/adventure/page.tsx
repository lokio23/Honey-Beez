"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StoryNode {
  id: string;
  text: string;
  emoji: string;
  choices?: { text: string; nextId: string }[];
  ending?: { title: string; description: string };
}

const roles = [
  {
    id: "forager",
    name: "Forager Bee",
    emoji: "🌻",
    description: "You fly miles from the hive to find the best flowers. Adventure awaits!",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "nurse",
    name: "Nurse Bee",
    emoji: "🍼",
    description: "You care for thousands of baby bees. The future of the hive depends on you!",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: "guard",
    name: "Guard Bee",
    emoji: "🛡️",
    description: "You protect the hive entrance. Only family gets in on your watch!",
    color: "from-red-400 to-red-600",
  },
  {
    id: "scout",
    name: "Scout Bee",
    emoji: "🗺️",
    description: "You explore the unknown to find new flower patches and hive locations!",
    color: "from-blue-400 to-indigo-500",
  },
];

const foragerStory: Record<string, StoryNode> = {
  start: {
    id: "start",
    text: "The sun is rising and the hive is buzzing with excitement. As a forager bee, you're about to make your first flight of the day. A scout just performed an amazing waggle dance — she found flowers! But you also noticed a patch of wildflowers near the hive yesterday.",
    emoji: "🌅",
    choices: [
      { text: "Follow the scout's directions to the distant flower field", nextId: "distant" },
      { text: "Visit the nearby wildflowers you spotted yesterday", nextId: "nearby" },
    ],
  },
  distant: {
    id: "distant",
    text: "You fly 3 miles following the scout's directions! The field is AMAZING — acres of lavender stretching to the horizon. But it's getting cloudy and you're far from home. Other foragers are already loading up with nectar.",
    emoji: "💜",
    choices: [
      { text: "Fill up completely — maximum nectar load!", nextId: "fullload" },
      { text: "Take a partial load and head back before the storm", nextId: "earlyreturn" },
    ],
  },
  nearby: {
    id: "nearby",
    text: "The wildflowers are beautiful and close to home! You find daisies, clover, and a few sunflowers. The nectar flow is moderate — not the jackpot, but reliable. You notice a strange bee hovering nearby that doesn't smell like your colony...",
    emoji: "🌼",
    choices: [
      { text: "Investigate the strange bee", nextId: "stranger" },
      { text: "Ignore it and keep foraging", nextId: "keepforaging" },
    ],
  },
  fullload: {
    id: "fullload",
    text: "Your honey stomach is FULL — you're carrying nearly your own body weight in nectar! But the storm clouds are rolling in fast. Rain is deadly for a bee — wet wings can't fly. You need to make a decision NOW.",
    emoji: "⛈️",
    choices: [
      { text: "Fly as fast as you can for the hive!", nextId: "racehome" },
      { text: "Find shelter under a leaf and wait it out", nextId: "shelter" },
    ],
  },
  earlyreturn: {
    id: "earlyreturn",
    text: "Smart thinking! You make it home just as the first drops fall. The guard bees let you in after a quick scent check. You do a waggle dance to tell the colony about the lavender field — for tomorrow! Your sisters gather around, reading your dance moves.",
    emoji: "💃",
    ending: {
      title: "The Wise Forager! 🧠",
      description: "You balanced risk and reward perfectly. By returning early, you brought nectar safely AND shared valuable information for tomorrow. The colony thrives because of smart decisions like yours. In real life, forager bees make these risk calculations constantly!",
    },
  },
  racehome: {
    id: "racehome",
    text: "You buzz with everything you've got! The rain starts but you ride the wind. Your navigation skills kick in — you're using the sun's position, landmarks, and even the Earth's magnetic field. You make it home soaking wet but safe, carrying a full load of precious nectar!",
    emoji: "🏆",
    ending: {
      title: "The Brave Forager! 💪",
      description: "Risky but it paid off! A full nectar load is incredibly valuable to the colony. Real forager bees DO navigate through rain sometimes — they use multiple senses including magnetoreception (sensing Earth's magnetic field) to find their way home!",
    },
  },
  shelter: {
    id: "shelter",
    text: "You tuck under a large leaf as rain pours down. It's cold and you shiver, vibrating your flight muscles to stay warm (just like the bees in the winter cluster!). After an hour, the rain stops. You fly home safely with all your nectar. The colony is grateful!",
    emoji: "🍃",
    ending: {
      title: "The Survivor! 🍃",
      description: "Excellent survival instinct! Bees really do shelter under leaves during storms. The muscle vibration you used to stay warm is the same technique the whole colony uses in winter — they vibrate together to heat the cluster to 95°F even when it's freezing outside!",
    },
  },
  stranger: {
    id: "stranger",
    text: "The strange bee is a robber bee from another colony! She's trying to steal nectar from the flowers in YOUR territory. You puff up and buzz loudly in a threat display. She backs off! But you notice she's heading toward your hive entrance...",
    emoji: "⚠️",
    choices: [
      { text: "Race back to warn the guard bees!", nextId: "warnguards" },
      { text: "Follow the robber to see where her hive is", nextId: "followrobber" },
    ],
  },
  keepforaging: {
    id: "keepforaging",
    text: "You focus on the task at hand and fill up on clover nectar. It might not be the most exciting day, but you're contributing steadily to the colony's honey stores. Every flower visit matters — you touch hundreds of flowers, pollinating each one!",
    emoji: "🌸",
    ending: {
      title: "The Steady Worker! 🐝",
      description: "Not every day is an adventure, and that's okay! Consistent foraging is what keeps the colony alive. A single bee visits 50-100 flowers per trip and makes about 1/12th of a teaspoon of honey in her entire lifetime. Every drop counts!",
    },
  },
  warnguards: {
    id: "warnguards",
    text: "You zoom back to the hive and release alarm pheromones near the entrance. The guard bees go to high alert! When the robber bee arrives, she's met by a wall of defenders. The hive is safe, thanks to your warning!",
    emoji: "🛡️",
    ending: {
      title: "The Protector! 🚨",
      description: "Amazing teamwork! Bees really do use alarm pheromones (specifically isopentyl acetate — which smells like bananas!) to warn the colony of danger. Guard bees can identify robbers by their different colony scent. Your quick thinking saved the hive's honey reserves!",
    },
  },
  followrobber: {
    id: "followrobber",
    text: "You shadow the robber bee at a safe distance. She leads you to a weak colony 2 miles away. This is valuable intelligence! You memorize the location and fly home to report. The colony now knows to watch for robbers from that direction.",
    emoji: "🕵️",
    ending: {
      title: "The Intelligence Agent! 🔍",
      description: "Incredible scouting work! While following robber bees isn't well-documented, bees DO have remarkable spatial memory and can remember locations precisely. Your colony can now post extra guards facing that direction. Knowledge is power — even in the bee world!",
    },
  },
};

export default function AdventurePage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [currentNode, setCurrentNode] = useState<string>("start");

  const story = foragerStory; // For now, only forager story is implemented
  const node = story[currentNode];

  const resetAdventure = () => {
    setSelectedRole(null);
    setCurrentNode("start");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-cream">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-8 px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-white mb-2">
          🗺️ Day in the Life
        </h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Choose your role and live a day as a bee! Every choice matters in the hive.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {!selectedRole ? (
          /* Role Selection */
          <div>
            <h2 className="font-display text-2xl font-bold text-green-900 mb-6 text-center">
              Choose Your Role
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {roles.map((role) => (
                <motion.button
                  key={role.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setSelectedRole(role.id);
                    setCurrentNode("start");
                  }}
                  className={`bg-gradient-to-br ${role.color} rounded-2xl p-6 text-white text-left shadow-lg hover:shadow-xl transition-shadow ${
                    role.id !== "forager" ? "opacity-60" : ""
                  }`}
                  disabled={role.id !== "forager"}
                >
                  <span className="text-4xl block mb-3">{role.emoji}</span>
                  <h3 className="font-display text-xl font-bold">{role.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{role.description}</p>
                  {role.id !== "forager" && (
                    <span className="inline-block mt-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                      Coming Soon!
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          /* Story */
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNode}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-2xl shadow-lg border-2 border-green-200 overflow-hidden"
            >
              {/* Story Text */}
              <div className="p-8">
                <div className="text-center text-5xl mb-4">{node.emoji}</div>
                <p className="text-gray-800 text-lg leading-relaxed">{node.text}</p>
              </div>

              {/* Choices or Ending */}
              <div className="bg-green-50 p-6 border-t-2 border-green-100">
                {node.choices ? (
                  <div className="space-y-3">
                    <p className="font-display font-bold text-green-800 mb-3">What do you do?</p>
                    {node.choices.map((choice, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentNode(choice.nextId)}
                        className="w-full text-left px-5 py-4 bg-white rounded-xl border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-colors text-green-900 font-medium"
                      >
                        {choice.text}
                      </button>
                    ))}
                  </div>
                ) : node.ending ? (
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-bold text-green-900 mb-3">
                      {node.ending.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {node.ending.description}
                    </p>
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={() => setCurrentNode("start")}
                        className="bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600"
                      >
                        🔄 Play Again
                      </button>
                      <button
                        onClick={resetAdventure}
                        className="bg-gray-200 text-gray-700 font-bold px-6 py-3 rounded-full hover:bg-gray-300"
                      >
                        Choose Another Role
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
