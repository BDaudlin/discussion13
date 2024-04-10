// Part 1
document.addEventListener("DOMContentLoaded", function(){
    var header = document.querySelector('h1');
    header.classList.add('heading');
});


// Part 2
document.addEventListener("dblclick", function(){
    var date = new Date();
    alert(date);
});


// Part 3
var checkbox = document.querySelector("input[name=subscribe]");
checkbox.addEventListener('change', function(){
    var emailbox = document.getElementById("emailBox");
    if(this.checked){
        emailbox.classList.remove("hidden");
    }else{
        emailbox.classList.add("hidden");
    }
});