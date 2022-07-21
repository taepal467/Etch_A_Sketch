const container = document.querySelector(".container");
const childNodes = container.childNodes;
const input = document.querySelector("input");
const blackBtn = document.querySelector(".black-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const randomBtn = document.querySelector(".random-btn");
const eraseBtn = document.querySelector(".erase-btn");
const resetBtn = document.querySelector(".reset-btn");

const createDivs = (rows,cols) => {
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;  
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  const area = rows * cols;
  for (let i = 0; i < area; i++) {
    const div = document.createElement('div');
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });

    div.style.backgroundColor = "white";
    container.appendChild(div);
  }
}

const changeSize = (input) => {  
   if (input <= 1 || input > 64) {
    let error = "Enter a value between 2 and 64";
    document.getElementById("error").textContent = error;
  } else if(input >= 2 || input <= 64) {
    document.getElementById("error").textContent = "";
    const container = document.querySelector(".container");
    container.replaceChildren();
    createDivs(input,input);
  } 
}

//Black Button
const black = () => {
childNodes.forEach(child => {
    child.addEventListener("mouseover", () =>{
      child.style.backgroundColor = "black";
    })
  });
} 

//Rainbow Button
const rainbow = () => {
  childNodes.forEach(child => {
    child.addEventListener("mouseover", () =>{
      child.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;  
    })
  });
}

//Random Button
const random = () => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  let colorDisplay = document.querySelector(".color-display");
  colorDisplay.style.backgroundColor = `#${randomColor}`;

  childNodes.forEach(child => {
    child.addEventListener("mouseover", () =>{
      child.style.backgroundColor = `#${randomColor}`;  
    })
  });
}

//Erase Button
const erase = () => {
  childNodes.forEach(child => {
      child.addEventListener("mouseover", () =>{
        child.style.backgroundColor = "white";
      })
    });
  } 

//Reset Button
const reloadPage = () => {
  window.location.reload();
}


createDivs(16,16);

input.addEventListener("change", changeSize);
blackBtn.addEventListener("click", black);
rainbowBtn.addEventListener("click", rainbow);
randomBtn.addEventListener("click", random);
eraseBtn.addEventListener("click", erase);
resetBtn.addEventListener("click", reloadPage);