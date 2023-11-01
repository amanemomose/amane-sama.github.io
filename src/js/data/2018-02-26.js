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
      { name: "Go-Tōbun no Hanayome", key: "gotobun" },
      { name: "Shingeki no Kyojin", key: "snk" },
      { name: "Re:zero", key: "rezero" },
      { name: "Touhou", key: "touhou" },
      { name: "Love Live!", key: "lovelive" }
    ]
  },
 {
  name: "Filter by Type",
  key: "type",
  tooltip: "Check this to restrict certain types.",
  checked: false,
  sub: [
    { name: "Lolis", key: "loli" },
    { name: "Femboys", key: "femboy" },
    { name: "Witch", key: "witch" },
    { name: "Huge", key: "huge" },
    { name: "Goth", key: "goth" },
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
    img: "sAcndPF.png",
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
    name: "Nonon Jakuzure",
    img: "P9HIYuJ.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Siesta",
    img: "G7hTJIn.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Maria Ushiromiya",
    img: "uiJloey.png",
    opts: {
      groups: ["wtc"],
      type: ["loli", "witch"],
      media: ["game"]
    }
  },
  {
    name: "Kazemaru Ichirouta",
    img: "5uRDbMQ.png",
    opts: {
      type: ["femboy"],
      media: ["anime"]
    }
  },
  {
    name: "Sakura Haruno",
    img: "KLk0upF.png",
    opts: {
      groups: ["naruto"],
      media: ["anime"]
    }
  },
    {
    name: "Louise Françoise",
    img: "UITvFGo.png",
    opts: {
      media: ["anime"]
    }
  },
    {
    name: "Nanako Doujima",
    img: "7DzksxK.png",
    opts: {
      groups: ["persona"],
      type: ["loli"],
      media: ["game"]
    }
  },
    {
    name: "Sakura Kinomoto",
    img: "TbdKJni.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Makoto Kowata",
    img: "6yK8yoe.png",
    opts: {
      type: ["witch"],
      media: ["anime"]
    }
  },
  {
    name: "Ringo Akai",
    img: "sxcycnD.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Nico Robin",
    img: "AdFyA3p.png",
    opts: {
      groups: ["op"],
      media: ["anime"]
    }
  },
  {
    name: "Wendy",
    img: "Q5qT31a.png",
    opts: {
      type: ["huge"],
      media: ["game "]
    }
  },
  {
    name: "Stocking Anarchy",
    img: "ql6XTJW.png",
    opts: {
      type: ["goth"],
      media: ["anime"]
    }
  },
  {
    name: "Lingyin Huang",
    img: "CQ30n95.png",
    opts: {
      groups: ["is"],
      media: ["anime"]
    }
  },
  {
    name: "Tenten",
    img: "X3GDPsQ.png",
    opts: {
      groups: ["naruto"],
      media: ["anime"]
    }
  },
  {
    name: "Cecilia Alcott",
    img: "Ddwcaix.png",
    opts: {
      groups: ["is"],
      media: ["anime"]
    }
  },
  {
    name: "Laura Bodewig",
    img: "zqCWJhz.png",
    opts: {
      groups: ["is"],
      media: ["anime"]
    }
  },
  {
    name: "Charlotte Dunois",
    img: "VxMiiuH.png",
    opts: {
      groups: ["is"],
      media: ["anime"]
    }
  },
  {
    name: "Suzuha Amane",
    img: "ttOOaw4.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Aurora Syalis",
    img: "iap8qCn.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Luka Urushibara",
    img: "YSiedCL.png",
    opts: {
      type: ["femboy"],
      media: ["anime"]
    }
  },
  {
    name: "Chie Satonaka",
    img: "zEUq3sI.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Perona",
    img: "huOsTqS.png",
    opts: {
      groups: ["op"],
      media: ["anime"]
    }
  },
  {
    name: "Raiha Uesugi",
    img: "uMZvSuG.png",
    opts: {
      groups: ["gotobun"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Yukiko Amagi",
    img: "rUqU94V.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Tsukihi Araragi",
    img: "CgWYeGM.png",
    opts: {
      groups: ["monogatari"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Clover",
    img: "lG27ZqG.png",
    opts: {
      groups: ["ze"],
      media: ["game"]
    }
  },
  {
    name: "Ponzu",
    img: "UgfunPy.pngg",
    opts: {
      groups: ["hxh"],
      media: ["anime"]
    }
  },
  {
    name: "Rise Kujikawa",
    img: "Jm0W3d4.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Chitanda Eru",
    img: "5DsMFr5.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Mito Freecs",
    img: "SX7LMXQ.png",
    opts: {
      groups: ["hxh"],
      media: ["anime"]
    }
  },
  {
    name: "Ema Skye",
    img: "LgEeZfE.png",
    opts: {
      groups: ["aa"],
      media: ["game"]
    }
  },
  {
    name: "Elaina",
    img: "grsXZyM.png",
    opts: {
      type: ["witch"],
      media: ["anime"]
    }
  },
  {
    name: "Suguha Kirigaya",
    img: "uXoo2Nz.png",
    opts: {
      type: ["huge"],
      media: ["anime"]
    }
  },
  {
    name: "Hana Yurikawa",
    img: "QQFogcS.png",
    opts: {
      type: ["huge"],
      media: ["anime"]
    }
  },
  {
    name: "Mayl",
    img: "x8Prspi.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Annie Leonhart",
    img: "VeZ9QjN.png",
    opts: {
      groups: ["snk"],
      media: ["anime"]
    }
  },
  {
    name: "Hina",
    img: "uSMJCvJ.png",
    opts: {
      groups: ["hxh"],
      media: ["anime"]
    }
  },
  {
    name: "Mikasa Ackerman",
    img: "vG3xahL.png",
    opts: {
      groups: ["snk"],
      media: ["anime"]
    }
  },
  {
    name: "Historia Reiss",
    img: "ihZomq4.png",
    opts: {
      groups: ["snk"],
      media: ["anime"]
    }
  },
  {
    name: "Pandora",
    img: "OsgPp0J.png",
    opts: {
      groups: ["rezero"],
      media: ["anime"]
    }
  },
  {
    name: "Komeiji Koishi",
    img: "wVCcens.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Komeiji Satori",
    img: "dup7Nt6.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Kawashiro Nitori",
    img: "4Ufced2.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Patchouli Knowledge",
    img: "A7ZnuHo.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Houraisan Kaguya",
    img: "2YDuTk3.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Yorigami Shion",
    img: "LenxXR4.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Kirisame Marisa",
    img: "tJnkSzK.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Remilia Scarlet",
    img: "8UX7hKE.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Flandre Scarlet",
    img: "OhaDcnc.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Izayoi Sakuya",
    img: "sgZPf11.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Hinanawi Tenshi",
    img: "tZLYivt.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Kazami Yuuka",
    img: "MZXJQq5.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Inaba Tewi",
    img: "yqNfNje.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Rumia",
    img: "0YT7QlS.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Alice Margatroid",
    img: "aDIf0pN.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Saigyouji Yuyuko",
    img: "VT9mTGb.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Hakurei Reimu",
    img: "c5DqpgX.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Konpaku Youmu",
    img: "WMjyRLJ.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Akiyama Yukari",
    img: "Il72tEP.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Nozomi Yumehara",
    img: "2SJ8mTp.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Anzu Kinashi",
    img: "eBi8CY0.png",
    opts: {
      groups: ["yttd"],
      media: ["game"]
    }
  },
  {
    name: "Mayoi Hachikuji",
    img: "v1AENfp.png",
    opts: {
      groups: ["monogatari"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Rikka Takanashi",
    img: "MoU620s.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Kafuu Chino",
    img: "hM1KCqU.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Honoka Kousaka",
    img: "t6hcicH.png",
    opts: {
      groups: ["lovelive"],
      media: ["anime"]
    }
  },
  {
    name: "Maki Nishikino",
    img: "NQk9VNQ.png",
    opts: {
      groups: ["lovelive"],
      media: ["anime"]
    }
  },
  {
    name: "Kalluto Zoldyck",
    img: "o6uqA8e.png",
    opts: {
      groups: ["hxh"],
      type: ["femboy"],
      media: ["anime"]
    }
  },
  {
    name: "Piyon",
    img: "S1uyPwv.png",
    opts: {
      groups: ["hxh"],
      media: ["anime"]
    }
  },
  {
    name: "Marie",
    img: "nSVVQoi.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Elizabeth Liones",
    img: "BdQZPm0.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Franziska Von Karma",
    img: "nekhxkC.png",
    opts: {
      groups: ["aa"],
      media: ["game"]
    }
  },
  {
    name: "Maya Fey",
    img: "us0QlsJ.png",
    opts: {
      groups: ["aa"],
      media: ["game"]
    }
  },
  {
    name: "Sugar",
    img: "gbiCCfY.png",
    opts: {
      groups: ["hxh"],
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
