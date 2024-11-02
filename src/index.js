const { SapphireClient } = require('@sapphire/framework')
const { GatewayIntentBits } = require('discord.js')
require('dotenv')

const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds],
})
