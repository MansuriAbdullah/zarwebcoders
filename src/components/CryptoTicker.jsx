import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const tickerData = [
  { symbol: 'BTC', price: '$68,421.50', change: '+2.45%', up: true },
  { symbol: 'ETH', price: '$3,842.12', change: '+1.82%', up: true },
  { symbol: 'SOL', price: '$145.30', change: '-0.54%', up: false },
  { symbol: 'BNB', price: '$592.10', change: '+0.12%', up: true },
  { symbol: 'ADA', price: '$0.45', change: '+4.21%', up: true },
  { symbol: 'XRP', price: '$0.62', change: '-1.25%', up: false },
  { symbol: 'DOT', price: '$7.22', change: '+0.88%', up: true },
  { symbol: 'AVAX', price: '$34.15', change: '+2.11%', up: true },
];

const CryptoTicker = () => {
  return (
    <div className="bg-[#040a14] text-white py-3 overflow-hidden whitespace-nowrap relative z-[60] border-b border-white/5">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-16 items-center min-w-max px-4"
      >
        {[...tickerData, ...tickerData].map((item, index) => (
          <div key={index} className="flex items-center gap-4 font-bold text-[11px] tracking-widest uppercase">
            <span className="text-crypto-text-secondary">{item.symbol}/USDT</span>
            <span className="text-white font-black">{item.price}</span>
            <span className={`flex items-center gap-1.5 ${item.up ? 'text-green-400' : 'text-red-400'}`}>
              {item.up ? <TrendingUp size={14} className="animate-bounce" /> : <TrendingDown size={14} className="animate-bounce" />}
              {item.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CryptoTicker;
