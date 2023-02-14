function myFunction() {
   const body = document.body;
   const container = document.getElementById("container");
   const btn = document.getElementById("btn")
   const footer = document.getElementById("footer-650")

   body.classList.toggle("dark-mode");
   container.classList.toggle("dark-mode-container");
   btn.classList.toggle("dark-mode-btn")
   footer.classList.toggle("dark-mode-footer-650")
}