const fs = require('fs');

// 1. Créer le fichier welcome.txt avec le contenu "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier welcome.txt créé avec succès !');

  // 2. Lire le contenu du fichier et l'afficher dans la console
  // (Si ton exercice exige de lire hello.txt, assure-toi de renommer ou d'adapter selon ton consigne)
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Contenu du fichier :", data);
  });
});