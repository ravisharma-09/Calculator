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

function parseInput(input){
    return input
        .replace(/what is/g, "")
        .replace(/calculate/g, "")
        .replace(/how much is/g, "")
        .replace(/please/g, "")

        .replace(/plus/g, "+")
        .replace(/minus/g, "-")

        .replace(/multiply/g, "*")
        .replace(/times/g, "*")

        .replace(/divided by/g, "/")
        .replace(/divide by/g, "/")
        .replace(/divide/g, "/")

        .replace(/percent of/g, "*0.01*")

        .replace(/square root of/g, "sqrt")

        .trim();

}

async function solveAi() {

    const input = document.getElementById("ai-input").value ;
    const expression = parseInput(input) ;

    try{
        const response = await fetch(
            `https://api.mathjs.org/v4/?expr=${encodeURIComponent(expression)}`
        ) ;
        const data = await response.text() ;
        result.value = data ;
    }
    catch(error){
        result.value = "ERROR" ;
    }
}

