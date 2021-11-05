
//generare const per dati 
//nome autore, foto profilo, data, testo del post, immagine, numero di likes.


const posts = [
    {
        name: 'Dario Rock',
        picture: 'https://picsum.photos/id/1009/5000/7502',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.         Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://picsum.photos/id/1014/6016/4000',
        likesNum: '1000',
    },
    {
        name: 'Mary Bloody',
        picture: 'https://picsum.photos/id/1009/5000/7502',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://picsum.photos/id/1014/6016/4000',
        likesNum: '157',
    },
    {
        name: 'Alessio Breda',
        picture: 'https://picsum.photos/id/1009/5000/7502',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://picsum.photos/id/1014/6016/4000',
        likesNum: '70',
    },
    {
        name: 'Ellis La Zanchi',
        picture: 'https://picsum.photos/id/1009/5000/7502',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://picsum.photos/id/1014/6016/4000',
        likesNum: '28',
    },
    {
        name: 'Dolores Ave',
        picture: 'https://picsum.photos/id/1009/5000/7502',
        date: '07/08/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://picsum.photos/id/1014/6016/4000',
        likesNum: '2',
    },

];

console.table(posts);

//creare contenitore per dati posts

const container = document.getElementById('container');

genera(posts,container);



function genera(posts,container){


    for(let i = 0; i <= posts.length, i++ ) {

        const postsItem = posts[i];
        console.log(postsItem);
    }






container.innerHTML += `
<div class="post">
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">Phil Mangione</div>
            <div class="post-meta__time">4 mesi fa</div>
        </div>                    
    </div>
</div>
<div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
<div class="post__image">
    <img src="https://unsplash.it/600/300?image=171" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
        </div>
    </div> 
</div>            
</div>

`};