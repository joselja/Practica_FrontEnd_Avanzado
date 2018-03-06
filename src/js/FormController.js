export class FormController {

    constructor(selector, commentsService, pubSub) {
    let passComment = false;
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
                /*if (this.element.querySelector('#inputComentarios').id == "inputComentarios") {
                    var observaPalabrasUno = this.element.querySelector("#inputComentarios").value.split("\n").join(" ");
                    var observaPalabras = observaPalabrasUno.split(" ");
                    var observaPalabrasClean = observaPalabras.filter(Boolean);
                    var numeroPalabras = observaPalabrasClean.length;  
                    if (numeroPalabras > 120) {
                        passComment = false;
                        input.classList.add('error');
                    } else {
                        passComment = true;
                        input.classList.remove('error');
                    }
                }*/
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
        if ((this.element.checkValidity()) && (passComment == true)) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

}
