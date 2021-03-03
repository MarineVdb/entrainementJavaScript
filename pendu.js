//Dictionnaire de mots
let dictionnary = ['ornithorinque', 'cri', 'recherche', 'dent', 'alarme', 'caravane', 'muet',
                   'distiller', 'antenne', 'honneur', 'cheval', 'sonner', 'caquet', 'dessus',
                   'cartouche', 'trousse', 'sifflet', 'anniversaire', 'disque'
                  ];

let randomWord = dictionnary[Math.floor(Math.random()*(dictionnary.length - 1))];
let arrayRandomWord = [];
let numLetters = randomWord.length;
let tourCount = 10;
let testedLetters = [];


//Permet de valider avec la touche ENTER
function checkSubmit(e){
    if(e.code == "Enter") {
        e.preventDefault(); //Permet de ne pas rafraichir la page
        checkLetters(); 
    }
}

//Chargement des underscores correspondant au mot secret 
window.onload = () => {
     console.log(randomWord); //Debug

     for(i=0; i<numLetters ; i++) {
        arrayRandomWord.push('_');
    }

    document.getElementById('secretWord').innerHTML = arrayRandomWord.join(" ");
}

//Quand l'utilisateur essaye des lettres
checkLetters = () => {
    
    document.getElementById('message').innerHTML = "";//Reset

    let userInput = (document.getElementById('guess').value).toLowerCase();
    let arrayInput = userInput.split("");
    tourCount -= 1;
    testedLetters.push(userInput);

    if(tourCount <= 0) {
        document.getElementById('message').innerHTML = "Perdu, tu n'as plus de tours";
        document.getElementById('tours').innerHTML = "";
    } else {
        for(i=0; i < arrayInput.length; i++ ) {
            for(j=0; j<=randomWord.length; j++) {
                if (arrayInput[i] == randomWord[j]) {
                    arrayRandomWord[j] = arrayInput[i];
                    document.getElementById('secretWord').innerHTML = arrayRandomWord.join(" ");
                } else if(!randomWord.includes(arrayInput[i])) {
                    document.getElementById('message').innerHTML = "raté, essaye encore";
                    
                } else if (arrayRandomWord.join("") == randomWord) {
                    document.getElementById('message').innerHTML = "Gagné !!";
                }
            }
        }

        document.getElementById('guess').value = "";
        document.getElementById('tours').innerHTML = "Il vous reste " + tourCount + " tours";
        document.getElementById('test').innerHTML = "Vous avez testé les lettres : " + (testedLetters.join(", "));

    }
}



