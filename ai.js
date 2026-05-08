const result = document.getElementById("result") ;

const themebtn = document.getElementById("theme");

themebtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themebtn.textContent = "light-mode";
    }
    else{
        themebtn.textContent = "dark-mode";
    }

});