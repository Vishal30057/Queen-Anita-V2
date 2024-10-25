//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "audio";
global.video = "video";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Vizhal30056:124563@vizhal.tqdxa.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "94702263415";
global.owner = process.env.OWNER_NUMBER || "94702263415";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0x3T3FEK3QrWDBpVDY3VGRySjBabyt5bjJtVlM4UFc2L2R1WmplL3VFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHB1TnhYYmNnN0hXSTBTZG4ybm1VMWlFdjRaUXM4RkVONzJEYzhKc0JnQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSW1sbzIzSVdvSTgyWGhNUU5CYmM1SUtNNHdaR1JLejhZTUZUVzlFc21vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4S2FobUN3QVpMS0l1WGd6dmlqYjh1NjhsRUNmK2lkd0FqZVU1M2VKMEJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MRk8rSTRBNmJKYmdiT3NSRmVxb1kvVjZoTVg1Tllmb1VjTnpoMXBFRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVaay9EWS9hVUpzU1J1VFB3V3gwOFNjQ1F4NElXUXRqNk9XSVlmTXMrems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpscXJibVY3QjIxbTFHanB5V0REM2VMQXJVVUJ5eno3TXBkWTBkV3dtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlo2MXdTMVBrTCs3SnMrelc4YWljb1Z4NUJ3M2g0Ri91b1VwRTJCQnloQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdUSU8ycXdoMUdTZnMyZU55dXROU2VvZE5hRG1mKzZZb2NWcjlJTldRemRFSERlRThwMmNhT3VGVEdmRlBNM2ZDUG9TVm5LS0tFWk9aZHc1cm9ReUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiWUlqQy8xdHQwbllaZWovL2Ewb2VONVplVS9HdW9vVC9tcUxoTDJ5TnBpcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiM3M5TDAzalVTZ3F5NkRrVm1vb3B6USIsInBob25lSWQiOiI3YWQ2MWMwYi0yMDViLTQzMWItOGVhYS02OTllYWZhZDk3NTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibitIUXZiKzFxZG5qbnQxbzE3UStiZ0NrOTJnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPeVFIc3dmWVViUC9kcWV3MGw0OStIZFNJYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJETFZKUU5FRCIsIm1lIjp7ImlkIjoiOTQ3MDIyNjM0MTU6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJWaXNoYWwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09xb3ljQUdFTlNnNzdnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlTU2tZQzQvQzZaTlBBam9ITm1vcm9wSFhFZXpmcUdjeUw3cUo4R0EzQUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFlNXZIRmFXcXhjaS9McnA2TFNib3ZiZUNpaEVxL1IwS3ExY1p1NVNnMC9MU3p0eXFOYkVmVFRRSjVJUFV4dUJFeVNXK2tFMElzWTFrM1Q4UnNMbEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWS1BqOURaRUtoWVRwZDE5bGgyOUZiMEh6ZVZjT0d0ZGN0QVZYMzhsbDN3ZGVpenVsSm02c2lHZzNIczRoNVRlMXdOVUp6Z25hVWNoRHlLekgvL2JCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAyMjYzNDE1OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2trcEdBdVB3dW1UVHdJNkJ6WnFLNktSMXhIczM2aG5NaSs2aWZCZ053QyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTg3NjA2OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDUjgifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`VISHAL MD BOT`",
  author: process.env.PACK_AUTHER || "VISHAL MD BOT",
  packname: process.env.PACK_NAME || "V I S H A L",
  botname: process.env.BOT_NAME || "VISHAL MD BOT",
  ownername: process.env.OWNER_NAME || "Vishal Arunalu",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
