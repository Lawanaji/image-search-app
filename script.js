const accessKey = "ZcKg2YfpPEwOfIyCqWZwTsuHmez_YdxrG6IamYw0NaE";

const formEl = document.querySelector('form')
const inputEl = document.getElementById('search')
const searchResults = document.querySelector('.search-results')
const search = document.querySelector('.search-btn')
const showMore = document.querySelector('.show-more-button')
const inputData = "";
const page = 1;
formEl.addEventListener('submit', (e)=>{
    console.log(e)
    e.preventDefault()
const data =inputEl.value;
console.log(data)
})

// async function searchImages(){
//     inputData = inputEl.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id= ${accessKey}`
//     const responce = await fetch(url)
//     const data = await responce.json()
//     const results = data.results


//     if(page === 1){
//         searchResults.innerHTML = "";
//     }
// results.map((result) =>{
//     const imageWrapper = document.createElement('div')
//     imageWrapper.classList.add("search-result")
//     const image = document.createElement('imag')
//     image.src = result.ulrs.small;
//     image.alt = document.alt_decription;
//     const imageLink = document.createElement('a')
//     imageLink.target = "_blank";
//     imageLink.textContent = result.alt_decription;


//     imageWrapper.appendChild(image)
//     image.appendChild(imageLink)
//     searchResults.appendChild(imageWrapper)

// })

// page++
// if(page > 1){
//     showMore.style.display = 'block';
// }


// }

// formEl.addEventListener("submit", (event) =>{
//     event.preventDefault(); 
//     page = 1
//     searchImages()
// })

// showMore.addEventListener("click", () =>{
//     searchImages()
// })
