
//Définir notre bot dans notre code
const bot = new (require("discord.js").Client)();

//Le lier au bot existant sur discord
bot.login(require("./config/token.json"));
//token.json contient votre token. Ne le révélez JAMAIS publiquement !

//un préfixe aide à ne pas activer votre bot sans le vouloir
const PREFIX = ">"

//Une vérification pour voir si le bot s'est bien lancé
bot.on("ready", _ => console.log("Bot démarré"));


//Hello World !
bot.on("message", message => {

    if (message.content === (PREFIX + "hello_world")){
        message.channel.send("Hello World !");
    }

    //Ce bout de code évite au bot de répondre aux autres bots.
    if (message.author.bot) return;
});

