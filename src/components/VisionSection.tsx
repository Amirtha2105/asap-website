const Vision = () => {
  return (
    <div
      className="
        flex-1
        bg-white/[0.04]
        backdrop-blur-sm
        border
        border-white/10
        rounded-3xl
        p-8
        md:p-10
        hover:bg-white/[0.06]
        hover:border-[#3E7CB1]/30
        transition-all
        duration-300
        text-left
      "
    >
   
      <h3 className="text-2xl md:text-3xl font-bold text-white">
        Our Vision
      </h3>

      <p className="mt-6 text-[#B7C4D4] text-base md:text-lg leading-relaxed">
        To become a trusted offshore finance operations partner for the
        clients we serve.
      </p>
    </div>
  );
};

export default Vision;