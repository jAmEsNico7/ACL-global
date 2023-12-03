particlesJS("particles-js", {
    particles: {
        number: {
            value: 57, // Number of particles
            density: {
                enable: true,
                value_area: 800 // Adjust this to change particle density
            }
        },
        color: {
            value: "#1d76bc" // Color of particles
        },
        opacity: {
            value: 0.7
        },
        shape: {
            type: "circle", // Shape of particles (circle, edge, triangle, polygon, star, etc.)
        },
        size:{
            value: 7, // Size of particles
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 1, // Speed of particles' movement
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    line_linked: {
        enable: true,
        distance: 90,
        color: '#000',
        opacity: 0,
        width: 1.5,
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        }
    },
    retina_detect: true
});



