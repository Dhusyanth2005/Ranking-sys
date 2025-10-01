const MarqueeBar = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 to-yellow-500 text-white py-3 overflow-hidden w-full">
      <div
        className="inline-flex whitespace-nowrap"
        style={{
          animation: 'scroll-left 48s linear infinite',
          width: 'max-content',
        }}
      >
        {[...Array(4)].map((_, index) => (
          <span key={index} className="text-lg font-regular mx-3">
            🚨 Applications Open: QAE Rankings 2025 | Start Date: January 15, 2025 - 09:00 AM IST | End Date: March 30, 2025 - 11:59 PM IST | Submit Now! 🚨
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeBar;