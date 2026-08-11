export function BooksSection() {
  const books = [
    {
      title: "Hermeneutics as Epistemology",
      url: "https://www.amazon.com/Hermeneutics-Epistemology-Critical-Assessment-Epistemological-ebook/dp/B013FA63RA/",
      description: "A critical assessment of the epistemological shifts in modern hermeneutics.",
      image: "/assets/Hermeneutics.jpg",
    },
    {
      title: "Defending Inerrancy",
      url: "https://www.amazon.com/Defending-Inerrancy-Affirming-Scripture-Generation-ebook/dp/B006CQ8I46/",
      description: "Co-authored with Norman L. Geisler, defending the historical doctrine of the Bible.",
      image: "/assets/Defending Inerrancy.jpg",
    },
    {
      title: "Sola Fide",
      url: "https://www.amazon.com/Sola-Fide-Primer-Doctrine-Justification/dp/1717317820/",
      description: "The history and defense of the doctrine of Justification by faith alone.",
      image: "/assets/Sola_Fide.jpg",
    }
  ];

  return (
    <div className="pt-40 pb-24">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-16">
          Books
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col group" data-testid={`book-card-${index}`}>
              <a href={book.url} target="_blank" rel="noopener noreferrer" className="block mb-8 relative border border-white/5 group-hover:border-white/20 transition-colors bg-zinc-900" style={{ paddingBottom: "133.33%" }}>
                {book.image ? (
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'p-8');
                      const span = document.createElement('span');
                      span.className = 'absolute inset-0 flex items-center justify-center text-center p-8 text-2xl font-black uppercase text-zinc-700';
                      span.innerText = book.title;
                      e.currentTarget.parentElement?.appendChild(span);
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                    <span className="text-2xl font-black uppercase text-zinc-700">{book.title}</span>
                  </div>
                )}
              </a>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-3 group-hover:italic transition-all">
                <a href={book.url} target="_blank" rel="noopener noreferrer">{book.title}</a>
              </h3>
              <p className="text-zinc-400 normal-case font-medium leading-relaxed mb-6 flex-1">
                {book.description}
              </p>
              <a 
                href={book.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-6 py-3 uppercase font-bold tracking-widest text-sm hover:bg-white hover:text-black transition-colors self-start text-center w-full md:w-auto"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
