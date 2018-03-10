import moment from 'moment';

export class CommentsNumberController {

    constructor(selector, commentsService, pubSub) {
        this.element = document.querySelector(selector);
        this.commentsService = commentsService;
        
        
        pubSub.subscribe('comment:created', (event, comment) => {
            console.log("CommentsListController", comment);
            this.loadCommentsArticle();
        });
    }

    setDateArticle(){
        this.commentsService.list().then(comments => {
            let i;
            moment.locale('es');
            let myCollection = document.getElementsByClassName("date");
            for (i=0; i < myCollection.length; i++) {          
                let date1 = moment(myCollection[i].innerHTML, "DD-MM-YYYY HH-mm-ss");          
                let date_actual = moment();         
                let diff_days = date_actual.diff(date1, "days");
                let diff_horas = date_actual.diff(date1, "hours");
                let diff_min = date_actual.diff(date1, "minutes");
                let diff_sec = date_actual.diff(date1, "seconds");          
                let day_of_week= date1.format("dddd");

                if (diff_days >= 7){
                    myCollection[i].innerHTML = `<p>Published at ${date1.creationData().input}</p>`;
                }
                else {
                    myCollection[i].innerHTML = `<p>Published on ${day_of_week}</p>`;
                }
                if (diff_horas < 24) {
                    myCollection[i].innerHTML = `<p>Published ${diff_horas} hours ago</p>`;
                }          
                if (diff_horas == 0){
                    myCollection[i].innerHTML = `<p>Published ${diff_min} minutes ago</p>`;
                }
                if (diff_min == 0){
                    myCollection[i].innerHTML = `<p>Published ${diff_sec} seconds ago</p>`;
                }
            }
        
        }).catch((error) => {
            console.error("PROBLEM CALCULATING DATES", error);
    });

}
        

    
    loadCommentsArticle() {
        this.commentsService.list().then(comments => {
            let j;
            let i = comments.length; //number of comments
            let myCollection = document.getElementsByClassName("card-number-comments");
            for (j=0; j < myCollection.length; j++) {        
                if (comments.length == 0) {
                    myCollection[j].innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                } else {
                    myCollection[j].innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                }
            }
        }).catch((error) => {
            console.error("ERROR RETRIEVING COMMENTS", error);
            let j;
            let i = comments.length; //number of comments
            let myCollection = document.getElementsByClassName("card-number-comments");
            for (j=0; j < myCollection.length; j++) {        
                myCollection[j].innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //error loading comments
            }
        });

    }


}