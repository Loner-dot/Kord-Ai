module.exports = {
name: "remex",
on: "text"
}

module.exports.run = async (sock, m) => {

const owner = "2349047861708" // your number

if (!m.text) return

if (m.text.toLowerCase().includes("remex")) {

const respectful = [
"Yes my master 👑",
"I'm here Remex.",
"What do you command, master?",
"Remex reigns supreme.",
"Your presence is noted, master.",
"I await your command, Remex.",
"The king has spoken.",
"Always at your service, master.",
"Your bot is listening.",
"Ready when you are, Remex.",
"I bow to the master.",
"The legend himself has arrived."
]

const rude = [
"Who are you calling?",
"Don't mention that name.",
"You're not my master.",
"Mind your business.",
"I wasn't talking to you.",
"Don't summon what you can't control.",
"Watch your mouth.",
"You're not important enough.",
"Try again when you're Remex.",
"That's not your name to call.",
"Silence, peasant.",
"You dare summon the king?",
"Know your place.",
"Stop calling that name.",
"You're not worthy."
]

let sender = m.sender.replace(/[^0-9]/g, "")

let reply

if(sender === owner){
reply = respectful[Math.floor(Math.random()*respectful.length)]
}else{
reply = rude[Math.floor(Math.random()*rude.length)]
}

await sock.sendMessage(m.chat,{text: reply},{quoted:m})

}
  }
