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
      { name: "Idolmaster", key: "idolmaster" },
      { name: "Ace Attorney", key: "aa" },
      { name: "When They Cry", key: "wtc" },
      { name: "One Piece", key: "op" },
      { name: "Monogatari Series", key: "monogatari" },
      { name: "Hunter x Hunter", key: "hxh" },
      { name: "Kemono Friends", key: "kf" },
      { name: "Your Turn to Die", key: "yttd" },
      { name: "Zero Escape", key: "ze" },
      { name: "Persona", key: "persona" },
      { name: "Naruto", key: "naruto" },
      { name: "Infinite Stratos", key: "if" },
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
    { name: "Witch", key: "witch" }
    { name: "Pants", key: "pants" }
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
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Arisa Mochida",
    img: "WbshsNL.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Fumika Sagisawa",
    img: "UiIdCkb.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Momoka Sakurai",
    img: "v0cMZmX.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Koharu Koga",
    img: "Csw6HaA.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Rin Shibuya",
    img: "SLTezmo.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Uzuki Shimamura",
    img: "hQw0hDD.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Yuka Nakano",
    img: "btkeO2A.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Nanami Asari",
    img: "PAzA3Mw.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Airi Totoki",
    img: "G1KopHP.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Miss Valentine",
    img: "om3fs1O.png",
    opts: {
      groups: ["op"],
      media: ["anime"]
    }
  },
  {
    name: "Biscuit Krueger",
    img: "9hB8xx9.png",
    opts: {
      groups: ["hxh"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Yukari Sendou",
    img: "8poGXKk.png",
    opts: {
      type: ["loli", "witch"],
      media: ["anime"]
    }
  },
  {
    name: "Anna Mochizuki",
    img: "bzli0SH.pngg",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Sachiko Koshimizu",
    img: "mvkRTzr.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Tomoko Kuroko",
    img: "1qDrcHW.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Pan",
    img: "ibQ0n3J.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Natsuki",
    img: "KJztGEq.png",
    opts: {
      media: ["game"]
    }
  }
]
