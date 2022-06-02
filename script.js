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

// - Le contenu html de la balise
balise1.innerHTML = 'Modification via le JS';

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
btn.addEventListener('click', function() {

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

/**************************************************************************/

// Les variables
// *************

/* Elle se compose :
    - Nom
    - Type
    - Contenu (Chiffre, du texte, booléen...)
    - Adresse mémoire [Géré par le systeme]
*/

/* Le JS est un langage a type dynamique
   Le systeme va définir le typage adapté pour le contenu

   => Bonne pratique : Evité de changer le typage d'un variable
*/

/* Nature de variable possible
    - let   : Variable locale
    - const : Constante locale
    - var   : Variable globale    /!\ A evité :o
*/

/* Valeur prédéfini
    - undefined : Valeur non défini (Pas initialisé)
    - null      : Value initialisé (objet) mais sans valeur
*/

/* Conventions de nommage
    - Les bonnes pratiques pour nommé vos variables 
    - Format « camelCase »
    - Les caracteres autorisé : a-z 0-9 _ $
    - Le premier caractere ne peut pas etre un chiffre
    - Des mots clefs sont réservé pour le systeme (if, switch, class, ...)
*/




// Les comparaisons
// ****************

// - Double egale : Verification du contenu (sans typage)  
  0 == "0"  // true
  0 == []   // true
"0" == []   // false    => Pourquoi :o

// Le systeme utilise des conversions pour résoudre l'egalité
//  => Mauvaise idée

// - Triple egale : Verification du typage et ensuite du contenu
  0 === "0"  // false
  0 === []   // false
"0" === []   // false


/**************************************************************************/

// Les chaine de caracteres (String)
// *********************************

// => Une variable qui permet de stocker un ensemble de caractere

// Déclaration
// - Une chaine de caractere sont toujours entre simple ou double quote
const msgInfo = 'Ceci est une chaine de caractere'
console.log(msgInfo);

// - Le backslash est un caractere d'echapement
const animal = 'C\'est "l\'oiseau" qui a volé le formage !';
const backshash = 'Le symbole backslash est \\';
console.log(animal);
console.log(backshash);

// - Fusionner des chaines de caraceteres 
const firstname = 'Zaza';
const lastname = 'Vanderquack';
const age = 13;

// L'operateur « + » permet de concaténé des chaine de caractere.
const phrase1 = 'Je suis ' + firstname + ' ' + lastname + ' et j\'ai ' + age + ' ans.';

// La méthode « concat »
const phrase2 = 'Je suis'.concat(firstname).concat(' ').concat(lastname)
                         .concat(' et j\'ai ').concat(age).concat(' ans.');

const phase3 = ''.concat('Je suis', firstname, ' ', lastname, ' et j\'ai ', age, ' ans.');

// Le Template String (Back-tick)
const phase4 = `Je suis ${firstname} ${lastname} et j'ai ${age} ans.`;
// Note : Les `` doivent être utiliser s'il y a de la concaténation !
