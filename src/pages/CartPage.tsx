import { motion } from 'motion/react';

export default function CartPage({ onCheckout, onContinueShopping }: { onCheckout: () => void, onContinueShopping: () => void }) {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-[#f7f7f7] min-h-[calc(100vh-140px)]">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: Cart Items */}
        <div className="w-full lg:w-2/3">
          {/* Shipping Group Header */}
          <div className="bg-white rounded-t-lg border border-gray-200 p-4 flex items-center gap-2 border-b-0">
            <div className="bg-orange-100 p-1 rounded">📦</div>
            <h2 className="font-bold text-lg">Shipping</h2>
          </div>
          
          {/* Cart Item */}
          <div className="bg-white rounded-b-lg border border-gray-200 p-6 flex flex-col sm:flex-row gap-6 relative">
             <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>
             
             <img 
               src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=200&q=80" 
               alt="Jeans"
               className="w-24 h-24 object-cover rounded bg-gray-100 shrink-0"
             />
             
             <div className="flex-1">
               <h3 className="font-medium text-gray-900 pr-8">Levi's® Women's Middy Wide Leg Ankle Jeans - Kiss Goodbye 29</h3>
               
               <div className="mt-4 flex flex-wrap items-center gap-4">
                 <div className="flex items-center border border-gray-300 rounded-full h-10 w-28 overflow-hidden">
                   <button className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50">−</button>
                   <span className="flex-1 text-center font-medium">1</span>
                   <button className="w-8 h-full flex items-center justify-center text-green-700 hover:bg-gray-50 font-bold">+</button>
                 </div>
                 <button className="text-gray-700 font-medium px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                   Save for later
                 </button>
               </div>
               <div className="mt-2 text-sm text-[#cc0000]">Only 5 left</div>
             </div>
             
             <div className="w-full sm:w-48 mt-4 sm:mt-0">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full border-[5px] border-green-700 mt-1 shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Shipping</div>
                    <div className="text-xs text-green-700 font-medium">Order by 6pm, get it tomorrow</div>
                  </div>
                </div>
             </div>
             
             <div className="text-left sm:text-right mt-2 sm:mt-0">
               <div className="text-xl font-bold text-[#cc0000]">$55.24</div>
               <div className="text-sm text-gray-500 line-through">reg $64.99</div>
               <div className="text-sm text-[#cc0000] font-medium">Clearance</div>
             </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-bold text-xl mb-4">Order summary</h3>
            
            {/* LOYALTY VISUALIZER - CART LEVEL */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-6 p-4 rounded-xl border border-red-100 bg-red-50/40 relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-3">
                <img src="https://www.target.com/icons-illustrations/v2/light/bullseye-tm.svg" className="w-5 h-5" />
                <span className="font-bold text-[#cc0000] text-sm tracking-wide">Target Circle™</span>
              </div>
              
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                <span>Current</span>
                <span>$10 Reward</span>
              </div>
              
              {/* Progress bar container */}
              <div className="h-2.5 w-full bg-red-100 rounded-full overflow-hidden flex mb-3">
                {/* Current Points */}
                <div className="h-full bg-gray-400" style={{ width: '35%' }} title="350 pts"></div>
                {/* Pending Points from cart */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '55.2%' }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="h-full bg-[#cc0000] relative stripe-pattern" 
                  title="552 pending pts"
                />
              </div>
              
              <p className="text-sm text-gray-700 leading-snug">
                This purchase adds <span className="font-bold text-[#cc0000]">552 pending points</span>.
                You'll be just <span className="font-bold">98 points</span> away from your next reward!
              </p>
            </motion.div>

            <div className="flex justify-between text-gray-700 mb-3">
              <span>Subtotal (1 item)</span>
              <span>$55.24</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-3">
              <span>Delivery</span>
              <span className="text-green-700">Free</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-4 pb-4 border-b border-gray-200">
              <span>Estimated tax</span>
              <span>$5.66</span>
            </div>
            
            <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
              <span>Total</span>
              <span>$60.90</span>
            </div>

            <button 
              onClick={onCheckout}
              className="w-full bg-[#cc0000] text-white font-bold text-lg rounded-full py-3.5 hover:bg-red-800 transition-colors"
            >
              Checkout
            </button>
            <button 
              onClick={onContinueShopping}
              className="w-full mt-3 bg-gray-100 text-gray-800 font-bold text-lg rounded-full py-3 hover:bg-gray-200 transition-colors"
            >
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
