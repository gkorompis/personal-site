let songLists = [
    {id:0, title: "angels like you", artist: "miley cyrus", artwork: "./randoms/artcover/0.png"},
    {id:1, title: "double take", artist: "dhruv", artwork: "./randoms/artcover/1.png"},
    {id:2, title: "highschool in jakarta", artist: "niki", artwork: "./randoms/artcover/2.png"},
    {id:3, title: "this love (taylor's version)", artist: "taylor swift", artwork: "./randoms/artcover/3.png"},
    {id:4, title: "congrats", artist: "LANY", artwork: "./randoms/artcover/4.png"},
    {id:5, title: "carolina", artist: "taylor swift", artwork: "./randoms/artcover/5.png"},
    {id:6, title: "horser", artist: "maggie rogers", artwork: "./randoms/artcover/6.png"},
    {id:7, title: "head on fire", artist: "Griff, Sigrid", artwork: "./randoms/artcover/7.png"},
    {id:8, title: "will you love me tomorrow", artist: "carole king", artwork: "./randoms/artcover/8.png"},
    {id:9, title: "slide away", artist: "miley cyrus", artwork: "./randoms/artcover/9.png"},
]

let shuffle = () =>{
    console.log('test');
    let divs = document.getElementsByClassName("song");
    for (let div of divs) {
        console.log(div.children[0].getAttribute('src'))
        let randomInt = Math.floor(Math.random()*10);
        let song = songLists[randomInt]
        div.classList.toggle('opacity-off')
        setTimeout(()=>{
            div.children[0].setAttribute('src', song.artwork);
            div.children[1].children[0].innerHTML = `title: ${song.title}`;
            div.children[1].children[1].innerHTML = `artist: ${song.artist}`;
            div.children[1].children[2].innerHTML = `song id: ${song.id}`;
            div.classList.toggle('opacity-off');
        }, 1300);
    }
};
shuffle()
