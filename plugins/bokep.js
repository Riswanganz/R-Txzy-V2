let fs = require('fs')
let handler = async (m, { conn }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	let stc = fs.readFileSync('./src/sukses.webp')
 conn.sendFile(m.chat, 'FITUR INI TELAT DI HAPUS, INGET DOSA', m)
}
handler.help = ['bkp']
handler.tags = ['bokep']

handler.command = /^(bkp)$/i
handler.premium = false
handler.register = false
handler.limit = 1
module.exports = handler
