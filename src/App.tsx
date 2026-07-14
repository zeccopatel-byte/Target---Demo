/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';

export type Screen = 'product' | 'cart' | 'confirmation';

export default function App() {
  const [screen, setScreen] = useState<Screen>('product');
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const checkout = () => {
    setScreen('confirmation');
    setCartCount(0);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header setScreen={setScreen} cartCount={cartCount} />
      
      <main>
        {screen === 'product' && <ProductPage onAddToCart={addToCart} onViewCart={() => setScreen('cart')} isAdded={cartCount > 0} />}
        {screen === 'cart' && <CartPage onCheckout={checkout} onContinueShopping={() => setScreen('product')} />}
        {screen === 'confirmation' && <ConfirmationPage onContinueShopping={() => setScreen('product')} />}
      </main>
    </div>
  );
}
