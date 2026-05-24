const verbs = [
  { base: "arise", past: "arose", pp: "arisen", meaning: "生じる" },
  { base: "awake", past: "awoke", pp: "awoken", meaning: "目覚める" },
  { base: "be", past: "was/were", pp: "been", meaning: "〜である" },
  { base: "bear", past: "bore", pp: "borne", meaning: "耐える" },
  { base: "beat", past: "beat", pp: "beaten", meaning: "打つ" },
  { base: "become", past: "became", pp: "become", meaning: "〜になる" },
  { base: "begin", past: "began", pp: "begun", meaning: "始める" },
  { base: "bend", past: "bent", pp: "bent", meaning: "曲げる" },
  { base: "bet", past: "bet", pp: "bet", meaning: "賭ける" },
  { base: "bind", past: "bound", pp: "bound", meaning: "縛る" },
  { base: "bite", past: "bit", pp: "bitten", meaning: "噛む" },
  { base: "bleed", past: "bled", pp: "bled", meaning: "出血する" },
  { base: "blow", past: "blew", pp: "blown", meaning: "吹く" },
  { base: "break", past: "broke", pp: "broken", meaning: "壊す" },
  { base: "breed", past: "bred", pp: "bred", meaning: "繁殖する" },
  { base: "bring", past: "brought", pp: "brought", meaning: "持ってくる" },
  { base: "broadcast", past: "broadcast", pp: "broadcast", meaning: "放送する" },
  { base: "build", past: "built", pp: "built", meaning: "建てる" },
  { base: "burn", past: "burnt/burned", pp: "burnt/burned", meaning: "燃える" },
  { base: "burst", past: "burst", pp: "burst", meaning: "破裂する" },
  { base: "buy", past: "bought", pp: "bought", meaning: "買う" },
  { base: "cast", past: "cast", pp: "cast", meaning: "投げる" },
  { base: "catch", past: "caught", pp: "caught", meaning: "捕まえる" },
  { base: "choose", past: "chose", pp: "chosen", meaning: "選ぶ" },
  { base: "cling", past: "clung", pp: "clung", meaning: "しがみつく" },
  { base: "come", past: "came", pp: "come", meaning: "来る" },
  { base: "cost", past: "cost", pp: "cost", meaning: "費用がかかる" },
  { base: "creep", past: "crept", pp: "crept", meaning: "忍び寄る" },
  { base: "cut", past: "cut", pp: "cut", meaning: "切る" },
  { base: "deal", past: "dealt", pp: "dealt", meaning: "対処する" },
  { base: "dig", past: "dug", pp: "dug", meaning: "掘る" },
  { base: "do", past: "did", pp: "done", meaning: "する" },
  { base: "draw", past: "drew", pp: "drawn", meaning: "描く" },
  { base: "dream", past: "dreamt/dreamed", pp: "dreamt/dreamed", meaning: "夢を見る" },
  { base: "drink", past: "drank", pp: "drunk", meaning: "飲む" },
  { base: "drive", past: "drove", pp: "driven", meaning: "運転する" },
  { base: "eat", past: "ate", pp: "eaten", meaning: "食べる" },
  { base: "fall", past: "fell", pp: "fallen", meaning: "落ちる" },
  { base: "feed", past: "fed", pp: "fed", meaning: "餌を与える" },
  { base: "feel", past: "felt", pp: "felt", meaning: "感じる" },
  { base: "fight", past: "fought", pp: "fought", meaning: "戦う" },
  { base: "find", past: "found", pp: "found", meaning: "見つける" },
  { base: "flee", past: "fled", pp: "fled", meaning: "逃げる" },
  { base: "fly", past: "flew", pp: "flown", meaning: "飛ぶ" },
  { base: "forbid", past: "forbade", pp: "forbidden", meaning: "禁じる" },
  { base: "forget", past: "forgot", pp: "forgotten", meaning: "忘れる" },
  { base: "forgive", past: "forgave", pp: "forgiven", meaning: "許す" },
  { base: "freeze", past: "froze", pp: "frozen", meaning: "凍る" },
  { base: "get", past: "got", pp: "got/gotten", meaning: "得る" },
  { base: "give", past: "gave", pp: "given", meaning: "与える" },
  { base: "go", past: "went", pp: "gone", meaning: "行く" },
  { base: "grow", past: "grew", pp: "grown", meaning: "育つ" },
  { base: "have", past: "had", pp: "had", meaning: "持つ" },
  { base: "hear", past: "heard", pp: "heard", meaning: "聞く" },
  { base: "hide", past: "hid", pp: "hidden", meaning: "隠す" },
  { base: "hit", past: "hit", pp: "hit", meaning: "打つ" },
  { base: "hold", past: "held", pp: "held", meaning: "持つ" },
  { base: "keep", past: "kept", pp: "kept", meaning: "保つ" },
  { base: "know", past: "knew", pp: "known", meaning: "知っている" },
  { base: "leave", past: "left", pp: "left", meaning: "去る" },
  { base: "lose", past: "lost", pp: "lost", meaning: "失う" },
  { base: "make", past: "made", pp: "made", meaning: "作る" },
  { base: "meet", past: "met", pp: "met", meaning: "会う" },
  { base: "pay", past: "paid", pp: "paid", meaning: "払う" },
  { base: "put", past: "put", pp: "put", meaning: "置く" },
  { base: "read", past: "read", pp: "read", meaning: "読む" },
  { base: "ride", past: "rode", pp: "ridden", meaning: "乗る" },
  { base: "ring", past: "rang", pp: "rung", meaning: "鳴る" },
  { base: "rise", past: "rose", pp: "risen", meaning: "上がる" },
  { base: "run", past: "ran", pp: "run", meaning: "走る" },
  { base: "say", past: "said", pp: "said", meaning: "言う" },
  { base: "see", past: "saw", pp: "seen", meaning: "見る" },
  { base: "sell", past: "sold", pp: "sold", meaning: "売る" },
  { base: "send", past: "sent", pp: "sent", meaning: "送る" },
  { base: "shake", past: "shook", pp: "shaken", meaning: "振る" },
  { base: "shine", past: "shone", pp: "shone", meaning: "輝く" },
  { base: "shoot", past: "shot", pp: "shot", meaning: "撃つ" },
  { base: "show", past: "showed", pp: "shown", meaning: "見せる" },
  { base: "sing", past: "sang", pp: "sung", meaning: "歌う" },
  { base: "sit", past: "sat", pp: "sat", meaning: "座る" },
  { base: "sleep", past: "slept", pp: "slept", meaning: "眠る" },
  { base: "speak", past: "spoke", pp: "spoken", meaning: "話す" },
  { base: "spend", past: "spent", pp: "spent", meaning: "費やす" },
  { base: "stand", past: "stood", pp: "stood", meaning: "立つ" },
  { base: "steal", past: "stole", pp: "stolen", meaning: "盗む" },
  { base: "swim", past: "swam", pp: "swum", meaning: "泳ぐ" },
  { base: "take", past: "took", pp: "taken", meaning: "取る" },
  { base: "teach", past: "taught", pp: "taught", meaning: "教える" },
  { base: "tell", past: "told", pp: "told", meaning: "伝える" },
  { base: "think", past: "thought", pp: "thought", meaning: "考える" },
  { base: "throw", past: "threw", pp: "thrown", meaning: "投げる" },
  { base: "understand", past: "understood", pp: "understood", meaning: "理解する" },
  { base: "wake", past: "woke", pp: "woken", meaning: "目覚める" },
  { base: "wear", past: "wore", pp: "worn", meaning: "身につける" },
  { base: "win", past: "won", pp: "won", meaning: "勝つ" },
  { base: "write", past: "wrote", pp: "written", meaning: "書く" }
];

const hiddenColumns = {
  base: false,
  past: false,
  pp: false,
  meaning: false
};

const search = document.getElementById("search");

let filteredVerbs = verbs;

function toggleColumn(column) {
  hiddenColumns[column] = !hiddenColumns[column];
  renderTable(filteredVerbs);
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  filteredVerbs = verbs.filter(v =>
    v.base.toLowerCase().includes(value) ||
    v.past.toLowerCase().includes(value) ||
    v.pp.toLowerCase().includes(value) ||
    v.meaning.includes(value)
  );

  renderTable(filteredVerbs);
});

function renderTable(list = verbs) {
  const table = document.getElementById("verbTable");

  table.innerHTML = "";

  list.forEach(v => {
    table.innerHTML += `
      <tr>
        <td>${hiddenColumns.base ? "???" : v.base}</td>
        <td>${hiddenColumns.past ? "???" : v.past}</td>
        <td>${hiddenColumns.pp ? "???" : v.pp}</td>
        <td>${hiddenColumns.meaning ? "???" : v.meaning}</td>
      </tr>
    `;
  });
}

renderTable();
