import { motion } from "framer-motion";
import { Bot, BarChart3, Calendar, TrendingUp } from "lucide-react";

const DashboardMockup = () => {
  return (
    <div className="relative">
      {/* Main Dashboard Window */}
      <motion.div
        className="bg-card rounded-2xl shadow-2xl shadow-foreground/10 border border-border overflow-hidden max-w-3xl mx-auto"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Window Header */}
        <div className="bg-foreground px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-cream/50">
          <div className="grid grid-cols-3 gap-4">
            {/* Donut Chart */}
            <div className="col-span-1">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="12"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="12"
                    strokeDasharray="180 251.2"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#a3e635"
                    strokeWidth="12"
                    strokeDasharray="70 251.2"
                    strokeDashoffset="-180"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <div className="mt-2 space-y-1">
                <div className="h-2 bg-muted rounded-full w-3/4 mx-auto" />
                <div className="h-2 bg-muted rounded-full w-1/2 mx-auto" />
              </div>
            </div>

            {/* Bar Chart */}
            <div className="col-span-1 flex items-end justify-center gap-2 h-32">
              {[60, 80, 45, 90, 70].map((height, i) => (
                <motion.div
                  key={i}
                  className="w-4 bg-primary rounded-t-sm"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                />
              ))}
            </div>

            {/* Stats Card */}
            <div className="col-span-1 bg-accent/50 rounded-xl p-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -left-8 bottom-1/3 bg-card rounded-xl shadow-lg p-3 border border-border"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bot className="w-10 h-10 text-primary" />
      </motion.div>

      <motion.div
        className="absolute -right-4 top-1/4 bg-card rounded-xl shadow-lg p-4 border border-border"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Today</span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-primary rounded-full w-20" />
            <div className="h-1.5 bg-accent rounded-full w-16" />
            <div className="h-1.5 bg-muted rounded-full w-24" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
