"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface FlowerLocation {
  x: number;
  y: number;
  name: string;
}

const flowers: FlowerLocation[] = [
  { x: 20, y: 15, name: "Sunflower Field" },
  { x: 75, y: 25, name: "Lavender Garden" },
  { x: 45, y: 70, name: "Wildflower Meadow" },
  { x: 85, y: 65, name: "Apple Orchard" },
  { x: 10, y: 80, name: "Clover Patch" },
  { x: 60, y: 10, name: "Rose Garden" },
];

const hivePosition = { x: 50, y: 45 };

function calculateDance(flower: FlowerLocation): { angle: number; duration: number; distance: number } {
  const dx = flower.x - hivePosition.x;
  const dy = flower.y - hivePosition.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(-dy, dx) * (180 / Math.PI);
  return { angle, duration: distance / 10, distance };
}

type Mode = "encode" | "decode";

export default function WagglePage() {
  const [mode, setMode] = useState<Mode>("encode");
  const [selectedFlower, setSelectedFlower] = useState<FlowerLocation | null>(null);
  const [isDancing, setIsDancing] = useState(false);
  const [decodeTarget, setDecodeTarget] = useState<FlowerLocation | null>(null);
  const [decodeGuess, setDecodeGuess] = useState<FlowerLocation | null>(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const startDance = useCallback(() => {
    if (selectedFlower) {
      setIsDancing(true);
      setTimeout(() => setIsDancing(false), 3000);
    }
  }, [selectedFlower]);

  const startDecodeRound = useCallback(() => {
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    setDecodeTarget(randomFlower);
    setDecodeGuess(null);
    setIsDancing(true);
    setTimeout(() => setIsDancing(false), 3000);
  }, []);

  const handleDecodeGuess = (flower: FlowerLocation) => {
    setDecodeGuess(flower);
    setAttempts(attempts + 1);
    if (decodeTarget && flower.name === decodeTarget.name) {
      setScore(score + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-cream">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 py-8 px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-white mb-2">
          💃 Waggle Dance Simulator
        </h1>
        <p className="text-purple-100 text-lg max-w-2xl mx-auto">
          Bees communicate flower locations through dance! The angle tells direction
          (relative to the sun), and the duration tells distance.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Mode Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setMode("encode")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              mode === "encode"
                ? "bg-purple-500 text-white shadow-lg scale-105"
                : "bg-white text-purple-600 hover:bg-purple-50"
            }`}
          >
            🌸 Encode Mode
            <span className="block text-xs font-normal">Pick a flower → Watch the dance</span>
          </button>
          <button
            onClick={() => { setMode("decode"); startDecodeRound(); }}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              mode === "decode"
                ? "bg-purple-500 text-white shadow-lg scale-105"
                : "bg-white text-purple-600 hover:bg-purple-50"
            }`}
          >
            🔍 Decode Mode
            <span className="block text-xs font-normal">Watch the dance → Guess the flower</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative bg-gradient-to-b from-green-200 to-green-300 rounded-2xl aspect-square border-4 border-green-600 shadow-lg overflow-hidden">
            {/* Sun indicator */}
            <div className="absolute top-2 right-2 text-3xl">☀️</div>

            {/* Hive */}
            <div
              className="absolute w-12 h-12 -ml-6 -mt-6 flex items-center justify-center"
              style={{ left: `${hivePosition.x}%`, top: `${hivePosition.y}%` }}
            >
              <div className="text-3xl">🏠</div>
              <span className="absolute -bottom-5 text-xs font-bold text-green-900 whitespace-nowrap">
                THE HIVE
              </span>
            </div>

            {/* Flowers */}
            {flowers.map((flower) => (
              <motion.button
                key={flower.name}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (mode === "encode") {
                    setSelectedFlower(flower);
                  } else if (mode === "decode" && !decodeGuess) {
                    handleDecodeGuess(flower);
                  }
                }}
                className={`absolute w-10 h-10 -ml-5 -mt-5 flex items-center justify-center text-2xl rounded-full transition-all ${
                  (mode === "encode" && selectedFlower?.name === flower.name)
                    ? "ring-4 ring-purple-500 bg-white scale-125"
                    : (mode === "decode" && decodeGuess?.name === flower.name)
                    ? decodeTarget?.name === flower.name
                      ? "ring-4 ring-green-500 bg-green-100"
                      : "ring-4 ring-red-500 bg-red-100"
                    : (mode === "decode" && decodeTarget?.name === flower.name && decodeGuess)
                    ? "ring-4 ring-green-500 bg-green-100"
                    : "hover:bg-white/50"
                }`}
                style={{ left: `${flower.x}%`, top: `${flower.y}%` }}
              >
                🌻
                <span className="absolute -bottom-5 text-[10px] font-bold text-green-900 whitespace-nowrap">
                  {flower.name}
                </span>
              </motion.button>
            ))}

            {/* Direction Line (when encoding) */}
            {mode === "encode" && selectedFlower && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line
                  x1={`${hivePosition.x}%`}
                  y1={`${hivePosition.y}%`}
                  x2={`${selectedFlower.x}%`}
                  y2={`${selectedFlower.y}%`}
                  stroke="rgba(147, 51, 234, 0.5)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />
              </svg>
            )}
          </div>

          {/* Dance Visualization */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
            <h2 className="font-display text-2xl font-bold text-purple-900 mb-4 text-center">
              {mode === "encode" ? "The Waggle Dance" : "What Does This Dance Mean?"}
            </h2>

            {/* Dance Arena */}
            <div className="relative bg-amber-100 rounded-xl h-64 flex items-center justify-center border-2 border-amber-300 mb-4">
              {isDancing && (selectedFlower || decodeTarget) ? (
                <motion.div
                  className="text-5xl"
                  animate={{
                    x: [0, 20, -20, 20, -20, 0],
                    y: [0, -30, -30, -30, -30, 0],
                    rotate: [0, 15, -15, 15, -15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: 1,
                    ease: "easeInOut",
                  }}
                >
                  🐝
                </motion.div>
              ) : (
                <div className="text-center text-amber-600">
                  <div className="text-4xl mb-2">🐝</div>
                  <p className="font-semibold">
                    {mode === "encode"
                      ? "Select a flower on the map, then hit 'Dance!'"
                      : "Watch carefully and guess the flower!"}
                  </p>
                </div>
              )}
            </div>

            {/* Dance Info */}
            {mode === "encode" && selectedFlower && (
              <div className="space-y-3">
                <div className="bg-purple-50 rounded-xl p-3">
                  <p className="text-sm text-purple-800">
                    <strong>Direction:</strong> {Math.round(calculateDance(selectedFlower).angle)}° from the sun
                  </p>
                  <p className="text-sm text-purple-800">
                    <strong>Distance:</strong> {calculateDance(selectedFlower).distance.toFixed(0)} bee-meters
                  </p>
                  <p className="text-sm text-purple-800">
                    <strong>Target:</strong> {selectedFlower.name}
                  </p>
                </div>
                <button
                  onClick={startDance}
                  disabled={isDancing}
                  className="w-full bg-purple-500 text-white font-bold py-3 rounded-xl hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isDancing ? "Dancing..." : "💃 Dance!"}
                </button>
              </div>
            )}

            {mode === "decode" && (
              <div className="space-y-3">
                {decodeGuess ? (
                  <div className={`rounded-xl p-4 text-center ${
                    decodeGuess.name === decodeTarget?.name
                      ? "bg-green-100 border-2 border-green-400"
                      : "bg-red-100 border-2 border-red-400"
                  }`}>
                    <p className="font-bold text-lg">
                      {decodeGuess.name === decodeTarget?.name ? "Correct! 🎉" : `Not quite! The answer was ${decodeTarget?.name}`}
                    </p>
                    <p className="text-sm mt-1">Score: {score}/{attempts}</p>
                    <button
                      onClick={startDecodeRound}
                      className="mt-3 bg-purple-500 text-white font-bold px-6 py-2 rounded-full hover:bg-purple-600"
                    >
                      Next Round →
                    </button>
                  </div>
                ) : (
                  <p className="text-center text-purple-600 font-semibold">
                    👆 Click a flower on the map to guess!
                  </p>
                )}
              </div>
            )}

            {/* How It Works */}
            <div className="mt-6 bg-gray-50 rounded-xl p-4">
              <h3 className="font-display font-bold text-gray-800 mb-2">How Waggle Dance Works</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>📐 <strong>Angle:</strong> The bee dances at an angle relative to straight up (which represents the sun). This tells direction.</li>
                <li>⏱️ <strong>Duration:</strong> The longer the waggle run, the farther away the flowers are.</li>
                <li>⚡ <strong>Intensity:</strong> The more excited the dance, the better the flower patch!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
