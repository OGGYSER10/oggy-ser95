const Turbo = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'QWxleGE=', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Turbo.addCommand({pattern: 'owner', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '𝙽𝙰𝙼𝙴', description: "🍁 ɴᴀᴍᴇ ᴏғ ᴏᴡɴᴇʀ 🍁.\n\n\nOggyy-ser\n ", rowId:" rowid1"},
        {title: '𝙸𝙽𝚂𝚃𝙰 ', description: "🍁 ɪɴsᴛᴀɢʀᴀᴍ 🍁.\n\n\nhttps://instagram.com/_o._.g._.g._.y._\n ", rowId:" rowid2"},
        {title: '𝙽𝚄𝙼𝙱𝙴𝚁', description: "🍁 ɴᴜᴍʙᴇʀ 🍁.\n\n\nhttps://wa.me/919544214898\n ", rowId:" rowid3"},
        ]
       
       const sections = [{title: "𝙾𝙶𝙶𝚈 𝚂𝙴𝚁", rows: rows}]
       
       const button = {
        buttonText: 'ɪͥᴛͭsᷤ ᴍͫᴇͤ | 𝐎𝐆𝐆𝐘👻💙',
        description: "💫 ᴏᴡɴᴇʀ ᴅᴇᴛᴀɪʟs",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
