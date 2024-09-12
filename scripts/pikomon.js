import { database } from "./database.js";


export const displayPikomon = () => {
let pikomonHTML = database.map(item => `
    
        <div id="piko-card${item.id}" class="piko-card">
            <img src="${item.imageUrl}" class="piko-img">
            <div id="piko-name${item.id}" class="piko-name">${item.name}</div>
            <div id="piko-category${item.id}" class="piko-category">Category: ${item.category}</div>
            <div id="piko-abilities${item.id}" class="piko-abilities">Abilities: ${item.abilities}</div>
            <div id="piko-weakness${item.id}" class="piko-weakness">Weakness: ${item.weakness}</div>
        </div>

    `).join(" ")
    return pikomonHTML
}