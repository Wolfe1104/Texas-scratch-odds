const tickets = [
  { gameNumber: "2621", name: "$1,000,000 Blitz", price: 20, topPrize: 1000000, remainingTop: 2 },
  { gameNumber: "2658", name: "$1,000,000 CROSSWORD", price: 20, topPrize: 1000000, remainingTop: 3 },
  { gameNumber: "2744", name: "$1,000,000 Ca$h!", price: 20, topPrize: 1000000, remainingTop: 4 },
  { gameNumber: "2609", name: "$100, $200, $500 OR $1,000!", price: 20, topPrize: 1000, remainingTop: 2002 },
  { gameNumber: "2701", name: "$100,000 Bonus Multiplier", price: 5, topPrize: 100000, remainingTop: 3 },
  { gameNumber: "2631", name: "$100,000 Richer", price: 5, topPrize: 100000, remainingTop: 3 },
  { gameNumber: "2400", name: "$20 Million Supreme", price: 100, topPrize: 20000000, remainingTop: 1 },
  { gameNumber: "2619", name: "$200,000 Blitz", price: 5, topPrize: 200000, remainingTop: 3 },
  { gameNumber: "2474", name: "$250 Grand", price: 10, topPrize: 250000, remainingTop: 3 },
  { gameNumber: "2668", name: "$250,000 50X Cashword", price: 10, topPrize: 250000, remainingTop: 9 },
  { gameNumber: "2582", name: "$250,000 50X Cashword", price: 10, topPrize: 250000, remainingTop: 2 },
  { gameNumber: "2633", name: "$3 Million Ca$h", price: 30, topPrize: 3000000, remainingTop: 2 },
  { gameNumber: "2634", name: "$30,000 Cash", price: 2, topPrize: 30000, remainingTop: 3 },
  { gameNumber: "2686", name: "$30,000 Gold Rush", price: 2, topPrize: 30000, remainingTop: 3 },
  { gameNumber: "2588", name: "$400 Million Mega Bucks", price: 100, topPrize: 5000000, remainingTop: 2 },
  { gameNumber: "2624", name: "$5 Million Royale", price: 50, topPrize: 5000000, remainingTop: 2 },
  { gameNumber: "2617", name: "$5,000 Blitz", price: 1, topPrize: 5000, remainingTop: 2 },
  { gameNumber: "2665", name: "$5,000,000 Fortune", price: 100, topPrize: 5000000, remainingTop: 2 },
  { gameNumber: "2637", name: "$50, $100 OR $500!", price: 10, topPrize: 500, remainingTop: 4257 },
  { gameNumber: "2742", name: "$500 Frenzy", price: 5, topPrize: 500, remainingTop: 3578 },
  { gameNumber: "2620", name: "$500,000 Blitz", price: 10, topPrize: 500000, remainingTop: 3 },
  { gameNumber: "2618", name: "$60,000 Blitz Word Search", price: 3, topPrize: 60000, remainingTop: 6 },
  { gameNumber: "2644", name: "100X", price: 10, topPrize: 500000, remainingTop: 3 },
  { gameNumber: "2691", name: "100X Sonic Blast", price: 10, topPrize: 250000, remainingTop: 2 },
  { gameNumber: "2713", name: "100X The Cash", price: 10, topPrize: 500000, remainingTop: 4 },
  { gameNumber: "2645", name: "200X", price: 20, topPrize: 1000000, remainingTop: 1 },
  { gameNumber: "2714", name: "200X The Cash", price: 20, topPrize: 1000000, remainingTop: 4 },
  { gameNumber: "2642", name: "20X", price: 1, topPrize: 5000, remainingTop: 4 },
  { gameNumber: "2616", name: "30X Supreme", price: 30, topPrize: 3000000, remainingTop: 2 },
  { gameNumber: "2711", name: "30X The Cash Word Search", price: 3, topPrize: 60000, remainingTop: 6 }
];

// Generate image URLs and basic odds estimate (simple placeholder since we don't have full prize tables here)
tickets.forEach(t => {
  t.image = `https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/${t.gameNumber}_img1.gif`;
  // Simple current top odds estimate (very rough - assumes ~10M original tickets average)
  const assumedOriginal = 10000000;
  t.currentTopOdds = t.remainingTop > 0 ? Math.round(assumedOriginal / t.remainingTop).toLocaleString() : "None left";
});
