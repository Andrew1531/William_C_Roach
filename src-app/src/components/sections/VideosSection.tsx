export function VideosSection() {
  const videos = [
    {
      title: "Faith in the Crossfire",
      url: "https://www.youtube.com/embed/Gp3A2TqnJDc?si=ENbRqL2vDRt5UVzj",
      subtitle: "Series Premiere • Philosophical Theology",
    },
    {
      title: "The Logic of Inerrancy",
      url: "https://www.youtube.com/embed/Gp3A2TqnJDc?si=ENbRqL2vDRt5UVzj",
      subtitle: "Academic Lecture • Bibliology",
    }
  ];

  return (
    <div className="pt-40 pb-24">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-16">
          Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col" data-testid={`video-card-${index}`}>
              <div className="relative w-full mb-6 border border-white/10" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={video.url}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-2">
                {video.title}
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                {video.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
