const bar_styles = {
  1: "▁▂▃▄▅▆▇█",
  2: "⣀⣄⣤⣦⣶⣷⣿",
  3: "⣀⣄⣆⣇⣧⣷⣿",
  4: "○◔◐◕⬤",
  5: "□◱◧▣■",
  6: "□◱▨▩■",
  7: "□◱▥▦■",
  8: "░▒▓█",
  9: "░█",
  10: "⬜⬛",
  11: "⬛⬜",
  12: "▱▰",
  13: "▭◼",
  14: "▯▮",
  15: "◯⬤",
  16: "⚪⚫"
};

function unicodeProgressBar(p, style = 8, min_size = 18, max_size = 18) {
  let d;
  let full;
  let m;
  let middle;
  let r;
  let rest;
  let x;
  let min_delta = Number.POSITIVE_INFINITY;
  const bar_style = bar_styles[style];
  const full_symbol = bar_style[bar_style.length - 1];
  const n = bar_style.length - 1;
  if (p >= 100) return full_symbol.repeat(max_size);

  p = p / 100;
  for (let i = max_size; i >= min_size; i--) {
    x = p * i;
    full = Math.floor(x);
    rest = x - full;
    middle = Math.floor(rest * n);
    if (p !== 0 && full === 0 && middle === 0) middle = 1;
    d = Math.abs(p - (full + middle / n) / i) * 100;
    if (d < min_delta) {
      min_delta = d;
      m = bar_style[middle];
      if (full === i) m = "";
      r = full_symbol.repeat(full) + m + bar_style[0].repeat(i - full - 1);
    }
  }
  return r;
}

module.exports = { bar_styles, unicodeProgressBar };
