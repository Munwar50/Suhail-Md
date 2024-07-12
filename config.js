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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_04_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4LFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcyLFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMnA0MVp3TldXcHhZQkFrbUxnbkdxNmI5dDU4aVpxVW5RRGNUcGdhWXMwOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwienpybmk5d3VUNTIwQ3g1NU92SGxOUVwiLFxuICBcInBob25lSWRcIjogXCI3ZmQ1OGI2Yi0zMDVlLTRkZDAtODI4OS1mNWFhMTI5NWI0YzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTg4LFxuICAgICAgMzUsXG4gICAgICA4OSxcbiAgICAgIDksXG4gICAgICAyMjEsXG4gICAgICAyMDQsXG4gICAgICA3MyxcbiAgICAgIDI0MixcbiAgICAgIDIwOSxcbiAgICAgIDQzLFxuICAgICAgOTQsXG4gICAgICAxOTYsXG4gICAgICA5MCxcbiAgICAgIDgwLFxuICAgICAgMjI1LFxuICAgICAgMTAsXG4gICAgICA2NCxcbiAgICAgIDEyMSxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMTAxLFxuICAgICAgMjgsXG4gICAgICAxOCxcbiAgICAgIDIwMyxcbiAgICAgIDE1LFxuICAgICAgMTkyLFxuICAgICAgMTE5LFxuICAgICAgMTM1LFxuICAgICAgMTI2LFxuICAgICAgMjA3LFxuICAgICAgMTA2LFxuICAgICAgMjQ2LFxuICAgICAgNzYsXG4gICAgICA1OCxcbiAgICAgIDI1MyxcbiAgICAgIDM4LFxuICAgICAgMyxcbiAgICAgIDIwNyxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNMVc4VFJIUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDIyNTY1NDI3OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2ODUxODA2NjMxNTM4NDoyMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJN4bScybThtKHhtIDKgF9V4bSF4bSFyarJtFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0thWjcxNFFvLy9EdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUNKNjdoTmtPYnFTempPL2dQVm1DUFhPc3Z6WUFtbzdGRGY3TkdIendrdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4aWJVaE9udGltb0ExWm8rNkZIN0pSMHN6UTBINmpWWEFSN0lWRVB6aWRGWnQwV1NsRjdJMkRRU1Y3Sko4bGV6Ym9nSTVLZ052QW5XbW9SNkEwVU9Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCRHpoZ0l4M3hhR242ejYydGw0NWlGV1d6Q054Z0kwTXBJYVZNN28xZkZzOUFEZEdzOTQ1Mnl0VEhZUTlSZVVrSXJ6UFVIRUJnUmt2eXhRU0tud2ZBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjI1NjU0Mjc6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzc4NjYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWpNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFak0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyb3N3c05Zd3hTSFVkV1pEMnU0dnFDTlBxWUZxNVpZMUV1aGgzdElXNFljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5ODk1NDE1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNzc4NjY1NDE3XCJ9Igp9"  // PUT your SESSION_ID 


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
