import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export function ProgressIndicator({ currentStep, totalSteps, stepLabels }: ProgressIndicatorProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex items-center flex-1">
              <div className="flex flex-col items-center relative">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: isCompleted || isCurrent ? '#3b82f6' : '#e5e7eb',
                    scale: isCurrent ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className={`text-sm font-semibold ${isCurrent ? 'text-white' : 'text-gray-500'}`}>
                      {stepNumber}
                    </span>
                  )}
                </motion.div>
                <span className={`text-xs mt-2 text-center absolute top-12 whitespace-nowrap ${isCurrent ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                  {label}
                </span>
              </div>
              {index < totalSteps - 1 && (
                <div className="flex-1 h-1 mx-2 relative">
                  <div className="absolute inset-0 bg-gray-200 rounded"></div>
                  <motion.div
                    initial={false}
                    animate={{
                      width: isCompleted ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-blue-500 rounded"
                  ></motion.div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
