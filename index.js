const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'recsdinousR.aternos.me.aternos.me', // Put your server IP here
  port: 60462,                      // Put your port here (usually 5 digits)
  username: 'AFK_Bot',              // The name the bot will use
  version: false                    // Auto-detects version
})

// Log messages when the bot joins
bot.on('spawn', () => {
  console.log('Bot has joined the server!')
})

// This part reconnects the bot if it gets kicked
bot.on('end', () => {
  console.log('Disconnected. Attempting to reconnect...')
  setTimeout(() => {
    process.exit() // Render will automatically restart the process
  }, 5000)
})

// Basic error handling
bot.on('error', err => console.log(err))
