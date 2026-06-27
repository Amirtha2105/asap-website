const Mission = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-28
      "
    >
      {/* Ambient glow layer only — base gradient now lives in the shared page wrapper */}
      <div className="absolute inset-0">
        <div
          className="
            absolute top-0 left-1/3
            w-[420px] h-[420px]
            rounded-full
            bg-[radial-gradient(circle,rgba(33,99,166,0.2),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Our Mission
        </h2>

        <p className="mt-8 text-[#B7C4D4] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          To deliver reliable, process-driven, and scalable accounting
          support services that enable firms to focus on growth and client
          advisory services.
        </p>
      </div>
    </section>
  );
};

export default Mission;