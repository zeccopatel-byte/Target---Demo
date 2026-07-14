import { CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConfirmationPage({ onContinueShopping }: { onContinueShopping: () => void }) {
  return (
    <div className="min-h-[calc(100vh-140px)] bg-[#f7f7f7] py-12 px-4 flex justify-center">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle2 className="w-10 h-10" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thanks for your order!</h1>
          <p className="text-gray-600">Order #892839103 • We've emailed your receipt.</p>
        </div>

        {/* Celebratory Loyalty Moment - POST PURCHASE */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden text-left relative"
        >
          {/* Decorative Target Red Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#cc0000]"></div>
          
          <div className="p-8 md:p-10">
            <div className="flex flex-col items-center text-center mb-8">
              <img src="https://www.target.com/icons-illustrations/v2/light/bullseye-tm.svg" className="w-12 h-12 mb-3" />
              <h2 className="text-2xl font-bold text-gray-900">Circle Rewards Update</h2>
              <p className="text-gray-600 mt-1">Your 10x Denim points have been applied!</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-gray-900 tracking-tight">902</span>
                  <span className="text-gray-500 font-medium mb-1">pts total</span>
                </div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">1000 Pt Goal</div>
              </div>
              
              {/* Progress bar filled with animation */}
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-4 relative">
                <div className="absolute left-0 top-0 bottom-0 bg-gray-400 w-[35%]"></div>
                <motion.div 
                  initial={{ width: '35%' }}
                  animate={{ width: '90.2%' }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                  className="h-full bg-[#cc0000] absolute left-0 top-0 bottom-0 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)]" 
                />
              </div>

              <div className="bg-red-50 border border-red-100 text-[#cc0000] font-medium p-3 rounded-lg flex items-center justify-center gap-2">
                <span>🎉</span> You earned <strong className="font-bold">552 points</strong> on this order!
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 text-lg mb-6">
                You're only <span className="font-bold text-[#cc0000]">98 points</span> away from your next $10 reward.
              </p>

              <button 
                onClick={onContinueShopping}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
              >
                Shop Daily Deals to close the gap
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
