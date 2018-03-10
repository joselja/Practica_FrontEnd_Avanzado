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
            let date1 = moment(document.getElementsByClassName("date1")[0].innerHTML, "DD-MM-YYYY HH-mm-ss");          
            let date_actual = moment();         
            let diff_days = date_actual.diff(date1, "days");
            let diff_horas = date_actual.diff(date1, "hours");
            let diff_min = date_actual.diff(date1, "minutes");
            let diff_sec = date_actual.diff(date1, "seconds");          
            let day_of_week= date1.format("dddd");

            if (diff_days >= 7){
                document.querySelector(".date1").innerHTML = `<p>${date1.creationData().input}</p>`;
            }
            else {
                document.querySelector(".date1").innerHTML = `<p>${day_of_week}</p>`;
            }
            if (diff_horas < 24) {
                document.querySelector(".date1").innerHTML = `<p>${diff_horas} hours ago</p>`;
            }          
            if (diff_horas == 0){
                document.querySelector(".date1").innerHTML = `<p>${diff_min} minutes ago</p>`;
            }
            if (diff_min == 0){
                document.querySelector(".date1").innerHTML = `<p>${diff_sec} seconds ago</p>`;
            }
        
    }).catch((error) => {
        console.error("PROBLEM CALCULATING DATES", error);

    });

}
        

    
    loadCommentsArticle() {
        this.commentsService.list().then(comments => {
            if (comments.length == 0) {
                document.querySelector(".card-number-comments1").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments2").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments3").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments4").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments5").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments6").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments7").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments8").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments9").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments10").innerHTML = `<a href="notice.html#comments" class="card-link">0 Comments</a>`; //set number of comments in static list articles

            } else {
                let i = comments.length; //number of comments
                document.querySelector(".card-number-comments1").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments2").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments3").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments4").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments5").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments6").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments7").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments8").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments9").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
                document.querySelector(".card-number-comments10").innerHTML = `<a href="notice.html#comments" class="card-link">${i} Comments</a>`; //set number of comments in static list articles
            }
        }).catch((error) => {
            console.error("ERROR RETRIEVING COMMENTS", error);
            document.querySelector(".card-number-comments1").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles
            document.querySelector(".card-number-comments2").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles
            document.querySelector(".card-number-comments3").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles
            document.querySelector(".card-number-comments4").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles
            document.querySelector(".card-number-comments5").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles
            document.querySelector(".card-number-comments6").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles
            document.querySelector(".card-number-comments7").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles
            document.querySelector(".card-number-comments8").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles
            document.querySelector(".card-number-comments9").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles
            document.querySelector(".card-number-comments10").innerHTML = `<a href="notice.html#comments" class="card-link">Error retrieving Comments</a>`; //set number of comments in static list articles

        });

    }


}