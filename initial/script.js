// Code javascript
import { data } from "./data.js"
import { generateProductHTML } from "./function.js";
//Affichage de la liste des produits
const productContainer = document.querySelector('.produits')

//Rechercher un produit
const input = document.querySelector('.recherche')

//Dialogue
const dialog = document.querySelector('dialog')



input.addEventListener('keyup', (e)=>{
    const filtre = data.filter((p) => p.nom.toLocaleLowerCase().includes(e.target.value))
    productContainer.innerHTML = ''

    //condition pour tester si notre tableau est vide
    if(filtre.length != 0){
        affichageProduit(filtre)
    }else{
        const vide = document.createElement("h3");
        vide.textContent = "Aucun produit n'a été trouvé"
        productContainer.appendChild(vide)
    }
})
//Une boucle entre le différent élement

const affichageProduit = (produits)=>{
    produits.forEach((produit =>{
        const produitHTML = document.createElement('div');
        produitHTML.classList.add('carte-produit');
        produitHTML.setAttribute("data-id", produit.id)
        produitHTML.innerHTML = generateProductHTML(produit);  
        productContainer.appendChild(produitHTML);
    }))
}
affichageProduit(data)

//Action sur les produits

const cartes = document.querySelectorAll('.carte-produit')

cartes.forEach(produit=>{
    produit.addEventListener('click',()=>{
        dialog.showModal()

        console.log(produit.dataset);
        const currentProduct =  data.filter(p=> p.id == produit.dataset.id)[0]
        console.log(currentProduct);
    })
})

//Fermer le dialog