export function AboutSection() {
  return (
    <div className="pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-16">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <blockquote className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white leading-tight">
              "Defending the truth of Christianity in an age of skepticism requires intellectual rigor."
            </blockquote>
            <div className="w-16 h-1 bg-white mt-8"></div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-6 text-zinc-400 text-lg leading-relaxed normal-case font-medium">
            <p>
              William (Bill) C. Roach, Ph.D. serves as Dean of the Norman L. Geisler School of Apologetics at Veritas International University and as Chair of Systematic Theology at Redeemer Seminary. A respected voice in philosophical theology and classical apologetics, Dr. Roach is an accomplished author, editor, and lecturer whose work engages the most pressing intellectual and cultural challenges facing Christianity today.
            </p>
            <p>
              His scholarship has been featured in Christianity Today and WORLD Magazine, highlighting his contributions to evangelical thought and apologetics. In addition to his academic and writing endeavors, he has served as Past President of the International Society of Christian Apologetics, reflecting his leadership and influence within the field.
            </p>
            <p>
              Dr. Roach is also the author and editor of numerous books and academic works, where he continues to defend the historic Christian faith with clarity, rigor, and conviction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
