const  generateMeneBtn = document.querySelector(".meme-generator .generate-meme-btn")
// const  memeAuthor = document.querySelector(".meme-generator .meme-author")





const generateMeme = () =>{
    fetch("https://meme-api.com/gimme").then((response) => response.json()).then((data) =>{
    
        document.querySelector(".meme-generator .meme-author").innerHTML = "MeMe:" +  data.author
        document.querySelector(".meme-generator .meme-title").innerHTML = data.title
        document.querySelector(".meme-generator img").setAttribute("src", data.url);

    }).catch( () =>{
        memeTitle.innerHTML = "ERROR 404"
    })
};

generateMeneBtn.addEventListener("click", generateMeme)