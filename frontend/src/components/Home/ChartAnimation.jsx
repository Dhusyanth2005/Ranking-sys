import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const ChartAnimation = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const generateChartData = () => {
      const points = [];
      for (let i = 0; i < 20; i++) {
        points.push({
          x: (i * 20),
          y: 60 + Math.sin(i * 0.3) * 20 + Math.random() * 10
        });
      }
      return points;
    };

    setChartData(generateChartData());
    
    const chartTimer = setInterval(() => {
      setChartData(generateChartData());
    }, 2000);
    
    return () => clearInterval(chartTimer);
  }, []);

  const createPath = (points) => {
    if (points.length === 0) return '';
    
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`;
    }
    return path;
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-teal-100 h-96">
      <div className="absolute top-4 left-4">
        <BarChart3 className="h-6 w-6 text-teal-600" />
      </div>
      <div className="absolute top-4 right-4">
        <TrendingUp className="h-6 w-6 text-green-500" />
      </div>
      
      <svg className="w-full h-full" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#e5e7eb" strokeWidth="1"/>
        ))}
        
        {[80, 160, 240, 320].map((x) => (
          <line key={x} x1={x} y1="20" x2={x} y2="180" stroke="#e5e7eb" strokeWidth="1"/>
        ))}
        
        <path
          d={`${createPath(chartData)} L 380 180 L 0 180 Z`}
          fill="url(#gradient)"
          className="transition-all duration-2000 ease-in-out"
        />
        
        <path
          d={createPath(chartData)}
          stroke="#14b8a6"
          strokeWidth="3"
          fill="none"
          className="transition-all duration-2000 ease-in-out"
        />
        
        {chartData.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="1"
            fill="#14b8a6"
            className="transition-all duration-2000 ease-in-out"
          />
        ))}
      </svg>
      
      <div className="absolute bottom-4 left-4 bg-teal-50 px-3 py-2 rounded-lg">
        <div className="text-xs text-gray-600">Growth Rate</div>
        <div className="text-lg font-bold text-teal-600">+24.5%</div>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-green-50 px-3 py-2 rounded-lg">
        <div className="text-xs text-gray-600">Success Rate</div>
        <div className="text-lg font-bold text-green-600">94.2%</div>
      </div>
    </div>
  );
};

export default ChartAnimation;