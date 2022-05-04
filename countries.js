/**
 * RESTCountries
 */

/**
 * Création du tableau
 */
const createTable = (datas) => {
    // Récupération du "body"
    const body = document.querySelector('body');

    // Création d'un tableau HTML
    const table = document.createElement('table');
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

/**
 * Affiche tous les pays
 */
let allCountries = () => {
    // Démarrage un texte de chargement
    const load = document.querySelector('#load');
    load.classList.remove('d-none');

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(datas => {
            // Efface le texte de chargement
            load.classList.add('d-none');

            // console.log(datas);
            // Appelle la fonction permettant de créer le tableau HTML
            createTable(datas);
        })
        .catch(error => alert(error));
}

// Fonction affichant tous les pays
allCountries();


// Sélection du champ de recherche
const input = document.querySelector('#search');

// Ecouteur d'évènement sur le champ écoutant les changements
input.addEventListener('input', () => {
    // console.log(input.value);
    const search = input.value;

    // API recherchant via capitale
    fetch(`https://restcountries.com/v3.1/capital/${search}`)
        .then(response => response.json())
        .then(datas => {
            // Supprime le tableau HTML existant
            const table = document.querySelector('table');
            
            // Si la table HTML existe, on la supprime
            if (table) { 
                table.remove();
            }

            // console.log(datas);
            if (datas.message === "Page Not Found") {
                allCountries();
            }
            else if (datas.status === 404) {
                // Aucun pays trouvé
            }
            else {
                // Pays trouvé
                // Recréer un nouveau tableau HTML avec les nouveaux
                // résultats
                createTable(datas);
            }
        })
        .catch(error => alert(error));
});
