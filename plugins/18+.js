//BOTCAHX RECODE4

let handler  = async (m, { conn }) => {
	
	await m.reply('BOKEP TEREERUUUUSSS, GW DAH APUS FITURNYA')
  conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
}
handler.help = ['filebokep']
handler.tags = ['internet']
handler.command = /^(filebokep)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
