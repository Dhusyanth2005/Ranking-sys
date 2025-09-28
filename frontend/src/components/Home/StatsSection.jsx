import { Building, Users, Award, Trophy } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Building, label: "Registered Colleges", value: "2,500+" },
    { icon: Users, label: "Active Submissions", value: "1,800+" },
    { icon: Award, label: "Categories", value: "2" },
    { icon: Trophy, label: "Years of Excellence", value: "10+" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white border border-teal-100 hover:shadow-lg transition-all duration-300 group">
              <stat.icon className="h-12 w-12 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;