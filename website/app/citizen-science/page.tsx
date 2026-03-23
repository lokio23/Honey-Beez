"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Observation {
  id: number;
  species: string;
  flower: string;
  behavior: string;
  location: string;
  date: string;
  notes: string;
}

const beeOptions = [
  "Honeybee", "Bumblebee", "Mason Bee", "Carpenter Bee", "Sweat Bee",
  "Leafcutter Bee", "Mining Bee", "Unknown / Other",
];

const flowerOptions = [
  "Sunflower", "Lavender", "Clover", "Daisy", "Rose", "Wildflower mix",
  "Fruit tree blossom", "Vegetable flower", "Other",
];

const behaviorOptions = [
  "Collecting pollen", "Drinking nectar", "Buzz pollinating", "Flying between flowers",
  "Resting on a flower", "Entering a nest", "Hovering / patrolling", "Other",
];

const leaderboard = [
  { name: "Bee Team Alpha", observations: 47, badge: "🥇" },
  { name: "The Pollinators", observations: 35, badge: "🥈" },
  { name: "Buzz Squad", observations: 28, badge: "🥉" },
  { name: "Hive Minds", observations: 22, badge: "🐝" },
  { name: "Flower Power", observations: 18, badge: "🌸" },
];

const resources = [
  {
    name: "Great Sunflower Project",
    url: "https://www.greatsunflower.org/",
    description: "Plant sunflowers and count bee visitors — your data helps scientists track pollinator health!",
    emoji: "🌻",
  },
  {
    name: "Bumble Bee Watch",
    url: "https://www.bumblebeewatch.org/",
    description: "Photograph bumblebees and help scientists track endangered species across North America.",
    emoji: "📸",
  },
  {
    name: "iNaturalist",
    url: "https://www.inaturalist.org/",
    description: "Upload photos of any bee — AI helps identify the species, and scientists use your data!",
    emoji: "🔬",
  },
  {
    name: "SciStarter Pollinator Kits",
    url: "https://scistarter.org/library-kits/observing-pollinators/",
    description: "Free kits with everything you need to start observing pollinators like a real scientist.",
    emoji: "📦",
  },
];

export default function CitizenSciencePage() {
  const [observations, setObservations] = useState<Observation[]>([]);
  const [formData, setFormData] = useState({
    species: "",
    flower: "",
    behavior: "",
    location: "",
    notes: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newObs: Observation = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString(),
    };
    setObservations([newObs, ...observations]);
    setFormData({ species: "", flower: "", behavior: "", location: "", notes: "" });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cream">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 py-8 px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-white mb-2">
          🔬 Citizen Science Dashboard
        </h1>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto">
          Your observations have real scientific value! Log what you see and contribute
          to actual pollinator research.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Your Observations", value: observations.length, emoji: "📝" },
                { label: "Species Spotted", value: new Set(observations.map((o) => o.species)).size, emoji: "🐝" },
                { label: "Flowers Visited", value: new Set(observations.map((o) => o.flower)).size, emoji: "🌸" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 text-center shadow-md border border-teal-100">
                  <span className="text-2xl">{stat.emoji}</span>
                  <div className="font-display text-2xl font-bold text-teal-800">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Add Observation */}
            <div className="bg-white rounded-2xl shadow-md border border-teal-100 overflow-hidden">
              <button
                onClick={() => setShowForm(!showForm)}
                className="w-full p-4 flex items-center justify-between bg-teal-500 text-white font-bold hover:bg-teal-600 transition-colors"
              >
                <span>📝 Log New Observation</span>
                <span className="text-xl">{showForm ? "−" : "+"}</span>
              </button>

              {showForm && (
                <motion.form
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="p-6 space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">What bee did you see?</label>
                    <select
                      value={formData.species}
                      onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                      className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-teal-400 outline-none"
                      required
                    >
                      <option value="">Select a bee...</option>
                      {beeOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">What flower was it visiting?</label>
                    <select
                      value={formData.flower}
                      onChange={(e) => setFormData({ ...formData, flower: e.target.value })}
                      className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-teal-400 outline-none"
                      required
                    >
                      <option value="">Select a flower...</option>
                      {flowerOptions.map((f) => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">What was it doing?</label>
                    <select
                      value={formData.behavior}
                      onChange={(e) => setFormData({ ...formData, behavior: e.target.value })}
                      className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-teal-400 outline-none"
                      required
                    >
                      <option value="">Select a behavior...</option>
                      {behaviorOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g., School garden, backyard, park name..."
                      className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-teal-400 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Extra notes (optional)</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Anything interesting? Weather, time of day, bee behavior..."
                      className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-teal-400 outline-none h-20 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-500 text-white font-bold py-3 rounded-xl hover:bg-teal-600 transition-colors"
                  >
                    Submit Observation 🐝
                  </button>
                </motion.form>
              )}
            </div>

            {/* Observation Log */}
            <div>
              <h3 className="font-display font-bold text-teal-900 text-lg mb-3">Your Observation Log</h3>
              {observations.length === 0 ? (
                <div className="bg-white rounded-xl p-8 text-center text-gray-400 border-2 border-dashed border-gray-200">
                  <p className="text-4xl mb-2">🔍</p>
                  <p className="font-semibold">No observations yet!</p>
                  <p className="text-sm">Go outside, find a bee, and log what you see.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {observations.map((obs) => (
                    <div key={obs.id} className="bg-white rounded-xl p-4 shadow-sm border border-teal-100">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-teal-800">{obs.species}</span>
                          <span className="text-gray-400 mx-2">→</span>
                          <span className="text-pink-600 font-semibold">{obs.flower}</span>
                        </div>
                        <span className="text-xs text-gray-400">{obs.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Behavior:</strong> {obs.behavior} | <strong>Location:</strong> {obs.location}
                      </p>
                      {obs.notes && <p className="text-sm text-gray-500 mt-1 italic">{obs.notes}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <div className="bg-white rounded-2xl p-4 shadow-md border border-teal-100">
              <h3 className="font-display font-bold text-teal-900 mb-3">🏆 Group Leaderboard</h3>
              <div className="space-y-2">
                {leaderboard.map((team, i) => (
                  <div key={team.name} className="flex items-center gap-2">
                    <span className="text-lg">{team.badge}</span>
                    <span className="text-sm font-semibold text-gray-800 flex-1">{team.name}</span>
                    <span className="text-sm text-teal-600 font-bold">{team.observations}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Citizen Science Projects */}
            <div className="bg-white rounded-2xl p-4 shadow-md border border-teal-100">
              <h3 className="font-display font-bold text-teal-900 mb-3">🌍 Join Real Research</h3>
              <div className="space-y-3">
                {resources.map((res) => (
                  <div key={res.name} className="bg-teal-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{res.emoji}</span>
                      <span className="font-bold text-sm text-teal-800">{res.name}</span>
                    </div>
                    <p className="text-xs text-gray-600">{res.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Tips */}
            <div className="bg-amber-50 rounded-2xl p-4 border-2 border-amber-200">
              <h3 className="font-display font-bold text-amber-900 mb-3">📋 Field Tips</h3>
              <ul className="text-sm text-amber-800 space-y-2">
                <li>🕐 Best time: 10am-2pm on warm, sunny days</li>
                <li>🧍 Stay still near flowers — bees will come to you!</li>
                <li>📸 Take photos for species identification</li>
                <li>📏 Note the bee's size relative to the flower</li>
                <li>🎵 Listen for buzzing patterns — buzz pollination sounds different!</li>
                <li>⚠️ Don't touch or disturb the bees</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
