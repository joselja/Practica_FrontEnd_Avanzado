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
                        <li class="list-group-item"><div><h5>${comment.name}</h5><h5>${comment.email}</h5></div>
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

}