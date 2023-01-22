const { SlashCommandBuilder, EmbedBuilder, Embed, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("Get support while using Codez"),
  async execute(interaction, client) {

    const newMessage = new EmbedBuilder()
      .setColor("#db722c")
      .setTitle(`Sylanio - Support Servers`)
      .setFooter({text: "©2022 - 2023 | Sylanio Development"})
      .setDescription("> **Thanks for using our `Minecraft Status Bot` code and make sure to give us credit because we alway try impossible possible for you!**")

          const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setLabel(`Support Server`)
        .setStyle(ButtonStyle.Link)
        .setEmoji("<:sylanio:1049216131862364172>")
        .setURL(`https://discord.gg/J6VkMYcT2P`),
        new ButtonBuilder()
        .setLabel(`Invite Gitcon`)
        .setStyle(ButtonStyle.Link)
        .setEmoji("<:codez_invite:1063709721313427537>")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=1049370584884191242&permissions=59392&scope=bot`),
      ) 
    
   interaction.reply({ embeds: [newMessage], components: [row] });
  },
};