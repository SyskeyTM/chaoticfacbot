module.exports = {
  name: "ping",
  description: "Cool stuff",
  checkArgs: false,
  arguments: "",
  type: "ingame",
  category: "factions",
  usesChat: false,
  sendEmbed: false,
  usesShield: false,
  adminPerms: false,
  execute(bot, database, arguments, options, client, username, embed) {
    let strings = [
      `"I watch cuties for the plot" -ilyVape`,
      `"ignsJack's sister is hot" -ilyVape`,
      "jack fucked courtney",
      `"Aless is so hot" - JustBanterNY`,
    ];
    let randomNum = Math.floor(Math.random() * strings.length);
    bot.chat(strings[randomNum]);
  },
};
