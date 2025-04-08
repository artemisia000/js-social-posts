
//generare const per dati 
//nome autore, foto profilo, data, testo del post, immagine, numero di likes.


const posts = [
    {
        name: 'Phil Mangione',
        picture: 'https://images.unsplash.com/photo-1641894252843-9794796577be?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
        date: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.         Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://unsplash.it/600/300?image=171',
        likesNum: '1000',
    },
    {
        name: 'Dario Rock',
        picture: 'https://images.unsplash.com/photo-1594616838951-c155f8d978a0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.         Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://fastly.picsum.photos/id/31/3264/4912.jpg?hmac=lfmmWE3h_aXmRwDDZ7pZb6p0Foq6u86k_PpaFMnq0r8',
        likesNum: 43,
    },
    {
        name: 'Mary Bloody',
        picture: 'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU',
        likesNum: 62,
    },
    {
        name: 'Alessio Breda',
        picture: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q',
        likesNum: 70,
    },
    {
        name: 'Ellis La Zanchi',
        picture: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://picsum.photos/id/611/1920/1280',
        likesNum: 28,
    },
    {
        name: 'Dolores Ave',
        picture: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8',
        likesNum: 2,
    },

];

console.table(posts);

//creare contenitori per dati posts
const name = document.querySelector('.post-meta_author');
const picture = document.querySelector('.profile-pic');
const date = document.querySelector('.post-meta_time');
const text = document.querySelector('post_text');
const image = document.querySelector('.post-image');
//const likesNum = document.querySelector('.js-likes-counter');

//referenza container
const container = document.getElementById('container');

//invocazione
genPosts(posts,container);


const btnLikes = document.querySelectorAll(".like-button");
console.log(btnLikes);

//ottieni tutti i like
for(let i = 0; i < btnLikes.length; i++) {
    const btn = btnLikes[i];
    //aggiungi click ad ogni bottone
    btn.addEventListener("click" , (event) => {  //<-- parametro gia passato da eventLIstener(vedere su log)
        //rimuovere comportamento default click
        event.preventDefault(); // <--toglie il suo comportamento di default
        
        //aggiungere classe clicked
        //btn.classList.add("like-button--liked");

        //ottenere il padre
        //console.log("Parent:" , btn.closest(".likes"));   <-- cerco da btn il primo padre con classe  .likes
        const likeParent =  btn.closest(".likes");

        //qui facciamo cercare il nodo all interno di likeParent
        const likeCounter = likeParent.querySelector(".js-likes-counter");

        //ottieni valore like attuale
        let actualLikes = parseInt(likeCounter.innerText);
        
        //incrementa tot like
        // likeCounter.innerText = ++actualLikes;

        if(!btn.classList.contains("like-button--liked")) {
            btn.classList.add("like-button--liked");
            likeCounter.innerText = ++actualLikes;
        } else {
            btn.classList.remove("like-button--liked");
            likeCounter.innerText = --actualLikes;
        }
      
    });

}




function genPosts(posts,container){
    
    for(let i = 0; i < posts.length; i++ ) {

        const postsItem = posts[i];
        console.log(postsItem);

        //descruturing -->inseriamo cosi solo la proprietà nell interpolazione
        const {name,picture,date,text,image,likesNum} = postsItem;

        container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${picture}" alt="${name} ">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name} </div>
                        <div class="post-meta__time">${date} </div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text} </div>
            <div class="post__image">
                <img src="${image} " alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likesNum} </b> persone
                    </div>
                </div> 
            </div>            
        </div>

        `
    }

};
