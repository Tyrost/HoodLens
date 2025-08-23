"use client";


export default function MainSlide() {

  return (
    <>
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">

      {/* Blobs */}
      <div className="absolute top-[-250px] left-[-250px] w-[700px] h-[700px] rounded-full blur-[70px] animate-blob-slow
        bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-purple-400/30" />
      <div className="absolute bottom-[-250px] right-[-250px] w-[800px] h-[800px] rounded-full blur-[90px] animate-blob-slower
        bg-gradient-to-r from-pink-400/30 via-purple-400/20 to-blue-400/30" />

      <div className="absolute flex items-center justify-center z-11">
        <div className="w-[600px] h-[600px] rounded-full overflow-hidden border border-black/10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(to right, rgba(0,0,0,0.12) 0 1px, transparent 1px 40px),
                repeating-linear-gradient(to bottom, rgba(0,0,0,0.12) 0 1px, transparent 1px 40px)
              `,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          Find the Best Home for <span className="text-blue-600">You</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            More than a home, it’s about the life around it. 
            From safety and comfort to transportation and rent trends.
        </p>
      </div>
    </section>
    </>
  );
}
