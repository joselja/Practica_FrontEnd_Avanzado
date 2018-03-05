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
        //document.querySelector("card-number-comments").innerHTML = `<a href="#" class="card-link">0 Comments</a>`; //0 comments in static list articles
    }

    renderComments(comments) {
        let html = '';
        let i=0;
        for (let comment of comments) {
            html += `
                        <li class="list-group-item bg-light"><div><h5>${comment.name}</h5><h5>${comment.email}</h5></div>
                                                    <div>${comment.text}</div>
                        </li>`;
            i=i+1;
        }
        this.element.innerHTML = html;
        //document.querySelector(".card-number-comments").innerHTML = `<a href="notice.html" class="card-link">${i} Comments</a>`; //number of comments in static list articles
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

}