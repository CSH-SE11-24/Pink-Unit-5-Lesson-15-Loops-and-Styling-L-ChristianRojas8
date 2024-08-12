console.log("Script running...");
// Task 1: All off button
// Set up the the DOM manipulation flow such that when you press the all off button, the background color of all the lightbulb p tags changes to black
let offButton = document.querySelector("#clear")
let pTags = document.querySelectorAll(".lightbulb")

offButton.addEventListener("click", function(event){
  for(let i = 0; i < pTags.length; i++){
    pTags[i].style.backgroundColor = "black"
  }
})


                           




// Task 2: CSH Mode
// Set up the DOM manipulation flow such that when your mouse is over the CSH mode button, the body's background color changes to green and the lightbulb p tags text change to "💻"
// When your mouse leaves the CSH mode button, the body's background should go back to black and the lightbulb p tags text should go back to "💡"

let cshButton = document.querySelector("#cshMode")

cshButton.addEventListener("mouseover", function(event){
  document.body.style.backgroundColor = "green"
  for(let z = 0; z < pTags.length; z++){
    pTags[x].textContent= "💻"
  }
})

cshButton.addEventListener("mouseout", function(event){
  document.body.style.backgroundColor = "black"
  for(let x = 0; x < pTags.length; x++){
    pTags[x].textContent="💡"
  
    }
})



// Task 3: On and off feature
// Set up the DOM manipulation flow such that when you click any of the lightbulb p tags, the p tag's background color toggles from black to white
// You should use the classList property with the appropriate class from style.css

let paragrpahs = document.querySelectorAll("p")

for(let v = 0; v < paragraphs.length; v++){
  paragrpahs[v].addEventListener("click", function(event){
    paragrpahs[v].style.backgroundColor = "white"
  })
}




