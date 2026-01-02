const tickets = [
  {
    name: "$20 Million Supreme",
    price: 100,
    topPrize: 20000000,
    remainingTop: 1,
    originalTickets: 10379010,
    overallOdds: "1 in 3.49",
    gameNumber: "2400",
    profitPrizesRemaining: 25000,       // Example - update with real sum of prizes > $100 remaining
    totalRemainingPrizes: 800000,
    totalOriginalPrizes: 3500000
  },
  {
    name: "$1,000,000 Blitz",
    price: 20,
    topPrize: 1000000,
    remainingTop: 2,
    originalTickets: 8000000,
    overallOdds: "1 in 3.74",
    gameNumber: "2621",
    profitPrizesRemaining: 120000,
    totalRemainingPrizes: 1500000,
    totalOriginalPrizes: 2800000
  },
  {
    name: "$1,000,000 CROSSWORD",
    price: 20,
    topPrize: 1000000,
    remainingTop: 3,
    originalTickets: 15267250,
    overallOdds: "1 in 3.41",
    gameNumber: "2658",
    profitPrizesRemaining: 180000,
    totalRemainingPrizes: 2200000,
    totalOriginalPrizes: 5000000
  },
  {
    name: "$100, $200, $500 OR $1,000!",
    price: 20,
    topPrize: 1000,
    remainingTop: 2911,
    originalTickets: 12000000,
    overallOdds: "1 in 9.49",
    gameNumber: "2609",
    profitPrizesRemaining: 450000,      // Lots of small profit wins left
    totalRemainingPrizes: 2800000,
    totalOriginalPrizes: 4000000
  },
  {
    name: "$250,000 50X Cashword",
    price: 10,
    topPrize: 250000,
    remainingTop: 9,
    originalTickets: 22393250,
    overallOdds: "1 in 3.56",
    gameNumber: "2668",
    profitPrizesRemaining: 320000,
    totalRemainingPrizes: 3800000,
    totalOriginalPrizes: 7000000
  },
  {
    name: "$50, $100 OR $500!",
    price: 10,
    topPrize: 500,
    remainingTop: 4257,
    originalTickets: 15000000,
    overallOdds: "1 in 9.43",
    gameNumber: "2637",
    profitPrizesRemaining: 600000,      // Very high - lots of instant money back
    totalRemainingPrizes: 4200000,
    totalOriginalPrizes: 5000000
  },
  {
    name: "200X",
    price: 20,
    topPrize: 1000000,
    remainingTop: 1,
    originalTickets: 9000000,
    overallOdds: "1 in 3.39",
    gameNumber: "2645",
    profitPrizesRemaining: 80000,       // Lower tickets left = hotter
    totalRemainingPrizes: 600000,
    totalOriginalPrizes: 3000000
  },
  // Add the rest yourself using the same format - here are a few more
  {
    name: "$5 Million Royale",
    price: 50,
    topPrize: 5000000,
    remainingTop: 2,
    originalTickets: 8000000,
    overallOdds: "1 in 3.66",
    gameNumber: "2624",
    profitPrizesRemaining: 45000,
    totalRemainingPrizes: 900000,
    totalOriginalPrizes: 2800000
  },
  {
    name: "500X",
    price: 50,
    topPrize: 1000000,
    remainingTop: 3,
    originalTickets: 7000000,
    overallOdds: "1 in 3.36",
    gameNumber: "2589",
    profitPrizesRemaining: 38000,
    totalRemainingPrizes: 750000,
    totalOriginalPrizes: 2500000
  },
  {
    name: "Colossal Cashword",
    price: 50,
    topPrize: 3000000,
    remainingTop: 1,
    originalTickets: 6000000,
    overallOdds: "1 in 3.50",
    gameNumber: "2599",
    profitPrizesRemaining: 30000,
    totalRemainingPrizes: 500000,
    totalOriginalPrizes: 2000000
  }
  // Continue adding all ~70+ games this way for the full list
];

// Auto-generate image URL and calculations
tickets.forEach(t => {
  t.image = `https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/${t.game
