module.exports = {
  name: "clubs",
  permissions: 9,
  execute(msg) {
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setAuthor("React to join a club")
      .setDescription(
        "> âŠī¸ - Anime Club\n> \n> đ¨ - Art Club\n> \n> đââī¸ - Athletics Club\n> \n> đ - Fashion Club\n> \n> đ - Book Club\n> \n> đ˛ - D&D Club\n> \n> đ - Food Club\n> \n> đŽ - Gaming Club\n> \n> đē - Movie/TV Club\n> \n> đŧ - Music Club\n> \n> đ - Pet Club\n> \n> đ¨ - STEM Club\n> \n> đ§ŗ - Travel Club\n> \n> đŗ - Nature Club\n\n**React again to leave a club**"
      );
    msg.channel.send({ embeds: [embed] }).then((msg) => {
      msg.react("âŠī¸");
      msg.react("đ¨");
      msg.react("đââī¸");
      msg.react("đ");
      msg.react("đ");
      msg.react("đ˛");
      msg.react("đ");
      msg.react("đŽ");
      msg.react("đē");
      msg.react("đŧ");
      msg.react("đ");
      msg.react("đ¨");
      msg.react("đ§ŗ");
      msg.react("đŗ");
    });
  },
};
