const Vision = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
      "
    >
      {/* Ambient glow layer only — base gradient now lives in the shared page wrapper */}
      <div className="absolute inset-0">
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[480px] h-[480px]
            rounded-full
            bg-[radial-gradient(circle,rgba(33,99,166,0.16),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Our Vision
        </h2>

        <p className="mt-8 text-[#B7C4D4] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          To become a trusted offshore finance operations partner for the
          clients we serve.
        </p>
      </div>
    </section>
  );
};

export default Vision;