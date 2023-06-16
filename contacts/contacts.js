console.log("hallo!");


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
                let d = new Date();
                let currentTime = d.toLocaleTimeString();
                const commentList = document.getElementById('comment-list');
                const newComment = document.createElement('div');
                newComment.className = 'comment';
                newComment.innerHTML = `${currentTime}: ${comment}`;
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
