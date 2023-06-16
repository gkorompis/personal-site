console.log("hallo!");


let hideCard = (id) =>{
    let div = document.getElementsByClassName(id);
    div[0].classList.add('hideme');
    console.log('hidden')
}

let changeImage = (id) =>{
    let img = document.getElementById(id);
    let src = img.getAttribute('src').replace(/\.jpg/g, "");
    let index = src[+src.length - 1];
    // let index = id[+id.length - 1];
    let randomInt = Math.floor(Math.random()*10);
    randomInt = randomInt == +index ? randomInt+1 : randomInt;
    let source = `./assets/img${randomInt}.jpg`;
    // switch(id) {
    //     case "img1":
    //         source = "./assets/img8.jpg";
    //         alt = "img8";
    //         newId = "img8";
    //         break
    //     case "img2":
    //         source = "./assets/img7.jpg";
    //         alt = "img7";
    //         newId = "img7";
    //         break
    //     case "img3":
    //         source = "./assets/img6.jpg";
    //         alt = "img6";
    //         newId = "img6";
    //         break
    //     case "img4":
    //         source = "./assets/img5.jpg";
    //         alt = "img5";
    //         newId = "img5";
    //         break
    //     case "img5":
    //         source = "./assets/img4.jpg";
    //         alt = "img4";
    //         newId = "img4";
    //         break
    //     case "img6":
    //         source = "./assets/img3.jpg";
    //         alt = "img3";
    //         newId = "img3";
    //         break
    //     case "img7":
    //         source = "./assets/img2.jpg";
    //         alt = "img2";
    //         newId = "img2";
    //         break
    //     case "img8":
    //         source = "./assets/img1.jpg";
    //         alt = "img1";
    //         newId = "img1";
    // }
    img.classList.add('fade-in')
    img.setAttribute('src', source)
    // img.setAttribute('alt', alt)
    // img.setAttribute('id', newId)
    img.classList.remove('fade-in')
    console.log('hidden')
}

// let postComment = (input) =>{
//     let comment = input || "no comment!";
//     console.log(comment);
//     input ? alert(`"${comment}" is posted!`) : alert("no comment!");
//     // if(input){
//     //     newBox = document.createElement('div');
//     //     document.getElementById('list-comment-box').append('n')
//     // }
//     return comment;
// }

let postComment =(event)=> {
            event.preventDefault();
            const commentInput = document.getElementById('comment-input');
            const comment = commentInput.value;
            console.log(comment)
            if (comment) {
                console.log('comment')
                const commentList = document.getElementById('comment-list');
                const newComment = document.createElement('div');
                newComment.className = 'comment';
                newComment.innerHTML = comment;
                commentList.prepend(newComment);
                commentInput.value = '';
            }
            comment ? alert(`"${comment}" is posted!`) : alert("no comment!");
        }

let cards = document.querySelector('.card-list').childNodes;
cards.forEach(card =>{
    card.addEventListener('click', (event)=>{
        console.log('clicked', event.target.getAttribute("id"));
        // hideCard(event.target.getAttribute("id"));
        changeImage(event.target.getAttribute("alt"))
    })
})
