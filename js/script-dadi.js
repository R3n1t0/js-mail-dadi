// Creo un bottone dove all'evento del click estrae un numero da uno a sei per l'utente e uno per il computer
//Inserisco i bottoni nella struttura HTML
//Collego ai bottoni la funzione di estrazione casuale al CLick.
// Confronto i numeri e asegno la vincita a chi ha il numero maggiore estratto.





// Creo un bottone per l'utente e uno per il computer
const buttonUser = document.createElement('button');
buttonUser.className = 'btn-user';

const buttonPc = document.createElement('button');
buttonPc.className = 'btn-pc';


//Inserisco i bottoni nella struttura HTML 
const dadiContainer = document.querySelector(".dadi-container")
dadiContainer.append(buttonUser, buttonPc)


//Collego ai bottoni la funzione di estrazione casuale al CLick.
buttonUser.addEventListener('click', function(){
  const numberUser = Math.ceil(Math.random() * 6);
  console.log(numberUser);
}

buttonPc.addEventListener('click', function(){
  const numberPc = Math.ceil(Math.random() * 6);
  console.log(numberPc);
}



