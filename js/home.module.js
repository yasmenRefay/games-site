import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
    constructor(){
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click',()=> {
                this.activeLink (link);
                const x = link.getAttribute('data-category')
                this.getData(x);
            });
        });
        this.loading= document.querySelector('.loading');
        this.detailss= document.getElementById('details');
        this.main= document.getElementById('games');
        this.ui = new Ui();
        this.getData('MMORPG');
    }
    //change class active 
    async activeLink (link){
        document.querySelector('.nav-item .active').classList.remove('active') ;
        link.classList.add('active');
        
    }
    // get data of home from Api
    async getData(cat){
        this.loading.classList.remove('d-none')
        const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '73cae5643cmsh3cc1e7498fa1cd5p1644d0jsn1933b70fe8ac',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
        }    
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options);
        const response = await api.json();

        this.loading.classList.add('d-none')
        this.ui.displayGames(response); 

        document.querySelectorAll('.card').forEach((card) => {
            card.addEventListener('click',()=> {
                this.detailss.classList.remove("d-none")
                this.main.classList.add("d-none")
                new Details(card.dataset.id)
            });
    })
    }
}
