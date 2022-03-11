//Yahaha wahyu
const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = global.API('dzx', 'http://zekais-api.herokuapp.com/jail?url=https://i.pinimg.com/736x/30/e3/b3/30e3b3d7157a3cee502760a4a17c20fd.jpg&apikey=mZUEFI2U', { url }) //`https://api.dhamzxploit.my.id/api/canvas/wanted?url=${url}`
  let stiker = await sticker(null, wanted, 'jail', '© Wanz')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Conversion Failed')
  }
}
handler.help = ['jail']
handler.tags = ['sticker']
handler.command = /^jail$/i

module.exports = handler
