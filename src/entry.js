import css from './scss/style.scss';
import 'bootstrap';
import './scss/app.scss';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".comments").innerHTML = `<li class="list-group-item"><div>Loading comments...</div></li>`;

    fetch('http://localhost:3001/comments/').then((response) => {
        if (response.ok) {
        response.json().then(data => {
            let html = "";
            if (data.length == 0) {
                html = `<li class="list-group-item"><div>No comments</div></li>`;
                } else {       
                    for (let comment of data){
                        html += `
                        <li class="list-group-item"><div><h5>${comment.name}</h5><h5>${comment.email}</h5></div>
                                                    <div>${comment.text}</div>
                        </li>`;
                    }
                }
                document.querySelector(".comments").innerHTML = html;
            });
        } else {
            console.log("ERROR EN LA PETICION", response);
            document.querySelector(".comments").innerHTML = `<li class="list-group-item"><div>Error loading comments</div></li>`;
        }
    }).catch((error) => {
        console.log("ERROR RETRIEVING COMMENTS", error);
        document.querySelector(".comments").innerHTML = `<li class="list-group-item"><div>Error loading comments</div></li>`;
    });
});   
