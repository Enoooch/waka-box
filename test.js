require("dotenv").config();
const { WakaTimeClient, RANGE } = require("wakatime-client");
const { unicodeProgressBar } = require("./utils.js");

const wakatime = new WakaTimeClient(process.env.WAKATIME_API_KEY);

async function test() {
  const stats = await wakatime.getMyStats({ range: RANGE.LAST_7_DAYS });
  console.log(stats.data);

  for (let i = 0; i < Math.min(stats.data.languages.length, 10); i++) {
    const data = stats.data.languages[i];
    const { name, percent, text: time } = data;
    const line = [
      name.padEnd(11),
      time.padStart(14) + " ",
      unicodeProgressBar(percent + 15),
      String(percent.toFixed(1)).padStart(5) + "%"
    ];
    console.log(line.join(" "));
  }
}

(async () => {
  await test();
})();
