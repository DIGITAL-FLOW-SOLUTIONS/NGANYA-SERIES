import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import banner1 from "@assets/banner_1_1778153978493.png";
import banner2 from "@assets/banner_2_1778153978494.png";

import mzalendo2 from "@assets/WhatsApp_Image_2026-05-07_at_7.07.13_PM_(1)_1778171661387.jpeg";
import mzalendo3 from "@assets/WhatsApp_Image_2026-05-07_at_7.07.12_PM_1778171661388.jpeg";
const featuredImages = [mzalendo2, mzalendo3];

const galleryModules = import.meta.glob("@assets/gallery/*.jpeg", { eager: true });
const galleryImages: string[] = Object.values(galleryModules).map(
  (mod) => (mod as { default: string }).default
);

export default function GalleryPage() {
  useSEO({
    title: "Gallery — Art In Motion",
    description:
      "Explore the NGANYA SERIES gallery — stunning nganya art, matatu designs, and Nairobi street culture captured in vivid detail. Bold. Loud. Unapologetic.",
    keywords:
      "nganya gallery, matatu art gallery, Kenya matatu photos, Nairobi street culture photos, matatu design gallery, nganya photos, matatu artwork Kenya",
    canonical: "/gallery",
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null
      ),
    []
  );

  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % galleryImages.length : null
      ),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next, closeLightbox]);

  return (
    <main className="min-h-screen bg-background pt-20">

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-accent text-xs md:text-sm tracking-[0.4em] mb-3"
          >
            NGANYA SERIES — EST 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl sm:text-7xl md:text-[9rem] text-white leading-none"
          >
            ART IN <br />
            <span className="text-primary">MOTION</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 md:mt-6 text-base md:text-xl text-muted-foreground max-w-2xl"
          >
            Designs that tell stories. Colors that speak. Legends that roll.
            Every image here is a chapter in the nganya story.
          </motion.p>
        </div>
      </section>

      {/* Featured Mzalendo masonry section */}
      <section className="pt-6 pb-2">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 md:gap-3">
            {featuredImages.map((src, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid mb-2 md:mb-3 cursor-pointer group relative overflow-hidden bg-card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <img
                  src={src}
                  alt={`Mzalendo matatu photo ${i + 1}`}
                  loading="eager"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner feature row */}
      <section className="pt-6 pb-2">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {[banner1, banner2].map((src, i) => (
            <div key={i} className="overflow-hidden bg-card">
              <img
                src={src}
                alt={`NGANYA SERIES Banner ${i + 1}`}
                className="w-full h-48 sm:h-64 md:h-80 object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Count badge */}
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center gap-3">
        <span className="font-display text-accent text-xs tracking-widest">
          {galleryImages.length} SHOTS
        </span>
        <span className="flex-1 h-px bg-border" />
      </div>

      {/* Masonry grid — CSS columns for true masonry, mobile-first */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 md:gap-3">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                data-testid={`gallery-item-${i + 1}`}
                className="break-inside-avoid mb-2 md:mb-3 cursor-pointer group relative overflow-hidden bg-card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.3) }}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={src}
                  alt={`Nganya matatu photo ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="font-display text-white text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 px-2 py-1">
                    VIEW
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24 bg-black border-y border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-6xl text-white mb-4"
          >
            "AN EMPTY CANVAS IS A NEW STORY
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl text-primary"
          >
            WAITING TO BE TOLD."
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/97 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-accent text-xs tracking-widest">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10 p-2"
              onClick={closeLightbox}
              data-testid="button-close-lightbox"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-2 md:left-6 text-white hover:text-primary transition-colors z-10 p-3"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="max-w-4xl w-full max-h-[85vh] flex items-center justify-center px-14 md:px-20"
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex]}
                alt={`Nganya matatu photo ${lightboxIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-2 md:right-6 text-white hover:text-primary transition-colors z-10 p-3"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
