import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Clock, CreditCard, CheckCircle, ArrowRight } from "lucide-react";
import { ClockIcon } from '@heroicons/react/24/outline';


const steps = [
  {
    id: 1,
    title: "Discovery & Booking",
    duration: "2 weeks",
    payment: "5% deposit",
    icon: "📋",
    color: "from-blue-600 to-purple-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    description: [
      "Complete our comprehensive design questionnaire",
      "Personal consultation with our design expert",
      "Share your floor plan and vision with us",
      "Meet your dedicated interior designer",
      "Receive a customized design proposal",
    ],
  },
  {
    id: 2,
    title: "Design Development",
    duration: "2 months",
    payment: "60% milestone",
    icon: "🎨",
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    description: [
      "Collaborative design sessions with your designer",
      "Interactive 3D renders and virtual walkthroughs",
      "Material selection and finish approvals",
      "Detailed project timeline and cost breakdown",
      "Final design sign-off and documentation",
    ],
  },
  {
    id: 3,
    title: "Crafting & Installation",
    duration: "3 months",
    payment: "Final payment",
    icon: "🔨",
    color: "from-pink-600 to-orange-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-orange-50",
    description: [
      "Premium manufacturing at certified facilities",
      "Multi-stage quality assurance checks",
      "Professional on-site installation team",
      "Real-time project updates and communication",
      "Precision fitting and finishing touches",
    ],
  },
  {
    id: 4,
    title: "Your Dream Home",
    duration: "Completion",
    payment: "Lifetime support",
    icon: "🏡",
    color: "from-orange-600 to-yellow-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
    description: [
      "White-glove handover of your completed space",
      "Comprehensive warranty on all components",
      "24/7 customer support and maintenance",
      "Complimentary touch-ups and adjustments",
      "Welcome to your personalized sanctuary",
    ],
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-24 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A seamless journey from concept to completion, crafted with precision and care
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {steps.map((step) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-white text-slate-900 shadow-2xl scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-lg">{step.icon}</span>
                {step.title}
              </motion.button>
            ))}
          </div>

          {/* Main Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Details */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep - 1].color} flex items-center justify-center text-2xl shadow-2xl`}>
                    {steps[activeStep - 1].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {steps[activeStep - 1].title}
                    </h3>
                    <div className="flex items-center space-x-6 text-slate-300">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{steps[activeStep - 1].duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-4 h-4" />
                        <span>{steps[activeStep - 1].payment}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {steps[activeStep - 1].description.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-200 leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group px-8 py-4 rounded-xl bg-gradient-to-r ${steps[activeStep - 1].color} text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Right Side - Visual Timeline */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <h4 className="text-2xl font-bold text-white mb-8 text-center">Project Timeline</h4>
                  
                  <div className="space-y-6">
                    {steps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        className={`relative flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                          step.id === activeStep
                            ? 'bg-white/20 border-2 border-white/40 scale-105'
                            : step.id < activeStep
                            ? 'bg-green-500/20 border border-green-400/40'
                            : 'bg-white/5 border border-white/10'
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${
                          step.id === activeStep
                            ? `bg-gradient-to-br ${step.color}`
                            : step.id < activeStep
                            ? 'bg-green-500'
                            : 'bg-white/20'
                        }`}>
                          {step.id < activeStep ? <CheckCircle className="w-6 h-6" /> : step.icon}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-white">{step.title}</h5>
                          <p className="text-sm text-slate-300">{step.duration}</p>
                        </div>
                        {step.id === activeStep && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-3 h-3 rounded-full bg-white animate-pulse"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation */}
          <div className="flex justify-center mt-16 space-x-4">
            <button
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
              className="px-6 py-3 rounded-xl bg-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
              disabled={activeStep === 4}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;