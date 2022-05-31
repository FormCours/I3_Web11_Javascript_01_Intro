// Interaction avec la console
// ***************************
console.log('Message log');
console.debug('Message de debug');
console.info('Message d\'information');
console.warn('Message Warning');
console.error('Message d\'erreur');

// Généralement, on utilisera le "console.log" lors du dev


// Interaction avec l'utilisateur (en JS)
// **************************************
/*
alert('Message d\'alert');

const name = prompt('Veuillez entrer un nom');
console.log('Le nom saisie est ' + name);
*/

// Ne pas abuser des interactions alert ou prompt !
// => Toujours préférer interagir avec l'API DOM

// Interaction simple avec le DOM 
// ******************************

// API du DOM : 
// - Réprésentation de la page Web sous forme de Noeud
// - Elle vous permet d'interagir avec la page via des méthodes

// ### Récuperer un element

// - Via l'id  → "<p id="demo01-accueil">Message d'accueil</p>"
const balise1 = document.getElementById('demo01-accueil');
console.log(balise1);

// - Via un selecteur CSS
const balise2 = document.querySelector('#demo01-accueil');
console.log(balise2);

const titlePage = document.querySelector('h1');
console.log(titlePage);

// ### Modifier un element

// - Le contenu texte de la balise
balise1.innerText = 'Modification via le JS';

// - Interagir avec les class de l'element
// Modifie l'attribut "class"
balise1.className = 'demo1 gras test';

// Operation d'ajout, suppression dans l'attribut "class" 
titlePage.classList.add('demo2');
titlePage.classList.add('italic');

balise1.classList.remove('test');

// ### Interaction sur le clique du bouton

// -> Utilisation du "addEventListener" sur la balise
//    Ajouter du code a éxecuter lors de l'event !

const btn = document.getElementById('demo01-action');
console.log(btn);

// Ajouter d'un "listener" sur l'evenement "click"
//  « listener » : la fonction qui sera executé lors de l'event
//                 celle-ci contient le code a executé
// Note : on vera en detail les fonctions par la suite ;)
btn.addEventListener('click', () => {

    // Code executer lors du click
    console.log('Click !!!');
})


// ### Interagir avec la balise "input"

const baliseInput = document.getElementById('demo01-input');
console.log(baliseInput);

const baliseMsg = document.getElementById('demo01-msg');
console.log(baliseMsg);

// On va interagir avec elle lors d'evenement.
btn.addEventListener('click', () => {

    // Récuperation de la valeur contenu dans la balise "input"
    const valeur = baliseInput.value;
    console.log(valeur);

    // Modifier le contenu de la balise "p" pour afficher la valeur
    baliseMsg.innerText = 'Le nom encodé est ' + valeur;

    // Modifier le contenu de la balise "input"
    baliseInput.value = '';
});