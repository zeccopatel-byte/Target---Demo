import { Search, User, ShoppingCart } from 'lucide-react';
import { Screen } from '../App';

export default function Header({ setScreen, cartCount }: { setScreen: (s: Screen) => void, cartCount: number }) {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Top red bar */}
      <div className="bg-[#cc0000] text-white text-[11px] font-medium py-1.5 px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1 cursor-pointer hover:underline">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Ship to 60605
          </span>
          <span className="flex items-center gap-1 cursor-pointer hover:underline">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            Chicago South Loop
          </span>
        </div>
        <div className="flex gap-4 hidden md:flex">
          <span className="cursor-pointer hover:underline">Target Circle™</span>
          <span className="cursor-pointer hover:underline">Target Circle™ Card</span>
          <span className="cursor-pointer hover:underline">Target Circle 360™</span>
          <span className="cursor-pointer hover:underline">Registry & Wish List</span>
          <span className="cursor-pointer hover:underline">Weekly Ad</span>
          <span className="cursor-pointer hover:underline">Find Stores</span>
        </div>
      </div>
      
      {/* Main nav bar */}
      <div className="py-3 px-4 flex items-center gap-4 lg:gap-8 max-w-[1600px] mx-auto">
        <img
          src="https://www.target.com/icons-illustrations/v2/light/bullseye-tm.svg"
          alt="Target"
          className="h-10 w-10 cursor-pointer shrink-0"
          onClick={() => setScreen('product')}
        />
        
        <nav className="hidden lg:flex gap-6 font-bold text-gray-800 shrink-0 text-sm">
          <span className="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-md">Categories</span>
          <span className="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-md">Deals</span>
          <span className="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-md">Pickup & delivery</span>
        </nav>
        
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 flex items-center gap-2 max-w-4xl">
          <input 
            type="text" 
            placeholder="What can we help you find?" 
            className="bg-transparent w-full outline-none text-gray-900 placeholder-gray-500 text-sm" 
          />
          <Search className="text-gray-600 w-5 h-5 shrink-0" />
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <button className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md font-medium text-sm">
            <User className="w-6 h-6" />
            <span className="hidden sm:block">Account</span>
          </button>
          
          <button 
            className="relative hover:bg-gray-100 p-2 rounded-md" 
            onClick={() => setScreen('cart')}
          >
            <ShoppingCart className="w-7 h-7 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#cc0000] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
