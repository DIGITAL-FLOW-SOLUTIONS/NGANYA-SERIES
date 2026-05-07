import { Link } from "wouter";
import kenyaFlag from "@assets/Flag_of_Kenya_1778153978494.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border pt-20 pb-10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <Link href="/" className="group flex flex-col cursor-pointer">
              <span className="font-display text-5xl leading-none text-white">NGANYA</span>
              <span className="font-display text-2xl leading-none text-accent">SERIES</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mt-4">
              More than a magazine. It's a movement. Celebrating the spirit of our streets, the creativity of our people, and the culture that drives us forward.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-display text-2xl tracking-wider">
            <span className="text-primary">OUR CULTURE. WE CELEBRATE IT.</span>
            <span className="text-secondary">OUR STORIES. WE TELL THEM.</span>
            <span className="text-accent">OUR LEGACY. WE BUILD IT.</span>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-4">
              {['INSTAGRAM', 'YOUTUBE', 'TIKTOK', 'TWITTER'].map(social => (
                <a key={social} href="#" className="text-sm font-bold hover:text-primary transition-colors">{social}</a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <img src={kenyaFlag} alt="Kenya Flag" className="w-8 h-auto" />
              <span className="font-display text-xl tracking-widest">NAIROBI, KE</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© 2026 NGANYA SERIES. OUR CULTURE. OUR STORIES. OUR LEGACY.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-white">ABOUT</Link>
            <Link href="/gallery" className="hover:text-white">GALLERY</Link>
            <Link href="/contact" className="hover:text-white">CONTACT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}