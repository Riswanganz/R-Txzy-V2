let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ Permanen : Rp 5000
├ Trial 3 Hari (FREE)
└────
Silahkan klik pada "List Harga" untuk melihat list, hanya bisa via pulsa.

Pembayaran:
Pulsa : 083804343232
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Permanen', description: "Rp5.000\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: 'Trial', description: "GRATIS\nBot gratis 3 Hari, hanya orang baru yang mengunjungi bot saja.", rowId:".join"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
