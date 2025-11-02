const data = [
    {   
    title: "Software Engineer",
    description: "Deskkasdhalkfehajkasç]ojg~isj~grkgrkls"
    },
    {   
    title: "Engenharia de Computação",
    description: "Deskkasdhalkfehajkasç]ojg~isj~grkgrkls"
    },
    {   
    title: "Elétrica",
    description: "Deskkasdhalkfehajkasç]ojg~isj~grkgrkls"
    }
];


const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
        cardContainer.innerHTML += `
        <div class="card">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        </div>
        ` 
    });
}

searchInput.addEventListener("keyup", (e)=> {
    const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})  

window.addEventListener("load",displayData.bind(null,data));