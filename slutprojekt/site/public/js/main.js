console.log("hej")
var once = true

function home_button(){
    
    if (once == true){
        once = false
    
        home_button = function(){}
        console.log('call once and never again')
    
        let click = document.querySelectorAll(".box")
        click.forEach(element => {
            element.classList.toggle("clicked")
        });

    }
        
}


function frame(event){
    console.log("det funkar")
    let unframed = document.querySelector(".home_finalized")
    unframed.classList.add("framed")
   
}

function shopping_cart(event){
    let click = document.querySelector(".menu")
    click.classList.toggle("clicked")

} 
