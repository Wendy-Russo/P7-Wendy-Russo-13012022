function recipeFactory(data) {
    function getUserCardDOM() {
        const {name,time,ingredients,description} = data;

        let ingredientTxt = "";

        ingredients.forEach((element) => {

            ingredientTxt += `<p class="fs-6 m-0 lh-1 text-truncate"><b>${element.ingredient}</b>`;
            if(element.quantity){
                ingredientTxt += ` ${element.quantity}`;
            }
            if(element.unit){
                ingredientTxt += ` ${element.unit}`;
            }
            ingredientTxt += `</p>`;

        });
        let article = `
        <figure class="recipe-card col-lg-4">
            <div class="h-50 bg-secondary bg-opacity-50 rounded-top ">
            </div>
            <figcaption class="h-50  bg-grey px-3 rounded-3">
                <div class="h-25 row align-items-center pt-1 pb-2">
                    <p  class="col-8 fs-5 m-0 text-truncate">${name}</p>
                    <svg class="col-1 p-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
                    </svg>
                    <p  class="col-3 m-0 fs-5 fw-bold p-1 text-nowrap">${time} min</p>
                </div>
                <div class="row h-75 rounded-bottom px-2 pb-3">
                    <div class="col-6 h-100 p-0 pe-2 d-flex flex-column justify-content-between">
                        ${ingredientTxt}
                    </div>
                    <div class="col-6 h-100 p-0 ps-2 overflow-auto">
                        <p class=" h-100 lh-1 tex">${description}</p>
                    </div>
                </div>
            </figcaption>
        </figure>`;
        let dom = new DOMParser().parseFromString(article,"text/html");
        return(dom.body.firstChild);
    }
    return {getUserCardDOM }
}