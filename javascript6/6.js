
const accessKey = "h5G0OHy7prnyqbD9v0QjYxq6vaE3Z1U7oEz5maPkkq8";


const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;


async function searchImages(){
    keyword =  SearchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        SearchResult.innerHTML = "";
    }

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";


            imageLink.appendChild(image);
            SearchResult.appendChild(imageLink);
        
    })
    showMoreBtn.style.display = "block";
    
}


SearchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages()
})
