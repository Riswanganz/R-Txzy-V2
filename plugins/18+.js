//BOTCAHX RECODE4

let handler  = async (m, { conn }) => {
	
	await m.reply('BOKEP TEREERUUUUSSS, GW DAH APUS FITURNYA')
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
