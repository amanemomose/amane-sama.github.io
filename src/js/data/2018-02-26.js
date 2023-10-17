dataSetVersion = "2018-02-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Hololive", key: "holo" },
      { name: "Danganronpa", key: "dg" },
      { name: "Genshin Impact", key: "genshin" },
      { name: "Nikke", key: "nikke" },
      { name: "Senran Kagura", key: "sk" },
      { name: "Ace Attorney", key: "aa" },
      { name: "When They Cry", key: "wtc" },
      { name: "765 pro", key: "765" },
      { name: "876 pro", key: "876" },
      { name: "Cinderella Girls", key: "cg" },
      { name: "Million Live", key: "ml" },
      { name: "Voiced CG", key: "cgv" },
      { name: "Anime CG", key: "cga" },
      { name: "CINDERELLA PROJECT", key: "cp" },
    ]
  },
 {
  name: "Filter by Type",
  key: "type",
  tooltip: "Check this to restrict certain types.",
  checked: false,
  sub: [
    { name: "Lolis", key: "loli" },
    { name: "Femboys", key: "femboy" }
  ]
 },
 {
  name: "Filter by Media",
  key: "media",
  tooltip: "Check this to restrict certain types",
  checked: false,
  sub: [
    { name: "Anime", key: "anime" },
    { name: "Games", key: "game" },
    { name: "Other", key: "other" }   
   ]
 }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Amane Momose",
    img: "NsEaaux.png",
    opts: {
      groups: ["milgram"],
      type: ["loli"],
      media: ["other"]
    }
  },
  {
    name: "Yuno Kashiki",
    img: "2t8EFeq.png",
    opts: {
      groups: ["milgram"],
      media: ["other"]
      
    }
  },
  {
    name: "Muu Kusunoki",
    img: "3mfOhO2.png",
    opts: {
      groups: ["milgram"],
      media: ["other"]
    }
  },
  {
    name: "Mahiru Shiina",
    img: "ymwCIS8.png",
    opts: {
      groups: ["milgram"],
      media: ["other"]
    }
  },
  {
    name: "Kotoko Yuzuriha",
    img: "LZfszZC.png",
    opts: {
      groups: ["milgram"],
      media: ["other"]
    }
  },
  {
    name: "Himiko Yumeno",
    img: "dvOWQFO.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Kirumi Toujou",
    img: "NxFl8Bf.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Tenko Chabashira",
    img: "m7qCPZt.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Miu Iruma",
    img: "tO9GGkr.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Angie Yonaga",
    img: "dmhTNXb.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Sayaka Maizono",
    img: "Gnab3qY.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Kyouko Kirigiri",
    img: "8NZfpMZ.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Mahiru Koizumi",
    img: "QlqtM51.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Chiaki Nanami",
    img: "gIIV5KK.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Maki Harukawa",
    img: "Em7fefG.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Tsumugi Shirogane",
    img: "6LmTIja.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Kaede Akamatsu",
    img: "t4rCpm8.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Celestia Ludenberg",
    img: "INWSljb.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Junko Enoshima",
    img: "YLpgoqZ.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },    
  {
    name: "Touko Fukawa",
    img: "I4he2yL.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Peko Pekoyama",
    img: "slhvY0y.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Sonia Nevermind",
    img: "yNvNCHZ.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Akane Owari",
    img: "dxD2dZ3.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Mikan Tsumiki",
    img: "VBt1Vct.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Kotoko Utsugi",
    img: "wT8J84w.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Ruruka Andou",
    img: "7Rovzy3.png",
    opts: {
      groups: ["dg"],
      media: ["anime"]
    }
  }, 
  {
    name: "Natsumi Kuzuyuu",
    img: "SvUi20H.png",
    opts: {
      groups: ["dg"],
      media: ["anime"]
    }
  }, 
  {
    name: "Miaya Gekkogahara",
    img: "aX9lOtC.png",
    opts: {
      groups: ["dg"],
      media: ["anime"]
    }
  }, 
  {
    name: "Chisa Yukizome",
    img: "GTSm2Pi.png",
    opts: {
      groups: ["dg"],
      media: ["anime"]
    }
  }, 
  {
    name: "Ibuki Mioda",
    img: "tP6ShzQ.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Chihiro Fujisaki",
    img: "bnU1NR9.png",
    opts: {
      groups: ["dg"],
      type: ["femboy"],
      media: ["game"]
    }
  }, 
  {
    name: "Monaka Towa",
    img: "BdXEJ1h.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
    {
    name: "Hikari Yagami",
    img: "s6AoUM2.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  }, 
  {
    name: "Ami Futami",
    img: "I4he2yL.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Mami Futami",
    img: "HFOZZQP.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Iori Minase",
    img: "lvWjZSi.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Momoko Suou",
    img: "hGVnSNv.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Anzu Futaba",
    img: "wqLmAGW.png",
    opts: {
      groups: ["idolmaster"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Kanako Mimura",
    img: "04Dfu7i.png",
    opts: {
      groups: ["cg",
        "cgv",
        "cga",
        "cp"]
    }
  },
  {
    name: "Arisa Mochida",
    img: "WbshsNL.png",
    opts: {
      groups: ["cg"]
    }
  },
  {
    name: "Fumika Sagisawa",
    img: "UiIdCkb.png",
    opts: {
      groups: ["cg",
        "cgv"]
    }
  },
  {
    name: "Momoka Sakurai",
    img: "v0cMZmX.png",
    opts: {
      groups: ["cg",
        "cga"]
    }
  },
  {
    name: "Koharu Koga",
    img: "Csw6HaA.png",
    opts: {
      groups: ["cg"]
    }
  },
  {
    name: "Rin Shibuya",
    img: "SLTezmo.png",
    opts: {
      groups: ["cg",
        "cgv",
        "cga",
        "cp"]
    }
  },
  {
    name: "Uzuki Shimamura",
    img: "hQw0hDD.png",
    opts: {
      groups: ["cg",
        "cgv",
        "cga",
        "cp"]
    }
  },
  {
    name: "Airi Totoki",
    img: "G1KopHP.png",
    opts: {
      groups: ["cg",
        "cgv",
        "cga"]
    }
  }
]
