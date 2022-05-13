/*
   * Create By ??????s?r??
   * Contactame en Wa wa.me/593991398786
   * Follow https://github.com/CarlosTwT
   * Gracias a Hisoka por la base!
   * Este script es completamente *GRATIS* se precavido de los estafadores.
   * Si intentas comercializar este script podr¨ªas tener problemas legales!   
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	riykey: 'https://zenzapis.xyz',
	harn: 'https://hardianto.xyz',
	xteam: 'https://api.xteam.xyz',
	ryu: 'https://api-ryubotz.herokuapp.com',
    bri: 'http://brizas-api.herokuapp.com',
	vio: 'https://api.violetics.pw',
    cnf: 'https://api-alc.herokuapp.com',
    lzm: 'https://lzmods-api.xyz',
    ley: 'https://leyscoders-api.herokuapp.com',	
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'TU APIKEY', // puedes ingresar al sitio web y conseguir tu api
    'https://hardianto.xyz': 'hardianto', //api ilimitada
    'https://api.xteam.xyz': 'TU APIKEY', //puedes ingresar al sitio web y conseguir tu api
    'https://api-ryubotz.herokuapp.com': 'RyuBotz', //api ilimitada
    'http://brizas-api.herokuapp.com': 'TU APIKEY', //puedes ingresar al sitio web y conseguir tu api 
    'https://api.violetics.pw': 'TU APIKEY', //ingresa al sitio y crea tu cuenta, tendr¨¢s una api de 1000 request, col¨®cala aqu¨ª para que los logos funcionen 
    'https://api-alc.herokuapp.com': 'ConfuMods', //api ilimitada
    'https://lzmods-api.xyz': 'Tu apikey', //puedes ingresar al sitio web y conseguir tu api
    'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', //api ilimitada
}
//disculpas si unas apis no las coloco, :( son gratuitas y tienen l¨ªmite, ingresa al sitio web de cada api, inicialo y coloca tu propia apikey!
// Owner
global.owner = ['593991398786','14162776464'] //tu numero 
global.ownernomer = '593991398786' //tu numero
global.premium = ['593991398786'] //numero de usuarios premiums
global.ownername = 'CrlsOps^' //tu nombre
global.botname = 'ð™º ð™¸ ðšƒ ðš‰ ð™¸ ð™° - ð™¼ ð™³' //nombre bot
global.footer = 'ð™º ð™¸ ðšƒ ðš‰ ð™¸ ð™° - ð™¼ ð™³' //name bot
global.email = 'carlos.e.escobarmc@gmail.com' //gmail
global.ig = 'https://instagram.com/c4rlos_9e' //Instagram
global.region = 'Planet Equador' //cualquier ubicaci¨®n

// Botones
global.linkbot = 'https://linkr.bio/KitziaBotMD' //todos los links tienen que comenzar con https://
global.tiktok = 'https://tiktok.com/@theprivmen' //todos los links tienen que comenzar con https://
global.myweb = 'https://youtube.com/channel/UCCfr9OPXCCOqRhQlI1pjxzQ' //todos los links tienen que comenzar con https://
global.sc = 'https://github.com/CarlosTwT' //todos los links tienen que comenzar con https://

// Wm
global.packname = 'Bot By CRLS?\n@theprivmen\n593991398786' //packname stickers
global.author = 'KITZIA-MD\n\nWA AUTO STICKER\n\n1(416)277-6464\n\n\n\n\n\n' //autor stickers

// Thumb & Image random
global.thumb = fs.readFileSync('./image/keyol.jpg') //imagen bot
global.thumb2 = fs.readFileSync('./image/keyol2.jpg') //imagen bot
global.pp_video = fs.readFileSync('./image/keyol.mp4') //gif bot

/*
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
*/

// Lainnya
global.sessionName = 'session' //nombre session.json
global.prefa = ['#'] //prefic global
global.sp = 'âŒ?' //sp global 

// Mess wait & Premium
global.mess = {
    success: 'âœ? Listo', //mensaje listo
    admin: 'Funciones especiales para el administrador del grupo!', //mensaje para admins
    botAdmin: 'Necesito ser administrado para tener acceso a esa funci¨®n!', //mensajes no adm bot
    owner: 'Funciones especiales para el creador del bot', //mensaje creador
    group: 'Funciones bloqueadas para uso privado\nusalo en un grupo!', //mensaje solo grupo
    private: 'Funciones solo validas para chat privado!', //mensaje solo chat pv
    listo: 'Hecho', //mensaje hecho
    bot: 'Funciones especiales para el usuario con el nÃºmero de bot', //msg bot
    wait: 'Cargando...', //mensaje wait
    endLimit: 'Su lÃ­mite diario ha expirado, el lÃ­mite se restablecerÃ¡ cada 12 horas', //limites
    endGLimit: 'Su lÃ­mite diario de juego ha expirado, el lÃ­mite se restablecerÃ¡ cada 12 horas', //limites
}
global.limitharian = "5" //limite para pedidos
global.limitgame = "20" //limites para juegos 
global.limitawal = {
    premium: "Infinity",
    free: 3
}

// Logs update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
