const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923022565427" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923022565427";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923022565427,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_17_34_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYxLFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVB4c1I2cXpjWjRpUUlWNHFhTEkzSFBsakpwRnVwRVAyK1E4RGwwNHBsRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMjI1NjU0MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY0QTRCQkE4MzM3Q0E1MjU0M0UzQTlGM0VEMERCRTk1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDIwMDg3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAyMjU2NTQyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0M3QTc4QzQ4RUFGOUVDMzBGODBGRjFGRDU2REJBNjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjAwODc0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhJSmM1cmdMUXVpVF9mRDEwc0V4VXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDFlZjJmOTctYTg2ZC00NTk0LThjYzgtMTE3Y2Q0MGU2NDFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDIxNyxcbiAgICAgIDEyMixcbiAgICAgIDQwLFxuICAgICAgMTg2LFxuICAgICAgMzEsXG4gICAgICA5NCxcbiAgICAgIDUzLFxuICAgICAgOTYsXG4gICAgICAyNDIsXG4gICAgICA4OSxcbiAgICAgIDIwNSxcbiAgICAgIDE3NCxcbiAgICAgIDQ4LFxuICAgICAgMTg0LFxuICAgICAgMjMzLFxuICAgICAgMTcyLFxuICAgICAgNTUsXG4gICAgICAxMDYsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAyMyxcbiAgICAgIDI1MixcbiAgICAgIDI0MCxcbiAgICAgIDI1LFxuICAgICAgMzMsXG4gICAgICA4MSxcbiAgICAgIDIwMixcbiAgICAgIDE4OCxcbiAgICAgIDE0LFxuICAgICAgMTU5LFxuICAgICAgNTUsXG4gICAgICAxMjQsXG4gICAgICAxNTcsXG4gICAgICAxMDUsXG4gICAgICA1MixcbiAgICAgIDk5LFxuICAgICAgODQsXG4gICAgICAxMzAsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDJRRkI4SlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAyMjU2NTQyNzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjg1MTgwNjYzMTUzODQ6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTcy4xa7FhcW0w4TFll/FrsSQxJDDj8WFXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0taNzE0UW90Mmd0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhQ0o2N2hOa09icVN6ak8vZ1BWbUNQWE9zdnpZQW1vN0ZEZjdOR0h6d2t3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRKQkNiNndXZlp3SkRSNlZjQkV4ZEhjcXBaK2xhajh6bzg3T0k5RDFnM2F2N0p5eXAzSEVlSzQ5RnJvWE1NT3NmSC9CV2ZTQ0k5TDJyY1I2bGNHYkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpodWd1MWVSamRiM1A0NTAzckxZV1g2SGR1M1krVTB3bFRwaGdhbUNZamJ2ZkEzeXlXMzM2WWlKVXcrQU1xdEdDam0yaEJiUDFLK0FuMEFPcVJVQUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyMjU2NTQyNzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMDA4NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCQ0tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJDSy5qc29uIjogIntcImtleURhdGFcIjpcIllRL2tWZnUvUGVVK1ZDSDlJMnNjSHJBZnZ2d2JmNnRJWlczS0pnNmtpT289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4OTU0MTQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyMDA4NzE5NjZcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
