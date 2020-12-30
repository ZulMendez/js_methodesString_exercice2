// ** En utilisant des prompts et des alerts**

// > 1. Affiche uniquement la premiere lettre du prénom
let prenom = prompt('first letter of your name?');
alert(prenom.charAt(0));
console.log(prenom);

// // > 2. Affiche la dernière lettre du prénom de la personne
prompt('last letter of your name?');
alert(prenom.charAt(prenom.length -1));
console.log(prenom.charAt(4));

// // > 3. Affiche le prénom sans sa première lettre
prompt('your name without the first letter?')
alert(prenom.slice(-4));
console.log(prenom.slice(-4));

// // > 4. Affiche le prénom de la personne mais avec la 2eme lettre en majuscule uniquement (rentre un prénom en minuscule dans le prompt)
let second = prenom.charAt(1);
prompt('second letter in uppercase');
second = prenom.replace(second, second.toUpperCase());
alert(second);
console.log(second);

// > 5. Demande a l'utilisateur d'entrer son prénom puis demande lui quelle lettre il veut mettre en majuscule, affiche lui son prénom avec la lettre désirée en majuscule
let nom = prompt('your name?');
let choice = prompt('choice one letter in uppercase');
alert(nom.replace(choice, choice.toUpperCase()));

// > 6. Quel que soit la façon dont a été entré le prénom, le nom se réaffiche avec la première lettre est en majuscule et le reste en minuscule
let util = prompt('your name capitalize');
let first = util.charAt(0).toUpperCase() + util.substring(1);
console.log(first)


// > 7. Affiche le prénom de la personne mais avec une lettre aléatoire retirée (bonus)
let nbaleat = Math.round(Math.random()*prenom.length);
console.log(nbaleat);
alert(prenom.replace(prenom.chrarAt(nbaleat), ""));




