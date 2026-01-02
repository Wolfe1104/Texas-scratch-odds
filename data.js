const tickets = [
  {
    name: "Millions Club",
    price: 50,
    topPrize: 5000000,
    remainingTop: 3,
    originalTickets: 15000000,
    overallOdds: "1 in 3.10",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2593_img1.gif",
    // Simplified: remaining prizes > $50 (e.g., $100, $500, etc.)
    profitPrizesRemaining: 45000,  // High number = many good wins left
    totalRemainingPrizes: 1200000,
    totalOriginalPrizes: 4000000
  },
  {
    name: "$50, $100 or $500!",
    price: 10,
    topPrize: 500,
    remainingTop: 5200,
    originalTickets: 12000000,
    overallOdds: "1 in 3.90",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2637_img1.gif",
    profitPrizesRemaining: 350000,  // Lots of $50/$100/$500 left
    totalRemainingPrizes: 1800000,
    totalOriginalPrizes: 3000000
  },
  {
    name: "Premier Play",
    price: 30,
    topPrize: 5000000,
    remainingTop: 4,
    originalTickets: 8000000,
    overallOdds: "1 in 3.55",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2642_img1.gif",
    profitPrizesRemaining: 28000,
    totalRemainingPrizes: 800000,
    totalOriginalPrizes: 2500000
  },
  {
    name: "$250,000 50X Cashword",
    price: 10,
    topPrize: 250000,
    remainingTop: 9,
    originalTickets: 22393250,
    overallOdds: "1 in 3.56",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2668_img1.gif",
    profitPrizesRemaining: 180000,
    totalRemainingPrizes: 3000000,
    totalOriginalPrizes: 6000000
  },
  {
    name: "Hit $5,000",
    price: 5,
    topPrize: 5000,
    remainingTop: 45,
    originalTickets: 8000000,
    overallOdds: "1 in 4.20",
    image: "https://townsquare.media/site/156/files/2024/10/attachment-game-no-2564-hit-usd5-000.jpg?w=780",
    profitPrizesRemaining: 120000,
    totalRemainingPrizes: 1000000,
    totalOriginalPrizes: 2000000
  },
  // Add more games here following the same format...
  // For low-remaining example (hot because running out)
  {
    name: "Lucky 7s",
    price: 2,
    topPrize: 30000,
    remainingTop: 12,
    originalTickets: 10000000,
    overallOdds: "1 in 4.50",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2642_img1.gif",
    profitPrizesRemaining: 80000,
    totalRemainingPrizes: 400000,  // Very low = few tickets left
    totalOriginalPrizes: 3000000
  }
  // ... continue adding all games
];

// Calculate estimated remaining tickets and current top odds
tickets.forEach(t => {
  const percentRemaining = t.totalOriginalPrizes > 0 ? t.totalRemainingPrizes / t.totalOriginalPrizes : 0;
  t.estRemainingTickets = Math.round(t.originalTickets * percentRemaining);
  t.currentTopOdds = t.remainingTop > 0 ? Math.round(t.estRemainingTickets / t.remainingTop).toLocaleString() : "None left";
});
