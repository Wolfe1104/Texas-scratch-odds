const tickets = [
  {
    name: "$1,000,000 Blitz",
    price: 20,
    topPrize: 1000000,
    remainingTop: 2,
    overallOdds: "1 in 3.74",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2621_img1.gif",
    originalTickets: 7159825 // Real value from official site - update others similarly
  },
  {
    name: "$1,000,000 CROSSWORD",
    price: 20,
    topPrize: 1000000,
    remainingTop: 3,
    overallOdds: "1 in 3.41",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2658_img1.gif",
    originalTickets: 15267250 // Real value
  },
  {
    name: "$1,000,000 Ca$h!",
    price: 20,
    topPrize: 1000000,
    remainingTop: 4,
    overallOdds: "", // Add from site if available
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2744_img1.gif",
    originalTickets: 10000000 // Placeholder - update with real from detail page
  },
  {
    name: "$100, $200, $500 OR $1,000!",
    price: 20,
    topPrize: 1000,
    remainingTop: 2002,
    overallOdds: "1 in 9.49",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2609_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$100,000 Bonus Mulltiplier",
    price: 5,
    topPrize: 100000,
    remainingTop: 3,
    overallOdds: "",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2701_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$100,000 Richer",
    price: 5,
    topPrize: 100000,
    remainingTop: 3,
    overallOdds: "1 in 4.34",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2631_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$20 Million Supreme",
    price: 100,
    topPrize: 20000000,
    remainingTop: 1,
    overallOdds: "1 in 3.49",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2400_img1.gif",
    originalTickets: 10379010 // Real value
  },
  {
    name: "$200,000 Blitz",
    price: 5,
    topPrize: 200000,
    remainingTop: 3,
    overallOdds: "1 in 4.08",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2619_img1.gif",
    originalTickets: 16884975 // Real value
  },
  {
    name: "$250 Grand",
    price: 10,
    topPrize: 250000,
    remainingTop: 3,
    overallOdds: "1 in 3.86",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2474_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$250,000 50X Cashword",
    price: 10,
    topPrize: 250000,
    remainingTop: 9,
    overallOdds: "1 in 3.56",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2668_img1.gif",
    originalTickets: 22393250 // Real value
  },
  {
    name: "$250,000 50X Cashword",
    price: 10,
    topPrize: 250000,
    remainingTop: 2,
    overallOdds: "1 in 3.56",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2582_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$3 Million Ca$h",
    price: 30,
    topPrize: 3000000,
    remainingTop: 2,
    overallOdds: "1 in 3.72",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2633_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$30,000 Cash",
    price: 2,
    topPrize: 30000,
    remainingTop: 3,
    overallOdds: "1 in 4.29",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2634_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$30,000 Gold Rush",
    price: 2,
    topPrize: 30000,
    remainingTop: 3,
    overallOdds: "",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2686_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$400 Million Mega Bucks",
    price: 100,
    topPrize: 5000000,
    remainingTop: 2,
    overallOdds: "1 in 3.84",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2588_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$5 Million Royale",
    price: 50,
    topPrize: 5000000,
    remainingTop: 2,
    overallOdds: "1 in 3.66",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2624_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$5,000 Blitz",
    price: 1,
    topPrize: 5000,
    remainingTop: 2,
    overallOdds: "1 in 4.75",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2617_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$5,000,000 Fortune",
    price: 100,
    topPrize: 5000000,
    remainingTop: 2,
    overallOdds: "1 in 3.91",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2665_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$50, $100 OR $500!",
    price: 10,
    topPrize: 500,
    remainingTop: 5257,
    overallOdds: "1 in 9.43",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2637_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$500 Frenzy",
    price: 5,
    topPrize: 500,
    remainingTop: 2578,
    overallOdds: "",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2742_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$500,000 Blitz",
    price: 10,
    topPrize: 500000,
    remainingTop: 3,
    overallOdds: "1 in 3.83",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2620_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "$60,000 Blitz Word Search",
    price: 3,
    topPrize: 60000,
    remainingTop: 6,
    overallOdds: "1 in 4.34",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2618_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "100X",
    price: 10,
    topPrize: 500000,
    remainingTop: 3,
    overallOdds: "1 in 3.93",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2644_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "100X Sonic Blast",
    price: 10,
    topPrize: 250000,
    remainingTop: 2,
    overallOdds: "",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2691_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "100X The Cash",
    price: 10,
    topPrize: 500000,
    remainingTop: 4,
    overallOdds: "",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2713_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "200X",
    price: 20,
    topPrize: 1000000,
    remainingTop: 1,
    overallOdds: "1 in 3.39",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2645_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "200X The Cash",
    price: 20,
    topPrize: 1000000,
    remainingTop: 4,
    overallOdds: "",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2714_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "20X",
    price: 1,
    topPrize: 5000,
    remainingTop: 4,
    overallOdds: "1 in 4.76",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2642_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "30X Supreme",
    price: 30,
    topPrize: 3000000,
    remainingTop: 2,
    overallOdds: "1 in 3.76",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2616_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "30X The Cash Word Search",
    price: 3,
    topPrize: 60000,
    remainingTop: 6,
    overallOdds: "",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2711_img1.gif",
    originalTickets: 10000000
  },
  {
    name: "500X",
    price: 50,
    topPrize: 1000000,
    remainingTop: 3,
    overallOdds: "1 in 3.36",
    image: "https://www.texaslottery.com/export/sites/lottery/Images/scratchoffs/2589_img1.gif",
    originalTickets: 10000000
  },
  // Add more games from the official list by visiting https://www.texaslottery.com/export/sites/lottery/Games/Scratch_Offs/all.html
  // For each, get total tickets printed from the detail page (link in the list above)
  // For accurate current odds, use the full prize table to estimate remaining tickets as shown in examples
];

// Calculate current top prize odds (using placeholder - for better accuracy, add prize table and calculate % remaining)
tickets.forEach(t => {
  t.currentTopOdds = t.remainingTop > 0 ? (t.originalTickets / t.remainingTop).toFixed(0) : "None left";
});
