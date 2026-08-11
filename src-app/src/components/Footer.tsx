import { useState } from "react";
import { Check } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setEmail("");
    setName("");
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 text-white">
            Stay Updated
          </h2>
          <p className="text-zinc-400 tracking-widest uppercase mb-12">
            Sign up to find out when we add new lectures and resources.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center" data-testid="form-subscribe">
            <input
              type="text"
              placeholder="NAME"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-testid="input-name"
              className="bg-white text-black px-6 py-4 uppercase font-bold tracking-widest outline-none focus:ring-2 ring-white/50 w-full md:w-64"
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="input-email"
              className="bg-white text-black px-6 py-4 uppercase font-bold tracking-widest outline-none focus:ring-2 ring-white/50 w-full md:w-80"
            />
            <button
              type="submit"
              data-testid="button-submit-subscribe"
              className="border-2 border-white text-white px-8 py-4 uppercase font-black tracking-widest hover:bg-white hover:text-black transition-colors rounded-full"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-bold tracking-widest uppercase border-t border-white/10 pt-8">
          <p>© 2026 William C. Roach</p>
          <a href="https://ladmedia.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mt-4 md:mt-0">
            Designed & Developed by LAD MEDIA
          </a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6" data-testid="modal-success">
          <div className="bg-zinc-900 border border-white/10 p-12 max-w-md w-full text-center relative">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4 text-white">Thank You</h3>
            <p className="text-zinc-400 uppercase tracking-widest mb-8">Your subscription has been received.</p>
            <button
              onClick={() => setShowModal(false)}
              data-testid="button-close-modal"
              className="border border-white/30 text-white px-8 py-3 uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
