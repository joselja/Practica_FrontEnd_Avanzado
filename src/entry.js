import css from './scss/style.scss';
import 'bootstrap';
import { CommentsService } from './js/CommentsService';
import { AppController } from './js/AppController';
import { FormController } from './js/FormController';
import { CommentsListController } from './js/CommentsListController';
import { CommentsNumberController } from './js/CommentsNumberController';
import { PubSub } from 'pubsub-js';



document.addEventListener("DOMContentLoaded", () => {

    let appController = new AppController("body", PubSub);
    


    let commentsService = new CommentsService('http://localhost:3001/comments/');
    
    let commentsNumberController = new CommentsNumberController(".card-number-comments", commentsService, PubSub);
    commentsNumberController.setDateArticle();
    commentsNumberController.loadCommentsArticle();

    let commentsListControllerDetail = new CommentsListController(".comments", commentsService, PubSub);
    commentsListControllerDetail.setDateArticle();
    commentsListControllerDetail.loadComments();

    
    let formController = new FormController('.comments-form', commentsService, PubSub);

});
