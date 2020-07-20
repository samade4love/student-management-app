document.querySelector('.btn').addEventListener('click', (e) => {
    
    var users = document.querySelector('.user-name').value;
    var pass = document.querySelector('.pass-word').value;
    var erro = document.querySelector('.error');


    if(users !== ""){
        erro.style.backgroundColor = "green";
        erro.innerHTML = `
        <td>Welcome ${users} press <a href="reg.html" class="delete">OK</a> to continue</td>
        `
    } else {
        erro.style.backgroundColor = "red";
        erro.innerHTML = "Please Enter username....";
    }

    if(pass !== ""){

    } else {
        erro.style.backgroundColor = "red";
        erro.innerHTML = "Please Enter password....";
    }

    e.preventDefault();
});
