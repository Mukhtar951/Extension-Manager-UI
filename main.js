const displayMode = document.querySelector(".display-mode");
const modeImg = document.querySelector(".display-mode img");
const activeMode = document.querySelector(".display-mode .active");
const body = document.querySelector("body");
const header = document.querySelector("header");
const card = document.querySelectorAll(".extension-card");
const buttons = document.querySelectorAll("button");


displayMode.addEventListener("click",()=> {
  if (activeMode.classList.contains("light-mode")) {
    console.log('light')
    activeMode.classList.remove("light-mode")
    activeMode.classList.add("dark-mode")
    
    modeImg.src = "./assets/images/icon-sun.svg"
    body.style.background = "linear-gradient(180deg, #040918 0%, #091540 100%)"
    body.style.color = "white"
    header.style.background = "hsl(220,20%,18%)";
    for(let i = 0; i < card.length;i++) {
      card[i].style.background = "hsl(200,20%,18%)"
    }
    displayMode.style.background = "black";
    
  } else if (activeMode.classList.contains("dark-mode")) {
    console.log("dark")
    
    activeMode.classList.remove("dark-mode")
    activeMode.classList.add("light-mode")
    modeImg.src = "./assets/images/icon-moon.svg"

    body.style.background = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)"
    body.style.color = "black"
    header.style.background = "white";
    for(let i = 0; i < card.length;i++) {
      card[i].style.background = "white"
    }
    displayMode.style.background = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)"
  }
})


buttons.forEach((item, index) => {
  item.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    item.classList.add("active");

    card.forEach(c => {
      const checkbox = c.querySelector("input[type='checkbox']");
      if (index === 0) {
        c.style.display = "flex";
      } else if (index === 1) {
        c.style.display = checkbox.checked ? "flex" : "none";
      } else if (index === 2) {
        c.style.display = !checkbox.checked ? "flex" : "none";
      }
    });
  });
});
