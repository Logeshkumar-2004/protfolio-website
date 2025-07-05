/* animation */


document.addEventListener("DOMContentLoaded", () => {
  const roles = ["a Web Developer", "an Engineer", "a Freelancer", "a Programmer"];
  const roleElement = document.getElementById("role");
  let index = 0;

  function typeText(text, callback) {
    let i = 0;
    const typing = setInterval(() => {
      roleElement.textContent += text.charAt(i++);
      if (i > text.length) {
        clearInterval(typing);
        setTimeout(callback, 2000);
      }
    }, 100);
  }

  function eraseText(callback) {
    let text = roleElement.textContent;
    let i = text.length;
    const erasing = setInterval(() => {
      roleElement.textContent = text.substring(0, i--);
      if (i < 0) {
        clearInterval(erasing);
        callback();
      }
    }, 50);
  }

  function loopRoles() {
    eraseText(() => {
      index = (index + 1) % roles.length;
      typeText(roles[index], loopRoles);
    });
  }

  typeText(roles[index], loopRoles);

  tsParticles.load("tsparticles", {
    background: { color: "#121212" },
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        anim: { enable: true, speed: 4, size_min: 0.1, sync: false }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out",
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 4 }
        }
      }
    },
    retina_detect: true
  });
});

