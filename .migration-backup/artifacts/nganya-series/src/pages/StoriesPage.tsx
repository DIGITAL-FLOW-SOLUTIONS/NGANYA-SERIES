import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import nganyaFront from "@assets/nganya_front_1778153978491.jpg";
import nganyaBack from "@assets/nganya_back_1778153978495.jpg";
import nganyaFull from "@assets/nganya_full_1778153978492.jpg";
import nganyaFrontNoBg from "@assets/nganya_front_no_bg_1778153978492.png";
import banner1 from "@assets/banner_1_1778153978493.png";
import banner2 from "@assets/banner_2_1778153978494.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stories = [
  {
    issue: "06",
    tag: "CULTURE ON WHEELS",
    title: "MORE THAN TRANSPORT. IT'S IDENTITY.",
    body: "Matatus are the pulse of the city. They carry dreams, stories, and a whole lot of personality. Every paint job has a meaning. Every route has a story. Every driver has a journey. We went deep into the streets of Nairobi to understand what it really means to be nganya.",
    quote: "We don't just drive, we represent.",
    quoteBy: "Matatu Culture",
    image: nganyaFront,
    accent: "text-primary",
    bg: "bg-primary",
  },
  {
    issue: "14",
    tag: "ART THAT MOVES",
    title: "WHERE CREATIVITY MEETS THE STREET.",
    body: "From bold graffiti to hyper-detailed airbrush portraits, these artists turn metal into masterpieces. They work with spray cans, brushes, and sheer will — through the night, through the rain — because the canvas demands it. This is expression. This is legacy.",
    quote: "An empty canvas is a new story waiting to be told.",
    quoteBy: "Nganya Artist",
    image: nganyaBack,
    accent: "text-secondary",
    bg: "bg-secondary",
  },
  {
    issue: "22",
    tag: "VOICES OF THE STREETS",
    title: "DRIVERS. ARTISTS. HUSTLERS. REAL STORIES.",
    body: "Behind every nganya is a person with a story the world needs to hear. We sat with the drivers who know every pothole by name, the artists who stayed up three nights to finish their masterpiece, the builders who weld dreams into steel and chrome. These are their words, unfiltered.",
    quote: "This is not just a job. This is my identity.",
    quoteBy: "Nairobi Driver",
    image: nganyaFull,
    accent: "text-accent",
    bg: "bg-accent",
  },
];

export default function StoriesPage() {
  useSEO({
    title: "Stories — Culture on Wheels",
    description: "Read exclusive stories from NGANYA SERIES — interviews with drivers, artists, builders, and the voices behind Kenya's vibrant matatu culture movement. Issue 001 available now.",
    keywords: "nganya stories, matatu culture stories, Kenya matatu interviews, matatu driver stories, Nairobi street culture stories, nganya series magazine, matatu art stories",
    canonical: "/stories",
  });

  return (
    <main className="min-h-screen bg-background pt-24">

      {/* Header */}
      <section className="py-16 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={banner2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-accent text-sm tracking-[0.4em] mb-4"
          >
            ISSUE 001 — NGANYA SERIES
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-7xl md:text-[9rem] text-white leading-none"
          >
            THE <br />
            <span className="text-secondary">STORIES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground max-w-xl"
          >
            Exclusive interviews. Events and vibes. Culture spotlights. All from the heart of Nairobi's nganya movement.
          </motion.p>
        </div>
      </section>

      {/* Stories */}
      {stories.map((story, i) => (
        <article key={story.issue} className="border-b border-border">
          {/* Issue tag */}
          <div className="container mx-auto px-6 pt-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <span className={`font-display text-8xl md:text-[10rem] leading-none ${story.accent} opacity-30`}>
                {story.issue}
              </span>
              <div className="border-t border-border flex-1" />
              <span className="font-display text-sm tracking-[0.3em] text-muted-foreground">{story.tag}</span>
            </motion.div>
          </div>

          <div className={`${i % 2 === 0 ? "" : "bg-black"}`}>
            <div className="container mx-auto px-6 pb-16">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

                {/* Text */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={i % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <h2 className="font-display text-4xl md:text-6xl text-white leading-tight mb-8">
                    {story.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {story.body}
                  </p>
                  <blockquote className={`border-l-4 ${story.bg} pl-6 py-3 mb-6`}>
                    <p className="font-display text-2xl md:text-3xl text-white italic leading-snug">
                      "{story.quote}"
                    </p>
                    <footer className="mt-3 font-display text-sm tracking-widest text-muted-foreground">
                      — {story.quoteBy}
                    </footer>
                  </blockquote>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${i % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent mix-blend-multiply`} />
                    <div className={`absolute top-4 left-4 px-3 py-1 ${story.bg}`}>
                      <span className="font-display text-xs tracking-widest text-white">{story.tag}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* Editorial banner */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img src={banner1} alt="Nganya Series Issue 001" className="w-full object-contain" />
          </motion.div>
        </div>
      </section>

      {/* Floating nganya / Next stories teaser */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-end pointer-events-none">
          <img
            src={nganyaFrontNoBg}
            alt="Nganya Series"
            className="w-full h-auto object-contain opacity-20"
            style={{ filter: "drop-shadow(0 0 60px hsl(272 60% 46% / 0.5))" }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-display text-accent text-sm tracking-[0.3em] mb-6">COMING NEXT</p>
            <h2 className="font-display text-5xl md:text-8xl text-white leading-none mb-4">
              BUILT DIFFERENT <br />
              <span className="text-primary">NEXT GEN</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mb-10">
              Events & Vibes. The machines. The mods. The mechanics. And the next generation already rolling. Coming in Issue 002.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-black font-display text-xl tracking-wider px-10 py-5 hover:bg-primary hover:text-white transition-colors"
              data-testid="link-contact-stories"
            >
              STAY CONNECTED
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
