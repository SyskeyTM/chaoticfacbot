module.exports = {
  name: "btop",
  description: "Show the top buffer checkers",
  checkArgs: false,
  type: "discord",
  arguments: "",
  category: "factions",
  usesChat: false,
  sendEmbed: true,
  usesShield: false,
  adminPerms: false,
  execute(bot, database, arguments, options, embed, message) {
    let users = "";
    let bufferChecks = "";
    let count = 1;
    const usersObject = database
      .getAllUsersObject()
      .orderBy("userWallChecks.bufferChecks", "desc")
      .value();
    if (usersObject.length == 0) {
      options.errorEmbed(embed, "There is not enough user data.");
      return;
    }
    for (eachUser of usersObject) {
      users += `${count}. ${eachUser.username}\n`;
      bufferChecks += `${eachUser.userWallChecks.bufferChecks}\n`;
      count += 1;
    }
    embed.setColor("#00C09A").setAuthor("🏅 Top Buffer Checkers").addFields(
      {
        name: "Buffer Checker",
        value: users,
        inline: true,
      },
      {
        name: "Checks",
        value: bufferChecks,
        inline: true,
      }
    );
  },
};
