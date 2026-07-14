import { Star, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductPage({ onAddToCart, onViewCart, isAdded }: { onAddToCart: () => void, onViewCart: () => void, isAdded: boolean }) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Breadcrumbs */}
      <div className="text-xs text-gray-500 mb-4 flex gap-2 items-center">
        <span>Target</span>
        <span>/</span>
        <span>Clothing, Shoes & Accessories</span>
        <span>/</span>
        <span>Women's Clothing</span>
        <span>/</span>
        <span>Bottoms</span>
        <span>/</span>
        <span className="font-bold text-gray-700">Women's Jeans</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Image */}
        <div className="w-full lg:w-[55%] bg-[#f5f5f5] rounded-lg overflow-hidden flex items-center justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80" 
            alt="Levi's Jeans" 
            className="w-full h-auto object-cover max-h-[800px]"
          />
        </div>

        {/* Right: Details */}
        <div className="w-full lg:w-[45%]">
          <a href="#" className="text-gray-600 underline text-sm mb-2 block">Shop all Levi's</a>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
            Levi's® Women's Middy Wide Leg Ankle Jeans - Kiss Goodbye 29
          </h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 text-gray-300" />
            </div>
            <span className="text-sm font-medium">98</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 underline ml-2">4 Questions</span>
          </div>

          <div className="mb-4">
            <span className="bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded">100+ bought in last month</span>
          </div>

          <div className="flex items-end gap-2 mb-1">
            <span className="text-3xl font-bold text-[#cc0000]">$55.24</span>
            <span className="text-sm text-gray-500 line-through mb-1">reg $64.99</span>
          </div>
          <div className="text-sm text-gray-800 mb-1">
            <span className="font-bold text-[#cc0000]">Clearance</span> save $9.75 (15% off)
          </div>
          <div className="text-sm text-gray-500 mb-6">When purchased online</div>

          {/* LOYALTY VISUALIZER - PRODUCT LEVEL */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-gradient-to-r from-red-50 to-white border border-red-100 rounded-xl p-4 flex gap-4 items-start shadow-sm"
          >
            <div className="bg-white rounded-full p-1.5 shadow-sm border border-red-100 shrink-0 mt-0.5">
              <img src="https://www.target.com/icons-illustrations/v2/light/bullseye-tm.svg" className="w-5 h-5" alt="Target Circle" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 flex flex-wrap items-center gap-2 mb-1">
                Circle Bonus: Earn 552 Points
                <span className="bg-red-100 text-[#cc0000] text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">10x Denim</span>
              </h4>
              <p className="text-sm text-gray-700 leading-snug">
                This item alone gets you <span className="font-semibold text-gray-900">85% of the way</span> to your next $10 reward!
              </p>
            </div>
          </motion.div>

          {/* Color & Size */}
          <div className="mb-6">
            <div className="font-bold mb-2">Color <span className="font-normal text-gray-600">Kiss Goodbye</span></div>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-[#2a3b50]"></div>
              <div className="w-10 h-10 rounded-full border border-gray-300 bg-[#a0b0c0]"></div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold">Size <span className="font-normal text-gray-600">29</span></div>
              <a href="#" className="text-sm text-gray-600 underline">Size guide</a>
            </div>
            <div className="flex flex-wrap gap-2">
              {['24','25','26','27','28','29','30','31','32'].map(size => (
                <button 
                  key={size}
                  className={`w-12 h-10 border rounded flex items-center justify-center font-medium
                    ${size === '29' ? 'border-green-700 text-green-800 border-2' : 'border-gray-300 text-gray-700 hover:border-gray-900'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Fulfillment */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-3 text-center opacity-50">
              <div className="font-bold mb-1">Pickup</div>
              <div className="text-xs text-gray-500">Not available</div>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-3 text-center opacity-50">
              <div className="font-bold mb-1">Delivery</div>
              <div className="text-xs text-gray-500">Check availability</div>
            </div>
            <div className="border-2 border-green-700 rounded-lg p-3 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-100 text-[#cc0000] text-[10px] font-bold px-1.5 py-0.5 rounded-bl">Best</div>
              <div className="font-bold mb-1">Shipping</div>
              <div className="text-xs text-green-700 font-medium">Get it tomorrow</div>
            </div>
          </div>

          <button 
            onClick={isAdded ? onViewCart : onAddToCart}
            className={`w-full font-bold text-lg rounded-full py-3.5 transition-colors ${
              isAdded 
                ? 'bg-gray-800 text-white hover:bg-gray-900' 
                : 'bg-[#cc0000] text-white hover:bg-red-800'
            }`}
          >
            {isAdded ? 'View cart' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
