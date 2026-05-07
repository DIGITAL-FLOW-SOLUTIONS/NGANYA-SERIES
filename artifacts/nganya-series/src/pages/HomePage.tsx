import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import nganyaFrontNoBg from "@assets/nganya_front_no_bg_1778153978492.png";
import nganyaFull from "@assets/WhatsApp_Image_2026-05-07_at_7.07.12_PM_(1)_1778172516038.jpeg";
import nganyaBackNoBg from "@assets/nganya_back_no_bg_1778153978490.png";

export default function HomePage() {
  useSEO({
    title: "Kenya's Premier Matatu Art & Culture Movement",
    description: "NGANYA SERIES celebrates Kenya's vibrant matatu culture through art, automotive excellence, and street stories. Bold. Loud. Unapologetic. No Risk. No Story. Nairobi's boldest art movement. Est 2026.",
    keywords: "nganya, nganya series, matatu art, Kenya matatu culture, Nairobi street art, matatu design, matatu culture Kenya, East Africa street culture, nganya art, matatu lifestyle, rolling pride",
    canonical: "/",
  });

  return (
    <main className="min-h-screen w-full flex flex-col pt-24 bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/95 z-0" />
        
        {/* Abstract shapes / glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full z-0" />

        <div className="container relative z-10 px-6 flex flex-col items-center text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-4">
              NO RISK. <br/> <span className="text-primary">NO STORY.</span>
            </h1>
            <p className="font-display tracking-widest text-xl md:text-3xl text-accent mt-6">
              THE MOVEMENT. THE PEOPLE. THE CULTURE.
            </p>
          </motion.div>

          <motion.div 
            className="mt-16 w-full max-w-5xl relative h-[400px] md:h-[600px] flex justify-center items-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* The Cut-out Nganya floats over */}
            <img 
              src={nganyaFrontNoBg} 
              alt="Nganya Front" 
              className="absolute bottom-0 w-[90%] md:w-[70%] h-auto object-contain drop-shadow-2xl z-20"
            />
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent z-30" />
          </motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 bg-black relative border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl mb-8 text-white"
          >
            ROLLING PRIDE <br/>
            <span className="text-secondary text-3xl md:text-5xl block mt-4">THE CULTURE ON WHEELS THAT MOVES US ALL.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-medium"
          >
            MORE THAN TRANSPORT. IT'S IDENTITY. Matatus are the pulse of the city. They carry dreams, stories, and a whole lot of personality. Every paint job has a meaning. Every route has a story. Every driver has a journey.
          </motion.p>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <h3 className="font-display text-5xl md:text-7xl text-white uppercase leading-none">
                WHERE CREATIVITY <br/>
                <span className="text-primary">MEETS THE STREET</span>
              </h3>
              <p className="text-xl text-muted-foreground border-l-4 border-accent pl-6 py-2">
                From bold graffiti to detailed airbrush, these artists turn metal into masterpieces. This is not just art. This is expression. This is legacy.
              </p>
              <div>
                <Link href="/gallery" className="inline-block bg-primary text-white font-display text-xl tracking-wider px-8 py-4 uppercase hover:bg-white hover:text-primary transition-colors">
                  Explore the Gallery
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square"
            >
              <img src={nganyaFull} alt="Nganya Full" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-secondary flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
           <img src={nganyaBackNoBg} alt="Nganya Back" className="absolute -right-20 top-1/2 -translate-y-1/2 h-[120%] object-contain opacity-40 mix-blend-multiply" />
        </div>
        <div className="container relative z-10 px-6 text-center">
          <h2 className="font-display text-6xl md:text-9xl text-black uppercase mb-8">
            BOLD. LOUD. UNAPOLOGETIC.
          </h2>
          <p className="font-sans font-bold text-xl md:text-3xl text-black/80 mb-10 max-w-2xl mx-auto uppercase">
            Inside the world of Kenya's vibrant matatu culture.
          </p>
          <Link href="/stories" className="inline-block bg-black text-white font-display text-2xl tracking-widest px-10 py-5 hover:bg-white hover:text-black transition-colors">
            READ THE STORIES
          </Link>
        </div>
      </section>
    </main>
  );
}