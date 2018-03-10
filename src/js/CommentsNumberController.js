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
            moment.locale('es');
            
            let date1 = moment(document.getElementsByClassName("date1")[0].innerHTML, "DD-MM-YYYY HH-mm-ss");
                       
            let date_actual = moment().format('DD-MM-YYYY HH-mm-ss');
            
            //document.querySelector(".date1").innerHTML = `<p>${moment().format('L')}</p>`;
            console.log(date1, "fecha 1");
            console.log(date_actual, "fecha actual");
            let diff_days = date1.diff(date_actual, 'days');
            //if (diff_days >= 7){
            //    document.querySelector(".date1").innerHTML = `<p>${date1}</p>`;
            //}
            console.log(date1.diff(date_actual, 'days'), ' dias de diferencia');
        
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