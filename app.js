// console.log("Har Har mahadev")
const toggleBtn = document.querySelector(".toggle_btn");
console.log(toggleBtn);
const sideBar = document.querySelector(".sidebar");
console.log(sideBar);
const closeBtn = document.querySelector(".close_btn")
console.log(closeBtn);
toggleBtn.addEventListener("click", () => {
       sideBar.classList.toggle("show-sidebar");
})
closeBtn.addEventListener("click", () => {
      sideBar.classList.remove("show-sidebar");  
})