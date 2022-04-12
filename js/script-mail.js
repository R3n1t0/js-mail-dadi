// MAIL
// Creare una mail list di email che possono accedere.
// Chiedere la mail all'uttente.
// Controllare se la mail inserita dall'uttente sia presente nella mail list.
// Creare i casi in cui sia presente o no.


// Creare una mail list di email che possono accedere.
const mailList = ["violinhi@hotmail.com", 
  "aardo@hotmail.com", 
  "smeier@outlook.com", 
  "sburke@outlook.com", 
  "cameron@verizon.net", 
  "phyruxus@live.com", 
  "mugwump@msn.com", 
  "sarahs@yahoo.ca", 
  "shawnce@optonline.net", 
  "jesse@mac.com", 
  "purvis@msn.com", 
  "rkobes@mac.com"
]

const mailContainer = document.querySelector(".mail-container")
const buttonRl = document.createElement('button');
buttonRl.className = 'output';


// Chiedere la mail all'uttente.
const userMail = prompt("Inserire eMail");
let mailPresente = false;


// Controllare se la mail inserita dall'uttente sia presente nella mail list.
for(let i = 0; i < mailList.length; i++){

  mailContainer.append(buttonRl);

  if(userMail === mailList[i]){
    mailPresente = true;
  }
}


// Creare i casi in cui sia presente o no.
if(mailPresente == true){
  buttonRl.append("Mail riconosciuta. ENTRA");
}else{
  buttonRl.append("Mail non riconosciuta. RIPROVA"); 
}