const Vision = () => {
  return (
    <div
      className="
        flex-1
        bg-white/85
        backdrop-blur-md
        border
        border-sky-300/60
        rounded-3xl
        p-8
        md:p-10
        shadow-[0_12px_32px_rgba(2,132,199,0.18)]
        hover:border-sky-500
        hover:bg-white
        hover:shadow-[0_20px_45px_rgba(2,132,199,0.28)]
        transition-all
        duration-300
        text-left
      "
    >
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
        Our Vision
      </h3>

      <p className="mt-6 text-slate-800 text-base md:text-lg leading-relaxed font-medium">
        To become a trusted outsourced Finance partner, helping businesses simplify their financial operations and achieve sustainable success.
      </p>
    </div>
  );
};

export default Vision;