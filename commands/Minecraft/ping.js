const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns Bot Ping"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({ fetchReply: true });

    const newMessage = new EmbedBuilder()
      .setColor("#db722c")
      .setTitle(`<a:ONLINE:943257255439122493> Pong - Sylanio Development`)
      .setFooter({text: "©2022 - 2023 | Sylanio Development"})
       .addFields(
        {
          name: `API Lantecy`,
          value: `> **\`${client.ws.ping}\`**`,
          inline: true,
        },        
        )
       .addFields(
        {
          name: `Client Ping`,
          value: `> **\`${message.createdTimestamp - interaction.createdTimestamp}\`**`,
          inline: true,
        }        
        )    
    
    await interaction.editReply({ embeds: [newMessage] });
  },
};