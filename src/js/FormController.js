export class FormController {
/*
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.addEventListeners();
    }

    addEventListeners() {
        //valido todos los input del formulario cuando se pierde el foco
        this.element.querySelectorAll('input').forEach(input => {

            input.addEventListener('blur', event => {
                if (input.checkValidity() ==false) {
                 input.classList.add('error');
                } else {
                 input.classList.remove('error');
                }
                this.checkFormValidity();
            });
        });     
    }

    checkFormValidity() {
        //Comprobar si todos los inputs son válidos
        const formElements = this.element.querySelectorAll('input');
        for (let formElement of formElements){
            if (formElement.checkValidity() ==false){
                //Si alguno de los campos no es válido
                this.element.querySelector("button").disabled = true;
                return false;
            }
        }
        this.element.querySelector("button").disabled = false;
    }

}
*/

        constructor(selector, commentsService, pubSub) {
        this.element = document.querySelector(selector);
        this.commentsService = commentsService;
        this.pubSub = pubSub;
        this.loading = false;
        this.addEventListeners();
    }

    setLoading(loading) {
        this.loading = loading;
        this.element.querySelectorAll('input, button').forEach(item => { item.disabled = loading });
    }

    addEventListeners() {
        this.addInputListeners();
        this.addFormSubmitListener();
    }

    addFormSubmitListener() {
        this.element.addEventListener('submit', event => {
            event.preventDefault();
            if (this.loading) {
                return;  // si se está cargando, no hacemos nada más
            }
            this.setLoading(true);
            let comment = this.buildCommentData();
            this.commentsService.save(comment).then(createdComment => {
                console.log("COMMENT CREATED", createdComment);
                this.element.reset();
                this.pubSub.publish('comment:created', createdComment);
            }).catch(error => {
                console.error("ERROR");
                alert(`Error ${error}`);
            }).finally(() => {
                this.setLoading(false);
            })
        });
    }

    buildCommentData() {
        return {
            name: this.element.querySelector('#inputNombre').value,
            email: this.element.querySelector('#inputEmail').value,
            text: this.element.querySelector('#inputComentarios').value
        }
    }

    addInputListeners() {
        // en todos los input que hay en el formulario, los valido cuando se pierde el foco
        this.element.querySelectorAll('input').forEach(input => {

            input.addEventListener('blur', event => {
                // event.target sería lo mismo que input en este caso
                if (input.checkValidity() == false) {
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
                this.checkFormValidity();
            });

        });
    }

    checkFormValidity() {
        let button = this.element.querySelector('button');
        if (this.element.checkValidity()) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

}
