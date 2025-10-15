/* Basic interactivity: nav toggle, smooth scroll, form handling, year */
document.addEventListener("DOMContentLoaded", function () {
  // Year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Nav toggle for small screens
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.style.display === "flex";
    nav.style.display = isOpen ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.gap = "12px";
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close nav on small screens
        if (window.innerWidth < 900) nav.style.display = 'none';
      }
    });
  });
});

// Simple client-side form handling
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const result = document.getElementById("form-result");

  if (!name || !email || !message) {
    result.textContent = "Please fill all fields.";
    result.style.color = "crimson";
    return false;
  }

  // Show friendly client-side message (no server)
  result.style.color = "";
  result.textContent = `Thanks ${name}! This form does client-side validation only. To contact me directly, email: aabinaya693@gmail.com`;
  // Optionally clear form:
  document.getElementById("contact-form").reset();
  return false;
}
