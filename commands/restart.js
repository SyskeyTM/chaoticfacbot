module.exports = {
  name: "restart",
  description: "Restart the mineflayer bot",
  checkArgs: false,
  arguments: "",
  type: "discord",
  category: "admin",
  usesChat: false,
  sendEmbed: true,
  usesShield: false,
  adminPerms: true,
  execute(bot, database, arguments, options, embed, message) {
    options.successEmbed(
      embed,
      "Bot is restarting, wait 10 seconds before executing any more commands."
    );
    bot.quit();
  },
};
