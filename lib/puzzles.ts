export type Topic =
  | "AI"
  | "Tech"
  | "Healthcare"
  | "Startups"
  | "Science"
  | "Research";

export type Puzzle = {
  id: number;
  answer: string;
  clue: string;
  topic: Topic;
  explanation: string;
  sourceUrl: string;
  sourceLabel: string;
};

export const PUZZLES: Puzzle[] = [
  {
    id: 1,
    answer: "TENSOR",
    clue: "The n-dimensional array that every deep learning framework is built around.",
    topic: "AI",
    explanation:
      "A tensor generalises scalars, vectors and matrices to any number of dimensions. Frameworks like PyTorch represent every image, sentence and weight matrix as one, which is why a single set of GPU kernels can accelerate wildly different models.",
    sourceUrl: "https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html",
    sourceLabel: "PyTorch: Tensors",
  },
  {
    id: 2,
    answer: "TOKEN",
    clue: "The chunk of text a language model actually reads — usually shorter than a word.",
    topic: "AI",
    explanation:
      "Models don't see characters or words, they see tokens produced by a subword tokenizer. This is why models can spell badly, why unusual names cost more tokens, and why pricing and context limits are all quoted per token.",
    sourceUrl: "https://platform.openai.com/tokenizer",
    sourceLabel: "Tokenizer playground",
  },
  {
    id: 3,
    answer: "GRADIENT",
    clue: "The direction of steepest increase — training walks the opposite way.",
    topic: "AI",
    explanation:
      "Backpropagation computes this quantity for every weight, then the optimiser steps against it to reduce loss. Nearly every failure mode in deep learning (vanishing, exploding, clipping) is a story about this signal being too small or too large.",
    sourceUrl: "https://en.wikipedia.org/wiki/Backpropagation",
    sourceLabel: "Backpropagation",
  },
  {
    id: 4,
    answer: "DROPOUT",
    clue: "Randomly switching neurons off during training so the network stops over-relying on any one.",
    topic: "AI",
    explanation:
      "Introduced by Hinton's group in 2012, it forces redundant representations and acts like training an ensemble of many thinner networks. It was one of the key tricks that made large networks trainable without catastrophic overfitting.",
    sourceUrl: "https://jmlr.org/papers/v15/srivastava14a.html",
    sourceLabel: "Srivastava et al., 2014",
  },
  {
    id: 5,
    answer: "SOFTMAX",
    clue: "Turns a vector of raw scores into probabilities that sum to one.",
    topic: "AI",
    explanation:
      "It exponentiates each logit and normalises, so the largest score dominates smoothly rather than abruptly. The temperature parameter you tune when sampling from a language model is a divisor inside this function.",
    sourceUrl: "https://en.wikipedia.org/wiki/Softmax_function",
    sourceLabel: "Softmax function",
  },
  {
    id: 6,
    answer: "LATENT",
    clue: "The hidden compressed space where a model keeps meaning, not pixels.",
    topic: "AI",
    explanation:
      "Autoencoders and diffusion models compress inputs into this lower-dimensional space where similar concepts sit close together. Stable Diffusion runs its denoising here rather than on pixels, which is what made image generation cheap enough for consumer GPUs.",
    sourceUrl: "https://en.wikipedia.org/wiki/Latent_space",
    sourceLabel: "Latent space",
  },
  {
    id: 7,
    answer: "OVERFIT",
    clue: "When a model memorises the training set and fails on anything new.",
    topic: "AI",
    explanation:
      "The classic symptom is training loss falling while validation loss rises. It is the reason held-out test sets exist, and the reason benchmark contamination is such a serious problem for evaluating modern language models.",
    sourceUrl: "https://en.wikipedia.org/wiki/Overfitting",
    sourceLabel: "Overfitting",
  },
  {
    id: 8,
    answer: "EPOCH",
    clue: "One full pass through the entire training dataset.",
    topic: "AI",
    explanation:
      "Small models train for many of these; frontier language models often see their data barely once, because the corpus is enormous and repetition risks memorisation. The shift from many passes to roughly one is a quiet but fundamental change in how scale works.",
    sourceUrl: "https://arxiv.org/abs/2203.15556",
    sourceLabel: "Chinchilla scaling laws",
  },
  {
    id: 9,
    answer: "AGENT",
    clue: "A model given tools and a loop, so it can act rather than just answer.",
    topic: "AI",
    explanation:
      "The pattern is simple: the model proposes a tool call, the runtime executes it, the result comes back, repeat until done. Almost all the engineering difficulty is in error recovery and knowing when to stop, not in the model itself.",
    sourceUrl: "https://www.anthropic.com/engineering/building-effective-agents",
    sourceLabel: "Building effective agents",
  },
  {
    id: 10,
    answer: "PROMPT",
    clue: "The input text that conditions everything a language model produces next.",
    topic: "AI",
    explanation:
      "Because a model is a conditional probability distribution over continuations, changing this input changes the distribution rather than merely the phrasing. That is why small wording changes can shift accuracy measurably on the same task.",
    sourceUrl: "https://arxiv.org/abs/2201.11903",
    sourceLabel: "Chain-of-thought prompting",
  },
  {
    id: 11,
    answer: "CACHE",
    clue: "Fast storage that keeps recent results so you don't recompute or refetch them.",
    topic: "Tech",
    explanation:
      "Every layer of computing has one: CPU registers, browsers, CDNs, DNS. Phil Karlton's joke that the two hard problems in computer science are naming things and invalidating these is repeated so often because staleness bugs really are that common.",
    sourceUrl: "https://en.wikipedia.org/wiki/Cache_(computing)",
    sourceLabel: "Cache (computing)",
  },
  {
    id: 12,
    answer: "LATENCY",
    clue: "Time to first response — distinct from how much you can push per second.",
    topic: "Tech",
    explanation:
      "It is bounded below by the speed of light, which is why physical distance to a datacenter still matters no matter how much bandwidth you buy. Teams track the 99th percentile rather than the average, because the slow tail is what users actually notice.",
    sourceUrl: "https://en.wikipedia.org/wiki/Latency_(engineering)",
    sourceLabel: "Latency",
  },
  {
    id: 13,
    answer: "KERNEL",
    clue: "The core of an operating system, sitting between programs and hardware.",
    topic: "Tech",
    explanation:
      "It owns memory, scheduling and device access, and programs must ask it for anything privileged via system calls. The monolithic-versus-microkernel argument between Linus Torvalds and Andrew Tanenbaum in 1992 is still one of the most cited debates in systems.",
    sourceUrl: "https://en.wikipedia.org/wiki/Kernel_(operating_system)",
    sourceLabel: "Kernel",
  },
  {
    id: 14,
    answer: "QUORUM",
    clue: "The minimum number of nodes that must agree before a distributed system commits.",
    topic: "Tech",
    explanation:
      "Requiring a majority guarantees any two decisions share at least one node, which is what prevents split-brain. Raft and Paxos are both, at heart, careful protocols for obtaining this safely when messages can be lost or delayed.",
    sourceUrl: "https://raft.github.io/",
    sourceLabel: "The Raft consensus algorithm",
  },
  {
    id: 15,
    answer: "SHARDING",
    clue: "Splitting one database horizontally across many machines.",
    topic: "Tech",
    explanation:
      "Each machine holds a slice of the rows, so writes scale past what a single server can handle. The cost is that queries spanning slices and transactions across them become dramatically harder, which is why teams delay this as long as they can.",
    sourceUrl: "https://en.wikipedia.org/wiki/Shard_(database_architecture)",
    sourceLabel: "Database sharding",
  },
  {
    id: 16,
    answer: "COMPILER",
    clue: "Translates source code into something a machine can execute.",
    topic: "Tech",
    explanation:
      "Modern ones do far more than translate: they inline, vectorise and reorder aggressively while preserving observable behaviour. Ken Thompson's 1984 lecture showed one could be backdoored to insert a bug into itself invisibly, a foundational result in supply-chain security.",
    sourceUrl: "https://dl.acm.org/doi/10.1145/358198.358210",
    sourceLabel: "Reflections on Trusting Trust",
  },
  {
    id: 17,
    answer: "PACKET",
    clue: "The unit networks chop your data into before sending it.",
    topic: "Tech",
    explanation:
      "Switching these independently, rather than reserving a circuit, is the design decision that made the internet resilient and cheap. Each one can take a different route and arrive out of order, which is precisely why TCP has to exist above IP.",
    sourceUrl: "https://en.wikipedia.org/wiki/Packet_switching",
    sourceLabel: "Packet switching",
  },
  {
    id: 18,
    answer: "HASHING",
    clue: "Mapping arbitrary input to a fixed-size fingerprint.",
    topic: "Tech",
    explanation:
      "It gives constant-time lookups in hash tables and tamper-evidence in Git and blockchains. Password storage deliberately uses slow variants like bcrypt, because for that one use case being fast is the vulnerability.",
    sourceUrl: "https://en.wikipedia.org/wiki/Hash_function",
    sourceLabel: "Hash function",
  },
  {
    id: 19,
    answer: "RUNTIME",
    clue: "The environment that manages your program while it executes.",
    topic: "Tech",
    explanation:
      "It handles memory, garbage collection, threads and the standard library your code assumes exists. The difference between Node, Deno and Bun is largely a difference in this layer rather than in JavaScript the language.",
    sourceUrl: "https://en.wikipedia.org/wiki/Runtime_system",
    sourceLabel: "Runtime system",
  },
  {
    id: 20,
    answer: "PROTOCOL",
    clue: "The agreed set of rules that lets two independent systems talk.",
    topic: "Tech",
    explanation:
      "The internet's power comes from these being open and layered, so anyone can implement one without permission. HTTP, TCP and SMTP long outlived the companies and machines they were designed on, which is the strongest argument for open standards there is.",
    sourceUrl: "https://www.rfc-editor.org/",
    sourceLabel: "The RFC Editor",
  },
  {
    id: 21,
    answer: "PLACEBO",
    clue: "The inert treatment that patients in a control group receive.",
    topic: "Healthcare",
    explanation:
      "Its effect is real and measurable — expectation alone changes reported pain and even some physiological markers. This is exactly why blinding matters: without it, you cannot tell your drug apart from your patient's belief in it.",
    sourceUrl: "https://en.wikipedia.org/wiki/Placebo",
    sourceLabel: "Placebo",
  },
  {
    id: 22,
    answer: "TRIAGE",
    clue: "Sorting patients by urgency when resources are scarcer than need.",
    topic: "Healthcare",
    explanation:
      "The system was formalised by Napoleonic battlefield surgeons who treated by severity rather than rank. The uncomfortable core idea is that maximising total survival sometimes means deprioritising the most critically injured.",
    sourceUrl: "https://en.wikipedia.org/wiki/Triage",
    sourceLabel: "Triage",
  },
  {
    id: 23,
    answer: "GENOME",
    clue: "The complete set of genetic instructions in an organism.",
    topic: "Healthcare",
    explanation:
      "The human one took 13 years and roughly three billion dollars to first sequence; the same work now costs a few hundred. That cost curve fell faster than Moore's law, and it is the single reason personalised medicine became plausible.",
    sourceUrl: "https://www.genome.gov/human-genome-project",
    sourceLabel: "The Human Genome Project",
  },
  {
    id: 24,
    answer: "ANTIGEN",
    clue: "The molecular shape an immune system learns to recognise.",
    topic: "Healthcare",
    explanation:
      "Vaccines work by presenting one without the accompanying disease, so memory cells are primed in advance. When a virus mutates the shape enough, prior immunity degrades — which is why flu shots are reformulated every year.",
    sourceUrl: "https://en.wikipedia.org/wiki/Antigen",
    sourceLabel: "Antigen",
  },
  {
    id: 25,
    answer: "SEPSIS",
    clue: "The body's own immune response to infection turning destructive.",
    topic: "Healthcare",
    explanation:
      "It kills roughly 11 million people a year, more than most cancers, largely because early signs are non-specific and easily missed. Detecting it hours sooner is one of the few clinical prediction problems where machine learning has shown genuine measurable benefit.",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/sepsis",
    sourceLabel: "WHO: Sepsis",
  },
  {
    id: 26,
    answer: "COHORT",
    clue: "A group followed over time to see what happens to them.",
    topic: "Healthcare",
    explanation:
      "Following people forward avoids the recall bias that plagues asking them to remember the past. The Framingham Heart Study has tracked one since 1948 and is where the concept of a cardiovascular risk factor originally came from.",
    sourceUrl: "https://www.framinghamheartstudy.org/",
    sourceLabel: "Framingham Heart Study",
  },
  {
    id: 27,
    answer: "BIOPSY",
    clue: "Removing a small tissue sample to examine it directly.",
    topic: "Healthcare",
    explanation:
      "It remains the definitive answer for most cancer diagnoses because imaging shows shape while this shows cells. Liquid versions that detect tumour DNA in a blood draw are the current frontier, promising the same answer without the needle.",
    sourceUrl: "https://en.wikipedia.org/wiki/Biopsy",
    sourceLabel: "Biopsy",
  },
  {
    id: 28,
    answer: "INSULIN",
    clue: "The hormone that lets cells take glucose out of the blood.",
    topic: "Healthcare",
    explanation:
      "Its discoverers sold the patent for one dollar each in 1923, believing a life-saving drug should not be profited from. That decision is now a standard case study in how patent structure alone cannot keep a drug affordable.",
    sourceUrl: "https://www.nobelprize.org/prizes/medicine/1923/summary/",
    sourceLabel: "Nobel Prize, 1923",
  },
  {
    id: 29,
    answer: "RUNWAY",
    clue: "How many months a startup can survive at its current spend.",
    topic: "Startups",
    explanation:
      "It is simply cash divided by net monthly burn, and it governs nearly every decision a founder makes. The conventional advice is to raise with 12 to 18 months left, because fundraising itself takes months you have to be able to afford.",
    sourceUrl: "https://www.ycombinator.com/library/6f-default-alive-or-default-dead",
    sourceLabel: "Default Alive or Default Dead?",
  },
  {
    id: 30,
    answer: "PIVOT",
    clue: "Changing direction while keeping what you learned.",
    topic: "Startups",
    explanation:
      "Slack came out of a failed game, and Instagram from a cluttered check-in app. The distinction that matters is between changing strategy while keeping a validated insight, and simply abandoning one idea for an unrelated one.",
    sourceUrl: "https://www.ycombinator.com/library",
    sourceLabel: "Y Combinator Library",
  },
  {
    id: 31,
    answer: "CHURN",
    clue: "The rate at which customers stop paying you.",
    topic: "Startups",
    explanation:
      "It sets a hard ceiling on size: at 5% monthly, a business stalls at roughly 20 times its monthly new customers no matter how well it sells. This is why retention work usually beats acquisition spend for subscription companies.",
    sourceUrl: "https://a16z.com/2015/08/21/16-metrics/",
    sourceLabel: "a16z: 16 startup metrics",
  },
  {
    id: 32,
    answer: "MOAT",
    clue: "The durable advantage that stops competitors copying you.",
    topic: "Startups",
    explanation:
      "Buffett popularised the term for structural defences like network effects, switching costs and economies of scale. Being first or simply better is famously not one, because neither survives a well-funded fast follower.",
    sourceUrl: "https://en.wikipedia.org/wiki/Economic_moat",
    sourceLabel: "Economic moat",
  },
  {
    id: 33,
    answer: "VESTING",
    clue: "Earning your equity gradually rather than all at once.",
    topic: "Startups",
    explanation:
      "The standard is four years with a one-year cliff, so someone leaving early keeps nothing. It exists because a co-founder who departs in month three holding a quarter of the company makes the next funding round nearly impossible.",
    sourceUrl: "https://www.ycombinator.com/library/6s-a-guide-to-seed-fundraising",
    sourceLabel: "YC: Guide to seed fundraising",
  },
  {
    id: 34,
    answer: "TRACTION",
    clue: "Evidence that people actually want the thing, not just say they do.",
    topic: "Startups",
    explanation:
      "Investors weight it above the idea because it is the only part of a pitch that cannot be argued with. Growth rate matters more than absolute size early on, since a small number compounding fast beats a large flat one.",
    sourceUrl: "https://www.paulgraham.com/growth.html",
    sourceLabel: "Paul Graham: Startup = Growth",
  },
  {
    id: 35,
    answer: "UNICORN",
    clue: "A private company valued above one billion dollars.",
    topic: "Startups",
    explanation:
      "Aileen Lee coined the term in 2013 when there were 39 of them and the rarity was the point. There are now well over a thousand, which is partly real growth and partly an artefact of companies staying private far longer than they used to.",
    sourceUrl: "https://techcrunch.com/2013/11/02/welcome-to-the-unicorn-club/",
    sourceLabel: "Welcome to the Unicorn Club",
  },
  {
    id: 36,
    answer: "ENTROPY",
    clue: "The quantity that only ever increases in a closed system.",
    topic: "Science",
    explanation:
      "It measures how many microscopic arrangements produce the same macroscopic state, which is why disorder is overwhelmingly more likely than order. Shannon borrowed the same mathematics for information theory, where it measures surprise rather than heat.",
    sourceUrl: "https://en.wikipedia.org/wiki/Entropy",
    sourceLabel: "Entropy",
  },
  {
    id: 37,
    answer: "PHOTON",
    clue: "The quantum of light — no mass, always the same speed.",
    topic: "Science",
    explanation:
      "Einstein's 1905 explanation of the photoelectric effect using these, not relativity, is what won him the Nobel Prize. Each carries energy proportional to frequency, which is why ultraviolet damages DNA and radio waves do not.",
    sourceUrl: "https://www.nobelprize.org/prizes/physics/1921/einstein/facts/",
    sourceLabel: "Nobel Prize, 1921",
  },
  {
    id: 38,
    answer: "CATALYST",
    clue: "Speeds a reaction up without being consumed by it.",
    topic: "Science",
    explanation:
      "It works by offering a lower-energy path, not by adding energy. The Haber-Bosch process uses an iron one to fix nitrogen for fertiliser, and is estimated to sustain roughly half the people currently alive.",
    sourceUrl: "https://en.wikipedia.org/wiki/Haber_process",
    sourceLabel: "The Haber process",
  },
  {
    id: 39,
    answer: "ENZYME",
    clue: "A biological catalyst, almost always a folded protein.",
    topic: "Science",
    explanation:
      "Their shape determines their function entirely, which is why predicting folding was a 50-year grand challenge. AlphaFold's solution in 2021 released structures for nearly every known protein and won a share of the 2024 chemistry Nobel.",
    sourceUrl: "https://www.nature.com/articles/s41586-021-03819-2",
    sourceLabel: "AlphaFold (Nature, 2021)",
  },
  {
    id: 40,
    answer: "ISOTOPE",
    clue: "Same element, different neutron count.",
    topic: "Science",
    explanation:
      "Chemistry stays nearly identical while nuclear stability changes completely, which is what makes radiocarbon dating possible. Medical imaging and reactor fuel both depend on separating these, a famously energy-intensive process.",
    sourceUrl: "https://en.wikipedia.org/wiki/Isotope",
    sourceLabel: "Isotope",
  },
  {
    id: 41,
    answer: "QUANTUM",
    clue: "The smallest indivisible amount of a physical quantity.",
    topic: "Science",
    explanation:
      "Planck introduced the idea in 1900 as a mathematical trick to fix black-body radiation, and disliked its implications for years. That reluctant fix became the most experimentally successful theory in the history of physics.",
    sourceUrl: "https://en.wikipedia.org/wiki/Quantum",
    sourceLabel: "Quantum",
  },
  {
    id: 42,
    answer: "PLASMA",
    clue: "The fourth state of matter — ionised gas, and most of the visible universe.",
    topic: "Science",
    explanation:
      "Stars, lightning and neon signs are all made of it, so ordinary solids and liquids are the cosmic exception rather than the rule. Confining it hot enough for fusion, without it touching anything, is the central engineering problem of tokamak reactors.",
    sourceUrl: "https://www.iter.org/sci/PlasmaConfinement",
    sourceLabel: "ITER: Plasma confinement",
  },
  {
    id: 43,
    answer: "FUSION",
    clue: "Forcing light nuclei together to release energy — what powers the sun.",
    topic: "Science",
    explanation:
      "In 2022 the National Ignition Facility got more energy out of the reaction than the lasers put into the fuel, a first. The wider system still consumes vastly more than it produces, which is the gap between a scientific milestone and a power plant.",
    sourceUrl: "https://www.llnl.gov/article/49301/lawrence-livermore-national-laboratory-achieves-fusion-ignition",
    sourceLabel: "LLNL: Fusion ignition",
  },
  {
    id: 44,
    answer: "ORBITAL",
    clue: "The probability cloud where an electron is likely to be found.",
    topic: "Science",
    explanation:
      "Electrons do not travel in neat planetary circles; they occupy fuzzy regions with distinct shapes. The way these fill and overlap is what determines bonding, and therefore the entire structure of the periodic table.",
    sourceUrl: "https://en.wikipedia.org/wiki/Atomic_orbital",
    sourceLabel: "Atomic orbital",
  },
  {
    id: 45,
    answer: "MITOSIS",
    clue: "One cell dividing into two genetically identical copies.",
    topic: "Science",
    explanation:
      "Every cell in your body descends from a single fertilised egg through repeated rounds of it. Cancer is fundamentally this process losing its stopping conditions, which is why many treatments target rapidly dividing cells.",
    sourceUrl: "https://en.wikipedia.org/wiki/Mitosis",
    sourceLabel: "Mitosis",
  },
  {
    id: 46,
    answer: "ABSTRACT",
    clue: "The 200-word summary that decides whether anyone reads your paper.",
    topic: "Research",
    explanation:
      "It is the only section most people ever read, and often the only part behind no paywall. Search engines and screening tools weight it heavily, so it functions as both a summary and the paper's primary discovery mechanism.",
    sourceUrl: "https://en.wikipedia.org/wiki/Abstract_(summary)",
    sourceLabel: "Abstract",
  },
  {
    id: 47,
    answer: "PREPRINT",
    clue: "A paper shared publicly before peer review.",
    topic: "Research",
    explanation:
      "arXiv normalised this in physics decades ago and machine learning now runs almost entirely on it. During COVID it accelerated science dramatically while also spreading findings that later failed review — the speed and the risk are the same property.",
    sourceUrl: "https://arxiv.org/",
    sourceLabel: "arXiv",
  },
  {
    id: 48,
    answer: "ABLATION",
    clue: "Removing one component to prove it was actually doing something.",
    topic: "Research",
    explanation:
      "Without it, a paper cannot separate which of its several changes produced the improvement. Reviewers in machine learning ask for these constantly, because complex systems often improve for reasons unrelated to the authors' stated hypothesis.",
    sourceUrl: "https://en.wikipedia.org/wiki/Ablation_(artificial_intelligence)",
    sourceLabel: "Ablation studies",
  },
  {
    id: 49,
    answer: "BASELINE",
    clue: "The comparison point that makes a result meaningful.",
    topic: "Research",
    explanation:
      "A number in isolation says nothing; 90% accuracy is excellent or embarrassing depending on what it is measured against. A recurring embarrassment across fields is a complex method being beaten by a simple one nobody bothered to try.",
    sourceUrl: "https://en.wikipedia.org/wiki/Baseline_(configuration_management)",
    sourceLabel: "Baselines",
  },
  {
    id: 50,
    answer: "CITATION",
    clue: "The formal pointer from one paper to another.",
    topic: "Research",
    explanation:
      "Counting these created the modern metrics that shape hiring and funding decisions. Goodhart's law applies with force: once the count became the target, citation cartels and salami-sliced papers followed.",
    sourceUrl: "https://en.wikipedia.org/wiki/Citation",
    sourceLabel: "Citation",
  },
  {
    id: 51,
    answer: "CORPUS",
    clue: "The body of text a model or a linguist studies.",
    topic: "Research",
    explanation:
      "Its composition determines what a model knows and which biases it inherits, which is why documentation of it matters as much as architecture. Common Crawl underpins most large language models, and remains only loosely characterised.",
    sourceUrl: "https://commoncrawl.org/",
    sourceLabel: "Common Crawl",
  },
  {
    id: 52,
    answer: "CONTROL",
    clue: "The group that does not get the intervention.",
    topic: "Research",
    explanation:
      "Randomised assignment to it is what turns a correlation into a causal claim, and it is the reason trials can be trusted at all. Withholding a promising treatment is also the central ethical tension in medical research.",
    sourceUrl: "https://en.wikipedia.org/wiki/Randomized_controlled_trial",
    sourceLabel: "Randomised controlled trials",
  },
  {
    id: 53,
    answer: "PEERS",
    clue: "The anonymous experts who review your paper before publication.",
    topic: "Research",
    explanation:
      "The system is unpaid, slow and inconsistent, yet no proposed replacement has displaced it. Its defenders point out it was never designed to detect fraud, only to check whether the reasoning holds together.",
    sourceUrl: "https://en.wikipedia.org/wiki/Peer_review",
    sourceLabel: "Peer review",
  },
  {
    id: 54,
    answer: "REPLICATE",
    clue: "Running a study again to see if the finding survives.",
    topic: "Research",
    explanation:
      "A 2015 effort to redo 100 psychology studies reproduced fewer than half, triggering the replication crisis. The response — preregistration, open data, larger samples — has changed how several fields operate.",
    sourceUrl: "https://www.science.org/doi/10.1126/science.aac4716",
    sourceLabel: "Reproducibility Project (Science, 2015)",
  },
  {
    id: 55,
    answer: "BENCHMARK",
    clue: "The standard test everyone reports their number on.",
    topic: "Research",
    explanation:
      "ImageNet showed how a single shared one can organise an entire field's progress for a decade. The failure mode is contamination: once the test set leaks into training data, the number stops measuring anything.",
    sourceUrl: "https://www.image-net.org/",
    sourceLabel: "ImageNet",
  },
  {
    id: 56,
    answer: "TELEMETRY",
    clue: "Automatically collected measurements sent back from a running system.",
    topic: "Tech",
    explanation:
      "Metrics, logs and traces together are what make a distributed system debuggable when no single machine has the whole story. The hard part is deciding what to collect in advance, since you cannot query data you never recorded.",
    sourceUrl: "https://opentelemetry.io/docs/what-is-opentelemetry/",
    sourceLabel: "OpenTelemetry",
  },
  {
    id: 57,
    answer: "ROLLBACK",
    clue: "Reverting to the last known good version after a bad deploy.",
    topic: "Tech",
    explanation:
      "Mature teams optimise for how fast they can do this rather than for never needing to, because recovery time is more controllable than failure rate. Irreversible database migrations are the classic thing that makes it impossible exactly when you need it.",
    sourceUrl: "https://sre.google/sre-book/release-engineering/",
    sourceLabel: "Google SRE Book",
  },
  {
    id: 58,
    answer: "COHERENCE",
    clue: "The fragile property a qubit loses when it interacts with its surroundings.",
    topic: "Science",
    explanation:
      "Quantum states decay the moment they entangle with the environment, which is why these machines run near absolute zero. Every practical quantum computing roadmap is really a plan for holding this long enough to finish a calculation.",
    sourceUrl: "https://en.wikipedia.org/wiki/Quantum_decoherence",
    sourceLabel: "Quantum decoherence",
  },
  {
    id: 59,
    answer: "DILUTION",
    clue: "What happens to your ownership percentage when new shares are issued.",
    topic: "Startups",
    explanation:
      "A smaller slice of a much larger pie is usually the right trade, which is why founders accept it round after round. What actually harms founders is rarely the percentage itself but the terms attached, such as liquidation preferences.",
    sourceUrl: "https://www.ycombinator.com/library/6s-a-guide-to-seed-fundraising",
    sourceLabel: "YC: Guide to seed fundraising",
  },
  {
    id: 60,
    answer: "ADHERENCE",
    clue: "Whether patients actually take the medicine as prescribed.",
    topic: "Healthcare",
    explanation:
      "Roughly half of people with chronic conditions do not, making it one of the largest sources of avoidable harm in medicine. A drug that works perfectly in a trial and is skipped twice a week in real life is, in effect, a different drug.",
    sourceUrl: "https://www.who.int/publications/i/item/9241545992",
    sourceLabel: "WHO: Adherence to long-term therapies",
  },
];
