import css from './scss/style.scss';
import 'bootstrap';
import './scss/app.scss';
import { CommentsService } from './js/CommentsService';
import { AppController } from './js/AppController';
import { FormController } from './js/FormController';
import { CommentsListController } from './js/CommentsListController';
import { PubSub } from 'pubsub-js';


document.addEventListener("DOMContentLoaded", () => {

    //let appController = new AppController("body", PubSub);
    

    let commentsService = new CommentsService('http://localhost:3001/comments/');

    let commentsListController = new CommentsListController(".comments", commentsService, PubSub);
    commentsListController.loadComments();

    
    //let formController = new FormController('.comments-form');
    let formController = new FormController('.comments-form', commentsService, PubSub);

});


/*
document.addEventListener("DOMContentLoaded", () => {
    let commentsService = new CommentsService();

    document.querySelector(".comments").innerHTML = `<li class="list-group-item"><div>Loading comments...</div></li>`;

    commentsService.list().then((repsonse) => {
        if (response.ok) {
        response.json().then(data => {
            let html = "";
            if (data.length == 0) {
                html = `<li class="list-group-item"><div>No comments</div></li>`;
                } else {       
                    for (let comment of data){
                        html += `
                        <li class="list-group-item"><div><h5>${comment.name}</h5><h5>${comment.email}</h5></div>
                                                    <div>${comment.text}</div>
                        </li>`;
                    }
                }
                document.querySelector(".comments").innerHTML = html;
            });
        } else {
            console.log("ERROR EN LA PETICION", response);
            document.querySelector(".comments").innerHTML = `<li class="list-group-item"><div>Error loading comments</div></li>`;
        }
    }).catch((error) => {
        console.log("ERROR RETRIEVING COMMENTS", error);
        document.querySelector(".comments").innerHTML = `<li class="list-group-item"><div>Error loading comments</div></li>`;
    });
});   
*/