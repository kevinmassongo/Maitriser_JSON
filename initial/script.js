// Code javascript
import { data } from "./data.js"
import { generateProductHTML } from "./function.js";
//Affichage de la liste des produits

const productContainer = document.querySelector('.produits')

//Rechercher un produit
const input = document.querySelector('.recherche')


input.addEventListener('keyup', (e)=>{
    console.log(e.target.value);
    const filtre = data.filter((p) => p.nom.toLocaleLowerCase().includes(e.target.value))
    productContainer.innerHTML = ''
    affichageProduit(filtre)
})
//Une boucle entre le différent élement

const affichageProduit = (produits)=>{

    produits.forEach((produit =>{
        const produitHTML = document.createElement('div');
        produitHTML.classList.add('carte-produit');
        produitHTML.textContent = 'Voici un exemple';
        productContainer.appendChild(produitHTML);
    
        produitHTML.innerHTML = generateProductHTML(produit)
    
        productContainer.appendChild(produitHTML)
    }))
}

affichageProduit(data)