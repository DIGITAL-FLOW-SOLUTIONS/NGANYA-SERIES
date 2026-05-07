import { motion } from "framer-motion";
import { Link } from "wouter";
import nganyaFull from "@assets/nganya_full_1778153978492.jpg";
import nganyaFullNoBg from "@assets/nganya_full_no_bg_1778153978493.png";
import nganyaBack from "@assets/nganya_back_1778153978495.jpg";
import banner1 from "@assets/banner_1_1778153978493.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    number: "06",
    title: "CULTURE ON WHEELS",
    subtitle: "The heartbeat of matatu culture.",
    body: "Matatus are the pulse of the city. They carry dreams, stories, and a whole lot of personality. Every paint job has a meaning. Every route has a story. Every driver has a journey. This is culture in motion — unapologetic, alive, and impossible to ignore.",
    color: "text-primary",
  },
  {
    number: "14",
    title: "ART THAT MOVES",
    subtitle: "The creatives behind the madness.",
    body: "From bold graffiti to hyper-detailed airbrush portraits, these artists turn steel and chrome into living canvases. They don't paint on walls — they paint on wheels. Every bus is a moving gallery. Every street is a museum. Where creativity meets the street.",
    color: "text-secondary",
  },
  {
    number: "22",
    title: "VOICES OF THE STREETS",
    subtitle: "Drivers. Artists. Hustlers. Real stories.",
    body: "Behind every nganya is a person with a story. We sit with the drivers who know every pothole by name, the artists who stayed up three nights to finish a masterpiece, and the builders who weld dreams into reality. These are their words.",
    color: "text-accent",
  },
  {
    number: "28",
    title: "BUILT DIFFERENT",
    subtitle: "The machines. The mods. The mechanics.",
    body: "These are not ordinary vehicles. Custom frames, hydraulic suspensions, sound systems that rattle city blocks — every nganya is engineered to stand out. We go inside the workshops and garages where legends are built from scratch.",
    color: "text-primary",
  },
  {
    number: "34",
    title: "EVENTS & VIBES",
    subtitle: "What's happening in our scene.",
    body: "From convoy parades that take over entire highways to underground park battles where only the boldest compete — the nganya scene is always alive. We document every event, every moment, every vibe. If it happened, we were there.",
    color: "text-secondary",
  },
  {
    number: "40",
    title: "NEXT GEN",
    subtitle: "The future is already rolling.",
    body: "The next generation of nganya artists, drivers, and builders are already at work. They are younger, bolder, and more connected than ever. They carry the culture forward while pushing its boundaries. The future is not coming — it's already here.",
    color: "text-accent",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24">

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale brightness-30"
          style={{ backgroundImage: `url(${nganyaBack})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

        <div className="container relative z-10 px-6 pb-20">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="font-display text-accent text-lg tracking-[0.3em] mb-4"
          >
            EST 2026 — LIFESTYLE • CULTURE • AUTOMOTIVE • ART • COMMUNITY
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-7xl md:text-[10rem] leading-none text-white"
          >
            THIS IS <br />
            <span className="text-primary">NGANYA</span>
            <br />
            <span className="text-secondary">SERIES</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 text-xl md:text-3xl text-muted-foreground max-w-2xl font-medium"
          >
            This is more than a magazine. It's a movement.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-6xl md:text-8xl text-white mb-8 leading-none">
                ROLLING <br />
                <span className="text-secondary">PRIDE</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Nganya Series is here to celebrate the spirit of our streets, the creativity of our people, and the culture that drives us forward.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                From the art on wheels to the voices behind the hustle, we bring you stories that inspire, connect, and empower.
              </p>
              <p className="font-display text-2xl text-accent tracking-wider">
                WELCOME TO THE CULTURE. WELCOME TO THE FAMILY.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={nganyaFullNoBg}
                alt="Nganya Full"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px hsl(214 79% 49% / 0.4))" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto pull quote */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={banner1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-4xl md:text-7xl text-white leading-tight"
          >
            "WE DON'T JUST DRIVE,<br />
            <span className="text-black">WE REPRESENT."</span>
          </motion.blockquote>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-display text-xl text-white/70 tracking-widest"
          >
            — MATATU CULTURE
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-white mb-16 border-b border-border pb-8"
          >
            CONTENTS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {sections.map((s, i) => (
              <motion.div
                key={s.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background p-8 group hover:bg-card transition-colors"
              >
                <p className={`font-display text-6xl ${s.color} mb-4 leading-none`}>{s.number}</p>
                <h3 className="font-display text-2xl text-white mb-2">{s.title}</h3>
                <p className="text-accent text-sm tracking-widest uppercase mb-4">{s.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full width image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={nganyaFull}
          alt="Nganya Full"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-6">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl text-white"
            >
              BOLD. LOUD. <br />
              <span className="text-primary">UNAPOLOGETIC.</span>
            </motion.h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-border">
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            AN EMPTY CANVAS IS A NEW STORY<br />
            <span className="text-secondary">WAITING TO BE TOLD.</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link href="/gallery" className="inline-block bg-primary text-white font-display text-xl tracking-wider px-10 py-5 hover:bg-white hover:text-primary transition-colors" data-testid="link-gallery">
              VIEW THE GALLERY
            </Link>
            <Link href="/contact" className="inline-block border border-white text-white font-display text-xl tracking-wider px-10 py-5 hover:bg-white hover:text-black transition-colors" data-testid="link-contact">
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
