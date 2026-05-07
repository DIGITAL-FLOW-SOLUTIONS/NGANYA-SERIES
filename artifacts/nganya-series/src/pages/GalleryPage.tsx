import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { X } from "lucide-react";

import nganyaBackNoBg from "@assets/nganya_back_no_bg_1778153978490.png";
import nganyaFront from "@assets/nganya_front_1778153978491.jpg";
import nganyaFrontNoBg from "@assets/nganya_front_no_bg_1778153978492.png";
import nganyaFull from "@assets/nganya_full_1778153978492.jpg";
import nganyaFullNoBg from "@assets/nganya_full_no_bg_1778153978493.png";
import nganyaBack from "@assets/nganya_back_1778153978495.jpg";
import banner1 from "@assets/banner_1_1778153978493.png";
import banner2 from "@assets/banner_2_1778153978494.png";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  label: string;
  span: string;
}

const items: GalleryItem[] = [
  {
    id: 1,
    src: nganyaFront,
    title: "MOOD — FRONT VIEW",
    label: "ART THAT MOVES",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: nganyaBack,
    title: "MOOD — BACK ART",
    label: "CULTURE ON WHEELS",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: nganyaFull,
    title: "313 — FULL VIEW",
    label: "BUILT DIFFERENT",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: nganyaFrontNoBg,
    title: "MOOD — CUT OUT",
    label: "ART IN MOTION",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    src: nganyaBackNoBg,
    title: "BACK — TRANSPARENT",
    label: "DETAIL WORK",
    span: "col-span-2 row-span-1",
  },
  {
    id: 6,
    src: nganyaFullNoBg,
    title: "313 — CUT OUT",
    label: "ROLLING PRIDE",
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: banner2,
    title: "NGANYA SERIES — ISSUE 001",
    label: "EDITORIAL",
    span: "col-span-2 row-span-1",
  },
  {
    id: 8,
    src: banner1,
    title: "ROLLING PRIDE — ISSUE 001",
    label: "EDITORIAL SPREAD",
    span: "col-span-1 row-span-1",
  },
];

export default function GalleryPage() {
  useSEO({
    title: "Gallery — Art In Motion",
    description: "Explore the NGANYA SERIES gallery — stunning nganya art, matatu designs, and Nairobi street culture captured in vivid detail. Bold. Loud. Unapologetic.",
    keywords: "nganya gallery, matatu art gallery, Kenya matatu photos, Nairobi street culture photos, matatu design gallery, nganya photos, matatu artwork Kenya",
    canonical: "/gallery",
  });

  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <main className="min-h-screen bg-background pt-24">

      {/* Header */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-accent text-sm tracking-[0.4em] mb-4"
          >
            NGANYA SERIES — EST 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-7xl md:text-[9rem] text-white leading-none"
          >
            ART IN <br />
            <span className="text-primary">MOTION</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground max-w-2xl"
          >
            Designs that tell stories. Colors that speak. Legends that roll. Every image here is a chapter in the nganya story.
          </motion.p>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-3">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                data-testid={`gallery-item-${item.id}`}
                className={`relative overflow-hidden cursor-pointer group bg-card ${item.span}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setSelected(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-400 opacity-0 group-hover:opacity-100">
                  <p className="font-display text-accent text-xs tracking-widest mb-1">{item.label}</p>
                  <h3 className="font-display text-white text-lg leading-tight">{item.title}</h3>
                </div>
                <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm px-2 py-1">
                  <span className="font-display text-white text-xs tracking-widest">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-black border-y border-border text-center">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-white mb-4"
          >
            "AN EMPTY CANVAS IS A NEW STORY
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-display text-4xl md:text-6xl text-primary"
          >
            WAITING TO BE TOLD."
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                onClick={() => setSelected(null)}
                data-testid="button-close-lightbox"
              >
                <X size={36} />
              </button>
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <div className="mt-4 flex items-center gap-4">
                <span className="font-display text-accent text-sm tracking-widest">{selected.label}</span>
                <span className="text-border">|</span>
                <h3 className="font-display text-white text-xl">{selected.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
