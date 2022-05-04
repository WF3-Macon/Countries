const search = document.querySelector('#search');
search.addEventListener('input', () => {
  const capital = search.value;
  console.log(capital);

  if (capital !== '') {
    fetch(`https://restcountries.com/v3.1/capital/${capital}`)
      .then(response => response.json())
      .then(datas => {
        console.log(datas);

        if (!datas.status) {
          let table = document.querySelector('table');
          table.remove();

          // Récupération du "body"
          const body = document.querySelector('body');

          // Création d'un tableau HTML
          table = document.createElement('table');
          table.classList.add('table');

          datas.forEach(data => {
            // Créer une ligne de tableau (<tr>)
            const ligne = document.createElement('tr');

            // Créer une colonne de tableau (<td>)
            const drapeau = document.createElement('td');

            // Créer une image (<img src="" alt="">)
            const img = document.createElement('img');
            img.classList.add('w-50');
            img.src = data.flags.svg;
            img.alt = "Drapeau du pays";

            // Ajoute l'image dans la colonne "drapeau"
            drapeau.append(img);

            // Créer une colonne de tableau (<td>)
            const capital = document.createElement('td');
            capital.innerText = data.capital;

            // Créer une colonne de tableau (<td>)
            const population = document.createElement('td');
            population.innerText = data.population;

            // Ajoute les colonnes à la ligne
            ligne.appendChild(drapeau);
            ligne.appendChild(capital);
            ligne.appendChild(population);

            // Ajoute la ligne au tableau
            table.appendChild(ligne);
          });

          // Ajoute le tableau au body
          body.appendChild(table);
        }
      })
      .catch(error => alert(error));
  }
});
