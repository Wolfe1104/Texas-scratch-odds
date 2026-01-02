const tickets = [
  {
    name: "Millions Club",
    price: 50,
    topPrize: 5000000,
    remainingTop: 3,
    originalTickets: 12000000,
    overallOdds: "1 in 3.45"
  },
  {
    name: "$50, $100 or $500!",
    price: 10,
    topPrize: 500,
    remainingTop: 1200,
    originalTickets: 8000000,
    overallOdds: "1 in 3.90"
  },
  {
    name: "Gem 7s",
    price: 20,
    topPrize: 1000000,
    remainingTop: 4,
    originalTickets: 6000000,
    overallOdds: "1 in 3.70"
  },
  // Add more real tickets here...
];

// Calculate current top prize odds
tickets.forEach(t => {
  t.currentTopOdds = t.remainingTop > 0 ? (t.originalTickets / t.remainingTop).toFixed(0) : "None left";
});
