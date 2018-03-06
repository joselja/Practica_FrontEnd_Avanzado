
export class AppController {

    constructor(selector, pubSub) {
        this.element = document.querySelector(selector);
        pubSub.subscribe('comment:created', (event, comment) => {
            console.log("AppController", comment);
        });
    }
}