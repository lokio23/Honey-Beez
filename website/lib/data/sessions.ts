export interface SessionData {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  badge: string;
  culturalNote: { tradition: string; text: string };
  hookFact: string;
  learningPoints: { title: string; text: string; emoji: string }[];
  funFacts: string[];
  activities: { name: string; description: string; emoji: string }[];
  relatedModule: { href: string; label: string; emoji: string } | null;
}

export const sessions: SessionData[] = [
  {
    id: 1,
    title: "What IS a Bee?",
    subtitle: "Anatomy, identity, and the incredible world inside a tiny insect",
    emoji: "🔬",
    color: "from-amber-400 to-amber-600",
    badge: "Bee Spotter",
    culturalNote: {
      tradition: "Ancient Egypt",
      text: "The ancient Egyptians believed bees were born from the tears of the sun god Ra. Bees were so important that they appeared on the crowns of pharaohs!",
    },
    hookFact: "Bees can count up to 4 and do basic math — with a brain the size of a sesame seed!",
    learningPoints: [
      { title: "Five Eyes!", emoji: "👀", text: "Bees have 5 eyes — 2 large compound eyes with thousands of tiny lenses, plus 3 small simple eyes on top of their head that detect light intensity." },
      { title: "Branched Hairs", emoji: "🪶", text: "Unlike wasps, bee hairs are branched like tiny feathers. This is how they collect and carry pollen — it sticks to the branches!" },
      { title: "Pollen Baskets", emoji: "🧺", text: "Honeybees have special concave areas on their back legs called corbiculae (pollen baskets) where they pack pollen into neat little balls for the trip home." },
      { title: "The Stinger Truth", emoji: "⚡", text: "Only female bees can sting, and honeybees die after stinging because their barbed stinger pulls out. They really don't WANT to sting you — it's a last resort!" },
    ],
    funFacts: [
      "Not all bees make honey — only about 5% of the 20,000+ bee species do!",
      "A bee's wings beat 200 times per second — that's what creates the buzzing sound.",
      "Bees can recognize human faces and remember them for days.",
      "The queen bee can lay up to 2,000 eggs per day — that's one every 43 seconds!",
    ],
    activities: [
      { name: "Life-Size Bee Model", emoji: "🎨", description: "Build a collaborative life-size bee model showing all the anatomical features — 5 eyes, branched hairs, pollen baskets, and more!" },
      { name: "Bee vs. Wasp Challenge", emoji: "🔍", description: "Can you tell the difference? Learn to spot bees vs. wasps vs. hoverflies using key visual clues." },
      { name: "Bee Trivia Tournament", emoji: "🏆", description: "Test your new bee knowledge in a fast-paced team trivia game!" },
    ],
    relatedModule: { href: "/hive", label: "Explore the Virtual Hive", emoji: "🏠" },
  },
  {
    id: 2,
    title: "The Secret Language of Bees",
    subtitle: "How bees communicate through dance, scent, and vibrations",
    emoji: "💃",
    color: "from-purple-400 to-purple-600",
    badge: "Waggle Dancer",
    culturalNote: {
      tradition: "Ancient Greece",
      text: "The Greek Melissae were priestesses who served as oracles at temples. Their name means 'bee' — the Greeks believed bees carried messages between the human world and the divine.",
    },
    hookFact: "Bees encode exact flower locations into a dance — direction, distance, AND a quality rating!",
    learningPoints: [
      { title: "The Waggle Dance", emoji: "💃", text: "Scout bees perform a figure-8 dance on the honeycomb. The angle relative to straight up tells direction (compared to the sun), and the duration of the waggle run tells distance!" },
      { title: "Bee Democracy", emoji: "🗳️", text: "When a colony needs a new home, scouts visit candidates and dance to advertise them. Bees 'vote' by joining dances — and they even head-butt dancers to say 'shut up, my spot is better!'" },
      { title: "Pheromone Signals", emoji: "👃", text: "The queen releases pheromones that say 'I'm here and healthy.' Workers spread these through the hive mouth-to-mouth. If the queen's scent fades, the colony knows something is wrong." },
      { title: "Piping & Tooting", emoji: "🎵", text: "Virgin queens 'pipe' and 'toot' — vibrating sounds that mean 'I'm here!' and 'Stay away!' It's how rival queens communicate before one of them takes over." },
    ],
    funFacts: [
      "Karl von Frisch won the Nobel Prize in 1973 for decoding the waggle dance.",
      "The alarm pheromone bees release smells like bananas — isopentyl acetate!",
      "Bees can transmit information about a flower patch 10 km away through dance alone.",
      "A dancing bee can recruit up to 100 foragers to a new flower source.",
    ],
    activities: [
      { name: "Waggle Dance Challenge", emoji: "🕺", description: "Become a scout bee! Communicate a flower location to your team using only dance — no talking allowed!" },
      { name: "Design a Bee Language", emoji: "✏️", description: "Invent your own communication system for bees. How would YOU encode direction, distance, and quality?" },
      { name: "Decode the Dance", emoji: "🧩", description: "Watch waggle dance videos and figure out where the flowers are using the sun's position." },
    ],
    relatedModule: { href: "/waggle", label: "Try the Waggle Dance Simulator", emoji: "💃" },
  },
  {
    id: 3,
    title: "The Flower Connection",
    subtitle: "Pollination, food webs, and the invisible partnership that feeds the world",
    emoji: "🌸",
    color: "from-pink-400 to-pink-600",
    badge: "Pollination Pro",
    culturalNote: {
      tradition: "Natural World",
      text: "Flowers and bees have been co-evolving for over 100 million years. Some flowers have evolved 'landing pads,' UV guides, and specific scents just to attract their perfect bee partner!",
    },
    hookFact: "Flowers have secret ultraviolet runway markings that only bees can see — guiding them straight to the nectar!",
    learningPoints: [
      { title: "UV Vision", emoji: "🔮", text: "Bees see ultraviolet light that's invisible to us. Flowers have UV patterns called 'nectar guides' — like runway landing lights pointing to the pollen and nectar." },
      { title: "Buzz Pollination", emoji: "🎵", text: "Some flowers (like tomatoes) hide their pollen inside tubes. Only bumblebees can vibrate at exactly 130 Hz (middle C!) to shake it loose. It's called 'buzz pollination' and honeybees can't do it!" },
      { title: "The Food Web", emoji: "🍎", text: "One-third of everything you eat exists because of pollinators. Apples, almonds, strawberries, chocolate, coffee — without bees, these foods would disappear or become incredibly expensive." },
      { title: "Co-Evolution", emoji: "🔄", text: "Long-tongued bees evolved alongside deep tubular flowers. Short-tongued bees evolved with open, flat flowers. Each pair perfectly fits the other — like a lock and key!" },
    ],
    funFacts: [
      "A single bee colony can pollinate 300 million flowers every single day.",
      "Honeybees visit 50-100 flowers per foraging trip — carrying pollen between every one.",
      "Some orchids trick male bees by looking and smelling like a female bee!",
      "Without pollinators, a single almond wouldn't exist — every almond requires a bee visit.",
    ],
    activities: [
      { name: "Seed Bomb Factory", emoji: "💣", description: "Make seed balls packed with native wildflower seeds. Take them home, toss them in bare soil, and grow a pollinator garden!" },
      { name: "Pollination Relay Race", emoji: "🏃", description: "Teams race to 'pollinate' flowers using Cheeto dust as pollen — see how far it spreads!" },
      { name: "UV Flower Reveal", emoji: "🔦", description: "Use UV flashlights to see hidden patterns on flowers that bees can see but we normally can't." },
    ],
    relatedModule: { href: "/pollination", label: "Play the Pollination Puzzle", emoji: "🌸" },
  },
  {
    id: 4,
    title: "Bee Builders",
    subtitle: "Hexagonal engineering, honey production, and the math of the hive",
    emoji: "🔨",
    color: "from-orange-400 to-orange-600",
    badge: "Hive Architect",
    culturalNote: {
      tradition: "Celtic Tradition",
      text: "In Celtic cultures, people practiced 'telling the bees' — sharing important family news (births, deaths, marriages) with the hive. They believed bees were messengers between worlds and would leave if not kept informed.",
    },
    hookFact: "Bees solved a math problem that took humans 2,000 years — why hexagons are the most efficient shape for storage!",
    learningPoints: [
      { title: "Why Hexagons?", emoji: "⬡", text: "Hexagons tile perfectly with zero wasted space AND use the least wax per unit of storage. Mathematicians only proved this was optimal in 1999 — bees figured it out millions of years ago through evolution!" },
      { title: "How Honey Is Made", emoji: "🍯", text: "1) Forager collects nectar in her honey stomach. 2) Passes it mouth-to-mouth to a house bee. 3) House bees chew & add enzymes. 4) Spread in thin layers on comb. 5) Fan with wings to evaporate water (80% → 18%). 6) Cap with beeswax!" },
      { title: "Beeswax Chemistry", emoji: "🧪", text: "Young worker bees produce wax from special glands on their abdomen. It takes about 8 pounds of honey to produce just 1 pound of beeswax. Each wax scale is tiny — about the size of a pinhead!" },
      { title: "Temperature Control", emoji: "🌡️", text: "Bees keep the brood area at exactly 95°F (35°C). Too hot? They fan air and spread water droplets. Too cold? They vibrate their flight muscles to generate heat. The hive is a precision-engineered climate system!" },
    ],
    funFacts: [
      "Honey never spoils — archaeologists found 3,000-year-old honey in Egyptian tombs that was still perfectly edible!",
      "It takes about 60,000 bees visiting 2 million flowers to make just 1 pound of honey.",
      "Honeycomb cells are tilted at a 13° angle so honey doesn't drip out!",
      "A single bee produces only about 1/12th of a teaspoon of honey in her entire lifetime.",
    ],
    activities: [
      { name: "Beeswax Candle Rolling", emoji: "🕯️", description: "Roll beautiful honeycomb-textured candles from real beeswax sheets. The warm, honey scent is amazing!" },
      { name: "Hex Engineering Challenge", emoji: "🏗️", description: "Build the strongest possible structure using only toothpicks and marshmallows. Can you beat the hexagon?" },
      { name: "Honey Tasting Lab", emoji: "🍯", description: "Blind taste-test different honey varieties — clover, wildflower, buckwheat — and guess the flower source!" },
    ],
    relatedModule: { href: "/hive", label: "Explore the Virtual Hive", emoji: "🏠" },
  },
  {
    id: 5,
    title: "Meet the Family",
    subtitle: "Beyond honeybees — the incredible diversity of 20,000+ bee species",
    emoji: "👨‍👩‍👧‍👦",
    color: "from-blue-400 to-blue-600",
    badge: "Species Expert",
    culturalNote: {
      tradition: "Maya Civilization",
      text: "The Maya worshipped a stingless bee god called Ah Muzen Cab. They kept native stingless bees (Melipona) in special log hives for centuries, harvesting their rare medicinal honey for healing rituals.",
    },
    hookFact: "You know honeybees. But there are over 20,000 species of bees — and 90% of them live completely alone!",
    learningPoints: [
      { title: "Bumblebees", emoji: "🐝", text: "Big, fuzzy, and loud! Bumblebees are buzz pollination champions who can vibrate at 130 Hz to shake pollen loose. Some species have been found foraging on Mount Everest!" },
      { title: "Mason Bees", emoji: "🏗️", text: "Just 250 mason bees can do the pollination work of 30,000 honeybees! They're incredibly messy — pollen goes everywhere — which makes them super efficient pollinators." },
      { title: "Sweat Bees", emoji: "💎", text: "Tiny metallic green jewels! Some sweat bees can navigate by starlight — they're one of the few insects that can fly at night using the Milky Way as a compass." },
      { title: "Orchid Bees", emoji: "✨", text: "Males collect perfumes from up to 10 different orchid species, storing custom cologne blends in special leg pouches to attract mates. They're iridescent flying jewels!" },
    ],
    funFacts: [
      "The vulture bee is the only bee species that eats meat instead of pollen!",
      "Teddy bear bees sleep by clamping their jaws onto plant stems and hanging there all night.",
      "Cuckoo bees lay their eggs in other bees' nests — just like cuckoo birds!",
      "The Himalayan giant honeybee builds massive combs on sheer cliff faces at 3,000+ meters altitude.",
    ],
    activities: [
      { name: "Bee Hotel Construction", emoji: "🏨", description: "Build a real bee hotel for solitary native bees using bamboo tubes and untreated wood blocks. Hang it in your garden!" },
      { name: "Species ID Challenge", emoji: "🔍", description: "Can you identify 10 different bee species from photos? Watch out for imposters — hoverflies look like bees!" },
      { name: "Which Bee Are You? Quiz", emoji: "🧪", description: "Take the personality quiz to find out which of the 20,000+ bee species matches your personality!" },
    ],
    relatedModule: { href: "/species", label: "Explore the Species Database", emoji: "🔍" },
  },
  {
    id: 6,
    title: "Bees in Trouble",
    subtitle: "Understanding threats and discovering what YOU can do to help",
    emoji: "🚨",
    color: "from-red-400 to-red-600",
    badge: "Bee Detective",
    culturalNote: {
      tradition: "Hopi Nation",
      text: "The Hopi people of North America consider bees messengers between the physical world and the spirit world. When bees disappear from an area, the Hopi see it as a warning that the land is out of balance.",
    },
    hookFact: "1.7 million bee colonies died in the US last year alone. But here's the good news — YOU can help change that.",
    learningPoints: [
      { title: "The 4 Ps", emoji: "⚠️", text: "Pests (Varroa mites), Poor nutrition (loss of wildflowers), Pesticides (neonicotinoids), and Pathogens (viruses spread by mites). These four threats work together to weaken and kill colonies." },
      { title: "Habitat Loss", emoji: "🏗️", text: "As cities expand and farms grow, the wildflower meadows bees depend on disappear. A bee that has to fly 5 miles for food uses more energy than it gains — it's like driving 100 miles for a sandwich." },
      { title: "Climate Change", emoji: "🌡️", text: "Flowers are blooming earlier, but bees aren't waking up earlier. This 'mismatch' means bees emerge to find their food sources already gone. It's like showing up to a restaurant after it's closed." },
      { title: "What Kids Can Do", emoji: "💪", text: "Plant native wildflowers, build bee hotels, avoid pesticides, support local beekeepers, join citizen science programs, and spread the word. Every action matters — you're not too young to make a difference!" },
    ],
    funFacts: [
      "The rusty patched bumblebee population has declined 87% since the late 1990s — but conservation is helping bring them back!",
      "A single garden with bee-friendly flowers can support hundreds of native bees.",
      "Dandelions are one of the first spring foods for bees — think twice before mowing them!",
      "Cities can actually be BETTER for some bees than farmland because of flower diversity in gardens.",
    ],
    activities: [
      { name: "Bee Detective Mystery", emoji: "🕵️", description: "Investigate a fictional colony collapse using evidence packets — examine clues, rule out suspects, and solve the case!" },
      { name: "Nectar Economics", emoji: "🃏", description: "Play a card game where you're a forager bee trying to collect enough nectar while dodging pesticides and habitat loss." },
      { name: "Pollinator Garden Design", emoji: "🌻", description: "Design a bee-friendly garden plan with native flowers that bloom across all seasons — spring, summer, and fall food sources." },
    ],
    relatedModule: { href: "/citizen-science", label: "Join Citizen Science", emoji: "🔬" },
  },
  {
    id: 7,
    title: "Bee Scientists",
    subtitle: "Real scientific methods and how YOUR observations help researchers",
    emoji: "🔬",
    color: "from-teal-400 to-teal-600",
    badge: "Citizen Scientist",
    culturalNote: {
      tradition: "Scientific Discovery",
      text: "Karl von Frisch spent 50 years studying bees before winning the Nobel Prize for decoding the waggle dance. Great science often starts with simply watching carefully — exactly what you'll do today.",
    },
    hookFact: "Your observations have actual scientific value — real researchers use citizen science data to track bee populations worldwide!",
    learningPoints: [
      { title: "Observation vs. Interpretation", emoji: "📝", text: "A good scientist separates what they SEE from what they THINK. 'The bee is on a daisy' is an observation. 'The bee likes daisies' is an interpretation. Science starts with careful observations." },
      { title: "Citizen Science", emoji: "🌍", text: "Programs like the Great Sunflower Project, Bumble Bee Watch, and iNaturalist let anyone contribute to real research. Scientists can't be everywhere — they need YOUR eyes and ears!" },
      { title: "Data Collection", emoji: "📊", text: "Scientists use standardized methods so data from different people can be combined. Recording species, flower type, behavior, location, time, and weather makes your observations scientifically valuable." },
      { title: "Finding Patterns", emoji: "🧩", text: "When hundreds of people contribute observations, patterns emerge: which bees are declining, which flowers they prefer, how climate affects them. Your single observation is one piece of a massive puzzle!" },
    ],
    funFacts: [
      "iNaturalist has AI that can identify bee species from your phone photos!",
      "The Great Sunflower Project has collected data from over 100,000 gardens across North America.",
      "Some of the most important bee discoveries were made by amateur naturalists, not university professors.",
      "Best time to observe bees: 10am-2pm on warm, sunny, calm days.",
    ],
    activities: [
      { name: "Real Field Survey", emoji: "🌿", description: "Go outside with clipboards and data sheets. Spend 10 minutes observing bees on flowers — recording species, behavior, and flower type." },
      { name: "Data Analysis Challenge", emoji: "📈", description: "Compile your group's observations and look for patterns. Which flowers attracted the most bees? Which species did you see most?" },
      { name: "Photo ID Practice", emoji: "📸", description: "Practice identifying bee species from photographs. Can you tell a bumblebee from a carpenter bee?" },
    ],
    relatedModule: { href: "/citizen-science", label: "Log Your Observations", emoji: "🔬" },
  },
  {
    id: 8,
    title: "I Am a Bee Ambassador",
    subtitle: "Bringing it all together and committing to action",
    emoji: "🎓",
    color: "from-amber-500 to-amber-700",
    badge: "Bee Ambassador",
    culturalNote: {
      tradition: "Global",
      text: "Across every culture and continent, bees have been symbols of community, hard work, and the interconnectedness of all living things. Today, you join a global community of people committed to protecting them.",
    },
    hookFact: "You now know more about bees than most adults on the planet. That knowledge is a superpower — use it!",
    learningPoints: [
      { title: "The Full Picture", emoji: "🖼️", text: "Bees are architects, mathematicians, dancers, chemists, navigators, and farmers. They've been perfecting their craft for 100 million years. And now they need our help." },
      { title: "Your Impact", emoji: "🌱", text: "One person planting a pollinator garden, building a bee hotel, or teaching a friend about bees creates a ripple effect. You're not just learning — you're becoming an agent of change." },
      { title: "Spread the Word", emoji: "📣", text: "The biggest threat to bees might be that most people don't understand why they matter. As a Bee Ambassador, your job is to share what you've learned with family, friends, and your community." },
      { title: "The Bee Ambassador Pledge", emoji: "🤝", text: "I pledge to protect pollinators, plant native flowers, avoid pesticides, share my knowledge, and always remember: every bee matters, and so does every action I take." },
    ],
    funFacts: [
      "If every kid who completes this program plants just 5 native flowers, that's thousands of new food sources for bees!",
      "Bee Ambassador programs in schools have measurably increased local bee populations in some areas.",
      "You've learned about 20+ species, decoded waggle dances, and contributed to real science — that's incredible!",
      "Albert Einstein may never have said 'if the bee disappeared, mankind would have 4 years to live' — but the sentiment is closer to true than most people realize.",
    ],
    activities: [
      { name: "Zine Creation Workshop", emoji: "📖", description: "Create your own one-page bee zine using the one-sheet fold technique. Fill it with your favorite facts to share with others!" },
      { name: "Capstone Presentation", emoji: "🎤", description: "Share one thing you've learned and one action you'll take as a Bee Ambassador. Every voice matters!" },
      { name: "Graduation Ceremony", emoji: "🎓", description: "Receive your official Bee Ambassador certificate with all 8 achievement badges. You've earned it!" },
    ],
    relatedModule: null,
  },
];

export function getSessionById(id: number): SessionData | undefined {
  return sessions.find((s) => s.id === id);
}
