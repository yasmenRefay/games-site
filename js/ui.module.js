export class Ui {
    constructor(){}
    // display data at home page
    displayGames(data){
        let cartona = ``;
        for(let i=0 ; i<data.length; i++){
            cartona += `
            <div class="col">
                <div data-id= "${data[i].id}" class=" h-100 card  bg-transparent" role="button" > 
                    <div class="card-body" ">
                        <figure class="position-relative">
                            <img src="${data[i].thumbnail}" class="card-img-top object-fit-cover h-100"/>
                        </figure>
                        <figcaption>
                            <div class="d-flex justify-content-between p-3">
                                <h3 class="h6 small"> ${data[i].title}</h3>
                                <span class="badge text-bg-primary ">free</span>
                            </div>
                            <p class="card-text small text-center opacity-50 ">
                                ${data[i].short_description.split(" ", 8)}
                            </p>
                        </figcaption>
                    </div>
                    <footer class="card-footer small hstack justify-content-between ">
                        <span class="badge badge-color">${data[i].genre}</span>
                        <span class="badge badge-color">${data[i].platform}</span>
                    </footer>
                </div>
            </div>`
        }
    document.getElementById('gameData').innerHTML= cartona ;
    }
    // display game details at details page 
    displayDetails(data){
        const box = `
            <div class="col-md-4">
                <img src="${data.thumbnail}"  alt="img" class="w-100" id="imgDetails"/>
            </div>
            <div class="col-md-8">
                <h3>Title: Genshin Impact</h3>
                <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
                <p>platform: <span class="badge text-bg-info">${data.platform}</p>
                <p>status: <span class="badge text-bg-info">${data.status}</p>
                <p class="small" id="textDetails">${data.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}"  id="btnShow">Show Game</a>
            </div>`
        document.getElementById('detailsContent').innerHTML= box;
    }
}