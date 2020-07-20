document.querySelector('.btn').addEventListener('click', (e) => {
    var firstName = document.querySelector('.first').value;
    var lastName = document.querySelector('.last').value;
    var dateName = document.querySelector('.daten').value;
    var phoneNumber = document.querySelector('.phone').value;
    var mail = document.querySelector('.email').value;
    var userpass = document.querySelector('.user-password').value;
    var comPass = document.querySelector('.comfirm-password').value;



    var atp = mail.indexOf('@');
    var dot = mail.lastIndexOf('.');

    if(firstName.search(/[0-9]/) !== -1 || firstName === ""){
        alert('Numbers not allowed..');
        document.querySelector('.first').style.borderColor = "red";
    } else {
        document.querySelector('.first').innerHTML = "";
    }

    if(lastName.search(/[0-9]/) !== -1 || lastName === ""){
        document.querySelector('.last').style.borderColor = "red";
    } else {
        document.querySelector('.last').innerHTML = "";
    }

    if(dateName === ""){
        document.querySelector('.daten').style.borderColor = "red";
    } else {
        document.querySelector('.daten').innerHTML = "";
    }
    if(isNaN(phoneNumber) || phoneNumber === "" || phoneNumber.length !== 11 || phoneNumber.search(/[0\8\0]/) === -1){
        document.querySelector('.phone').style.borderColor = "red";
        alert('Phone number invalid..')
    } else {
        document.querySelector('.phone').innerHTML = "";
    }

    if(mail === ""){
        document.querySelector('.email').style.borderColor = "red";
        alert('Please enter your email')
    } else if (atp < 1 || dot < atp +2 || dot +2 >= mail.length){
        alert('Please Enter A Valid Mail Address');
        document.querySelector('.email').style.borderColor = "red";
    } else {
        document.querySelector('.email').innerHTML = "";
    }

    if(userpass === "" || userpass.search(/[A-Z]/) === -1){
        alert('Password most contain a cap leter..');
        document.querySelector('.user-password').style.borderColor = "red";
    } else {
        document.querySelector('.user-password').innerHTML = "";
    }

    if(comPass !== userpass){
        alert('Password not match ...');
        document.querySelector('.comfirm-password').style.borderColor = "red";
    } else {
        document.querySelector('.comfirm-password').innerHTML = "";
    }

    e.preventDefault();
})