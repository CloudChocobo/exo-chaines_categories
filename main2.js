const {Chaine} = require ('./exoChaine/chaine.class.js');
const {Category} = require ('./exoChaine/category.class.js');

const clip = new Category('Clip');
const film = new Category('Film');
const journal = new Category('Journal');
const documentaire = new Category('Documentaire');
const jeunesse = new Category('Jeunesse');

let m6 = new Chaine('M6', 6, [clip]);
let fr2 = new Chaine('France2', 2 , [film]);
fr2.addCategory(journal);
let fr3 = new Chaine('France3', 3 , [documentaire,film]);
fr3.addCategory(journal);
let fr4 = new Chaine('France4', 4, [documentaire, jeunesse]);
fr4.addCategory(journal);
fr4.addCategory(film);

console.log(m6)
console.log(fr2)
console.log(fr3)
console.log(fr4)
