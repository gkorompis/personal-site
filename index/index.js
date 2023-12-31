console.log("hallo!");

let changeImage = (id) =>{
    let img = document.getElementById(id);
    let src = img.getAttribute('src').replace(/\.jpg/g, "");
    let index = src[+src.length - 1];
    // let index = id[+id.length - 1];
    let randomInt = Math.floor(Math.random()*10);
    randomInt = randomInt == +index ? randomInt+1 : randomInt;
    let source = `./assets/img${randomInt}.jpg`;
    img.classList.add('fade-in')
    img.setAttribute('src', source)
    img.classList.remove('fade-in')
    console.log('hidden')
}

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
        changeImage(event.target.getAttribute("alt"))
    })
})
