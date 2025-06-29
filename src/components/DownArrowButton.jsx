const DownArrowButton = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group mt-4 flex flex-col items-center focus:outline-none"
      aria-label="Scroll to contact section"
    >
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-indigo-500 to-purple-600 shadow-lg transition-transform group-hover:scale-110">
        <svg
          className="h-8 w-8 text-white animate-bounce group-hover:text-yellow-300 transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-yellow-300 opacity-70 blur-sm group-hover:opacity-100 transition" />
      </span>
      <span className="mt-2 text-xs text-gray-500 group-hover:text-cyan-800 transition">
        Contact Me
      </span>
    </button>
  );
};

export default DownArrowButton;