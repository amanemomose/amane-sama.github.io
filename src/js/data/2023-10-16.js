dataSetVersion = "2023-10-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "MILGRAM", key: "milgram" },
      { name: "Pokémon", key: "pokemon" },
      { name: "Danganronpa", key: "dg" },
      { name: "Senran Kagura", key: "sk" },
      { name: "Ace Attorney", key: "aa" },
      { name: "When They Cry", key: "wtc" },
      { name: "Voiced CG", key: "cgv" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Amane Momose",
    img: "NsEaaux.png",
    opts: {
      groups: ["milgram"]
    }
  },
  {
    name: "Yuno Kashiki",
    img: "2t8EFeq.png",
    opts: {
      groups: ["milgram"]
    }
  },
  {
    name: "Muu Kusunoki",
    img: "3mfOhO2.png",
    opts: {
      groups: ["milgram"]
    }
  },
  {
    name: "Mahiru Shiina",
    img: "/ymwCIS8.png",
    opts: {
      groups: ["765"]
    }
  }
]
