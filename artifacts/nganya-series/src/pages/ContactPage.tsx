import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Youtube } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import kenyaFlag from "@assets/Flag_of_Kenya_1778153978494.png";
import nganyaBackNoBg from "@assets/nganya_back_no_bg_1778153978490.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  useSEO({
    title: "Contact — Get In Touch",
    description: "Contact NGANYA SERIES for collaborations, to feature your nganya, share your story, or join the movement. Based in Nairobi, Kenya. nganyaseries@gmail.com | +254 702 087 671",
    keywords: "contact nganya series, collaborate nganya, feature matatu Kenya, nganya series email, matatu collaboration Kenya, Nairobi art collaboration",
    canonical: "/contact",
  });

  return (
    <main className="min-h-screen bg-background pt-24 relative overflow-x-hidden">

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <img
          src={nganyaBackNoBg}
          alt=""
          className="absolute -right-40 top-1/4 w-[600px] opacity-5 object-contain"
        />
      </div>
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <section className="py-16 border-b border-border relative z-10">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-accent text-sm tracking-[0.4em] mb-4"
          >
            NAIROBI, KENYA — EST 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-7xl md:text-[9rem] text-white leading-none"
          >
            GET IN <br />
            <span className="text-primary">TOUCH</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground max-w-xl"
          >
            Whether you want to collaborate, feature your nganya, share your story, or just say hello — we want to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div>
                <h2 className="font-display text-4xl text-white mb-8">THE MOVEMENT</h2>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-display text-sm tracking-widest text-muted-foreground mb-1">LOCATION</p>
                      <p className="text-white font-medium">Nairobi, Kenya</p>
                      <div className="flex items-center gap-2 mt-1">
                        <img src={kenyaFlag} alt="Kenya Flag" className="w-5 h-auto" />
                        <span className="text-muted-foreground text-sm">East Africa</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-secondary mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-display text-sm tracking-widest text-muted-foreground mb-1">EMAIL</p>
                      <a
                        href="mailto:nganyaseries@gmail.com"
                        className="text-white font-medium hover:text-primary transition-colors"
                        data-testid="link-email"
                      >
                        nganyaseries@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-accent mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-display text-sm tracking-widest text-muted-foreground mb-1">PHONE</p>
                      <a
                        href="tel:+254702087671"
                        className="text-white font-medium hover:text-primary transition-colors"
                        data-testid="link-phone"
                      >
                        +254 702 087 671
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="font-display text-xl text-white italic">"NO RISK. NO STORY."</p>
                <p className="font-display text-xs tracking-widest text-muted-foreground mt-2">— NGANYA SERIES</p>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <h3 className="font-display text-2xl text-white">FOLLOW THE MOVEMENT</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Instagram, label: "INSTAGRAM", handle: "@nganyaseries" },
                  { icon: Youtube, label: "YOUTUBE", handle: "NGANYA SERIES" },
                ].map(({ icon: Icon, label, handle }) => (
                  <a
                    key={label}
                    href="#"
                    className="flex items-center gap-4 group border border-border p-4 hover:border-primary transition-colors"
                    data-testid={`link-social-${label.toLowerCase()}`}
                  >
                    <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <p className="font-display text-xs tracking-widest text-muted-foreground">{label}</p>
                      <p className="text-white text-sm font-medium">{handle}</p>
                    </div>
                  </a>
                ))}
                {['TIKTOK', 'TWITTER / X'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex items-center gap-4 group border border-border p-4 hover:border-primary transition-colors"
                    data-testid={`link-social-${social.toLowerCase().replace(/[\s/]+/g, '-')}`}
                  >
                    <div className="w-6 h-6 bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">N</span>
                    </div>
                    <div>
                      <p className="font-display text-xs tracking-widest text-muted-foreground">{social}</p>
                      <p className="text-white text-sm font-medium">@nganyaseries</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
