const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'whitebait.aternos.host', // Use the Dyn IP from your screenshot
  port: 60462,                   // Use the Port from your screenshot
  username: 'AFK_Bot',
  version: false
})

bot.on('spawn', () => {
  console.log('Bot joined! Starting anti-AFK routines...')
  
  // Randomly jump, sneak, and look around every 15-30 seconds
  setInterval(() => {
    const actions = ['jump', 'sneak', 'look']
    const randomAction = actions[Math.floor(Math.random() * actions.length)]
    
    if (randomAction === 'jump') {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    } else if (randomAction === 'sneak') {
      bot.setControlState('sneak', true)
      setTimeout(() => bot.setControlState('sneak', false), 2000)
    } else if (randomAction === 'look') {
      const yaw = Math.random() * Math.PI * 2
      const pitch = (Math.random() - 0.5) * Math.PI
      bot.look(yaw, pitch)
    }
  }, Math.floor(Math.random() * 15000) + 15000)
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if (message === 'hello') {
    bot.chat('I am definitely not a bot!')
  }
})

bot.on('end', () => {
  console.log('Disconnected. Restarting...')
  process.exit() 
})

bot.on('error', (err) => console.log('Error:', err))
