const btnGenerator = document.querySelector(".btn-generator")
const password1 = document.querySelector(".password_el_1")
const password2 = document.querySelector(".password_el_2")
const password3 = document.querySelector(".password_el_3")
const password4 = document.querySelector(".password_el_4")
const passwordCont = document.getElementsByClassName("password__container")
const popUp = document.getElementById("pop-up")
const toggleNums = document.getElementById("toggle1")
const toggleChars = document.getElementById("toggle2")
const inputEl = document.getElementById("input_el")

let allChars 

function toggling() {
  allChars = []
  for(let i=32; i<128; i++) {
    allChars.push(String.fromCharCode(i))
  }

  let arrWithoutNums = allChars.filter(i => isNaN(i))
  let arrWithoutChars = allChars.toString().replace(/[^a-zA-Z0-9 ]/g, '')
  let arrWithoutCharsAndNums = allChars.toString().replace(/[^a-zA-Z ]/g, '')
    
  if(!toggleNums.checked && toggleChars.checked){
    allChars = arrWithoutNums
  }else if(!toggleChars.checked && toggleNums.checked){   
    allChars = Array.from(arrWithoutChars)
  }else if(!toggleNums.checked && !toggleChars.checked) {   
      allChars = Array.from(arrWithoutCharsAndNums)
  }
 
}

function passwordGenerate(){
  toggling() 
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
    if(passwordCont[i].childNodes.length > 0) {
      if(event.target.matches(".password__container")){
        navigator.clipboard.writeText(event.target.textContent)
      }    
      popUp.innerHTML = `${event.target.innerText}  <span style="color:#1F2937;">copied to clipboard</span> `
      popUp.style.opacity = 1
      let timeoutId = setTimeout(() => {
        popUp.style.opacity = 0      
      }, 1000)
    }
    
  })
}

