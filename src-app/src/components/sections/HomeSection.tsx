import { ArrowUpRight, Video, BookOpen, Mail } from "lucide-react";
import { Tab } from "../Navbar";

interface HomeSectionProps {
  onTabChange: (tab: Tab) => void;
}

export function HomeSection({ onTabChange }: HomeSectionProps) {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="pl-6 md:pl-12 border-l border-white/10 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-white/30"></div>
            <span className="text-sm font-bold tracking-widest text-zinc-400 uppercase">Featured Content</span>
          </div>
          
          <h2 className="text-6xl md:text-[9rem] font-black uppercase italic tracking-tighter leading-[0.85] text-white mb-12">
            DEFEND<br />
            <span className="text-zinc-500">THE FAITH</span>
          </h2>

          <div className="w-full max-w-5xl mb-12">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/knIfelz9uxA"
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full border border-white/10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => onTabChange("books")}
              data-testid="button-home-books"
              className="bg-white text-black px-8 py-4 uppercase font-black tracking-widest flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors"
            >
              Published Works <ArrowUpRight size={20} />
            </button>
            <button
              onClick={() => onTabChange("videos")}
              data-testid="button-home-videos"
              className="border border-white/30 text-white px-8 py-4 uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Watch More Lectures
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/10 p-[1px] mt-24">
          <div 
            onClick={() => onTabChange("videos")}
            data-testid="card-video-archive"
            className="bg-black p-12 hover:bg-zinc-900 transition-colors cursor-pointer group"
          >
            <Video size={48} className="text-white mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">Video Archive</h3>
            <p className="text-zinc-500 leading-relaxed normal-case font-medium">
              Access hours of apologetics, philosophy, and theology lectures.
            </p>
          </div>

          <div 
            onClick={() => onTabChange("books")}
            data-testid="card-academic-books"
            className="bg-black p-12 hover:bg-zinc-900 transition-colors cursor-pointer group"
          >
            <BookOpen size={48} className="text-white mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">Academic Books</h3>
            <p className="text-zinc-500 leading-relaxed normal-case font-medium">
              Explore published works on Sola Fide, Hermeneutics, and Inerrancy.
            </p>
          </div>

          <a 
            href="https://drbillroach.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="card-substack"
            className="bg-black p-12 hover:bg-zinc-900 transition-colors block group"
          >
            <Mail size={48} className="text-white mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">Substack Newsletter</h3>
            <p className="text-zinc-500 leading-relaxed normal-case font-medium">
              Subscribe on Substack for deep dives into faith and the modern mind.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
