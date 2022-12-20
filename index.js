const btnGenerator = document.querySelector(".btn-generator")
const password1 = document.querySelector(".password_el_1")
const password2 = document.querySelector(".password_el_2")
const password3 = document.querySelector(".password_el_3")
const password4 = document.querySelector(".password_el_4")
const passwordCont = document.getElementsByClassName("password__container")
const popUp = document.getElementById("pop-up")


const inputEl = document.getElementById("input_el")

let allChars = []
for(let i=32; i<127; i++) {
  allChars.push(String.fromCharCode(i))
}

function passwordGenerate(){
  let generatedPassword = ""
  for(let i=0; i<inputEl.value; i++) {
    generatedPassword += allChars[Math.floor(Math.random() * allChars.length)]
  }
  return generatedPassword

}

function render(){
  password1.textContent=passwordGenerate()
  password2.textContent=passwordGenerate()
  password3.textContent=passwordGenerate()
  password4.textContent=passwordGenerate()
}

btnGenerator.addEventListener("click",render)

for(let i = 0; i<passwordCont.length; i++) {
  passwordCont[i].addEventListener("click", (event) => {
    if(event.target.matches(".password__container")){
      navigator.clipboard.writeText(event.target.textContent)
    }    
    popUp.innerHTML = `${event.target.innerText}  <span style="color:#1F2937;">copied to clipboard</span> `
    popUp.style.opacity = 1
    timeoutId = setTimeout(() => {
      popUp.style.opacity = 0      
    }, 1000)
    
  })
}

