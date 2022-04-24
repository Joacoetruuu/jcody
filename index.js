var checkbox = document.getElementById("bn"); 
var variablescss = getComputedStyle(document.documentElement);
var variable = String(variablescss.getPropertyValue('--backgroudwhite')).trim();
var variableletras = String(variablescss.getPropertyValue('--tipewhite')).trim();

function scrolltop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

checkbox.addEventListener("change", function() {
    if(this.checked) {
        console.log("Chequeado")
        document.documentElement.style.setProperty('--backgroudwhite', '#111111');
        document.documentElement.style.setProperty("--tipewhite", "#111111")
        document.documentElement.style.setProperty("--contrario", "white")
        console.log(variable)
        scrolltop()

    }
    else{
        document.documentElement.style.setProperty('--backgroudwhite', '#f3f4f5');
        document.documentElement.style.setProperty('--tipewhite', 'white');
        document.documentElement.style.setProperty('--contrario', 'black');
        scrolltop()
    }
})