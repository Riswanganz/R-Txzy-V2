let handler = async(m, { conn, text }) => {
if (!text) throw `Masukkan query!`
              awikwok = `${text} ${text} ${text} 🖤 🖤 🖤 WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya keteknya aaahhhh ${text} wangyy aku mau nyiumin aroma wangynya badan mu aaaahhhh yameteh ${text} AAAAAAAAH ~ keteknya.... aaah badannya juga pengen aku elus-elus ~~ AAAAAH ${text} WANGY WANGY AKU SUKA AROMA BADANNYA AAAHHHH KYAAAA 🖤 🖤 🖤 AROMA KETEKNYAA KYAAA AAHHH ${text} AAAAA LUCCUUUUUUUUUUUUUUU............ ${text} AAAAAAAAAAAAAAAAAAAAGH 🖤 🖤 🖤apa ? ${text} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. 🖤 🖤 🖤 ${text} gw ... ${text} di laptop ngeliatin gw, ${text} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${text} aku gak mau merelakan ${text} aaaaaah 🖤 🖤 🖤 YEAAAAAAAAAAAH GUA MASIH PUNYA ${text} GREPE GREPEEEEE GREEEPEEEEE AAAAHHHHHH YAMETEEEEHHHH`
              conn.reply(m.chat, awikwok, m)
}
handler.help = ['wangy <pasangan>']
handler.tags = ['kerang']
handler.command = /^wangy/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
