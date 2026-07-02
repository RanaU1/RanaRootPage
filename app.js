document.getElementById("welcomeBtn").addEventListener("click", () => {
  Swal.fire({
    title: "Welcome to the Universe! 🌌",
    html: `
            <p class="text-start">Thanks for checking out my page! I am <strong>Rana</strong>, a passionate software enthusiast specializing in:</p>
            <ul class="text-start list-group list-group-flush mb-3">
                <li class="list-group-item bg-transparent border-0 ps-0"><i class="bi bi-check2-circle text-info me-2"></i>Python Automation & Scripts</li>
                <li class="list-group-item bg-transparent border-0 ps-0"><i class="bi bi-check2-circle text-info me-2"></i>Modern Responsive Web Apps</li>
                <li class="list-group-item bg-transparent border-0 ps-0"><i class="bi bi-check2-circle text-info me-2"></i>Linux Shell Operations</li>
            </ul>
            <p class="text-muted small text-start mb-0">Feel free to connect or build something amazing together.</p>
        `,
    icon: "success",
    background: "#eaf8ff",
    color: "#0f172a",
    confirmButtonColor: "#0ea5e9",
    confirmButtonText: "Let's Build 🛠️",
    customClass: {
      popup: "rounded-4 border border-secondary shadow",
    },
  });
});
