require("dotenv").config();
const { WakaTimeClient, RANGE } = require("wakatime-client");

const wakatime = new WakaTimeClient(process.env.WAKATIME_API_KEY);

async function test() {
  const stats = await wakatime.getMyStats({ range: RANGE.LAST_7_DAYS });
  console.log(stats.data);

  for (let i = 0; i < Math.min(stats.data.languages.length, 2); i++) {
    const data = stats.data.languages[i];
    const { name, percent, text: time } = data;
    console.log(`${name} - ${percent}% - ${time}`);
  }
}

(async () => {
  await test();
})();
