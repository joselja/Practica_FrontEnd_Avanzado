import moment from 'moment';
export class CommentsListController {

    constructor(selector, commentsService, pubSub) {
        this.element = document.querySelector(selector);
        this.commentsService = commentsService;
        
        pubSub.subscribe('comment:created', (event, comment) => {
            console.log("CommentsListController", comment);
            this.loadComments();
        });
    }

    showLoadingMessage() {
        this.element.innerHTML = `<li class="list-group-item"><div>Loading comments...</div></li>`;
    }

    showErrorMessage() {
        this.element.innerHTML = `<li class="list-group-item"><div>Error Loading comments...</div></li>`;
    }

    showNoCommentsMessage() {
        this.element.innerHTML = `<li class="list-group-item"><div>No comments...</div></li>`;
    }

    renderComments(comments) {
        let html = '';
        for (let comment of comments) {
                html += `
                            <li class="list-group-item bg-light"><div><h5>${comment.name}</h5><h5>${comment.email}</h5></div>
                                                        <div>${comment.text}</div>
                            </li>`;
                
            }
        this.element.innerHTML = html;
    }

    loadComments() {
        this.showLoadingMessage();
        this.commentsService.list().then(comments => {
            if (comments.length == 0) {
                this.showNoCommentsMessage();
            } else {
                this.renderComments(comments);
            }
        }).catch((error) => {
            console.error("ERROR RETRIEVING COMMENTS", error);
            this.showErrorMessage();
        });

    }
    setDateArticle(){
            moment.locale('es');
            let myCollection = document.getElementsByClassName("date");
            
            let date1 = moment(myCollection.innerHTML, "DD-MM-YYYY HH-mm-ss");          
            let date_actual = moment();         
            let diff_days = date_actual.diff(date1, "days");
            let diff_horas = date_actual.diff(date1, "hours");
            let diff_min = date_actual.diff(date1, "minutes");
            let diff_sec = date_actual.diff(date1, "seconds");          
            let day_of_week= date1.format("dddd");
            if (diff_days >= 7){
                myCollection.innerHTML = `<p>Published at ${date1.creationData().input}</p>`;
            }
            else {
                myCollection.innerHTML = `<p>Published on ${day_of_week}</p>`;
            }
            if (diff_horas < 24) {
                myCollection.innerHTML = `<p>Published ${diff_horas} hours ago</p>`;
            }          
            if (diff_horas == 0){
                myCollection.innerHTML = `<p>Published ${diff_min} minutes ago</p>`;
            }
            if (diff_min == 0){
                myCollection.innerHTML = `<p>Published ${diff_sec} seconds ago</p>`;
            }



    }
    
    
}