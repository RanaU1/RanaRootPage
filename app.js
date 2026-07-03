document.getElementById("welcomeBtn").addEventListener("click", () => {
  Swal.fire({
    title: "Welcome to the Universe! 🌌",
    html: `
            <p class="text-start">Thanks for checking out my page! I am <strong>Rana</strong>, a passionate software enthusiast specializing in:</p>
<div class="alert alert-info text-start mb-2">
    <i class="bi bi-python me-2"></i>
    Python Automation & Scripts
</div>

<div class="alert alert-primary text-start mb-2">
    <i class="bi bi-globe me-2"></i>
    Modern Responsive Web Apps
</div>

<div class="alert alert-secondary text-start">
    <i class="bi bi-terminal me-2"></i>
    Linux Shell Operations
</div>
            <p class="text-muted small text-start mb-0">Feel free to connect or build something amazing together.</p>
        `,
    icon: "success",
    background: "rgb(255,255,255)",
    color: "#0f172a",
    confirmButtonColor: "#0dcaf0",
    confirmButtonText: "Let's Build 🛠️",
    customClass: {
      popup: "rounded-4 border border-secondary shadow",
    },
  });
});


const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

// Toggle theme
themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    localStorage.setItem("theme", "light");
  } else {
    themeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    localStorage.setItem("theme", "dark");
  }

});