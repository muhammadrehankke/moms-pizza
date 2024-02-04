 
AOS.init({
    duration: 1200
});
 

$(document).ready(function () {
    $('.gallery-slider').owlCarousel({
        loop: false,
        autoplay:false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});


$(document).ready(function () {
    $('.testi-wrapper').owlCarousel({
        loop: true,
        autoplay:false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: true,
        margin: 20,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
});

$(document).ready(function () {
    $('.menu-wrapper').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: false,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 5
            },
        }
    })
});

 
//gsap loader

const tl = gsap.timeline({ duration: 0.1 });

function preLoader1(tl) {
    tl.from(".navbar-brand > img", {
        x: -50,
        autoAlpha: 0,
    }, 0.7).from(".navbar-nav > li", {
        autoAlpha: 0,
        x: 100,
        stagger: 0.05,
    }, 0.8).from(".hero-text > *", {
        autoAlpha: 0,
        xPercent: -50,
        stagger: 0.05,
    }, 0.8);
}


function customCursor() {
    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    window.addEventListener("mousemove", function (event) {
        if (!isHovering) {
            gsap.to(cursorOuter, {
                x: event.clientX,
                y: event.clientY,
            });
        }
        gsap.to(cursorInner, {
            x: event.clientX,
            y: event.clientY,
        });
        mouseY = event.clientY;
        mouseX = event.clientX;
    });

    const elementsToTrack = document.querySelectorAll("a, img, .cursor-pointer");
    elementsToTrack.forEach((element) => {
        element.addEventListener("mouseenter", function () {
            cursorInner.classList.add("cursor-hover");
            cursorOuter.classList.add("cursor-hover");
            isHovering = true;
        });

        element.addEventListener("mouseleave", function () {
            if (!(
                element.tagName === "A" ||
                element.tagName === "IMG" ||
                element.closest(".cursor-pointer")
            )) {
                cursorInner.classList.remove("cursor-hover");
                cursorOuter.classList.remove("cursor-hover");
            }
            isHovering = false;
        });
    });

    gsap.set(cursorInner, { visibility: "visible" });
    gsap.set(cursorOuter, { visibility: "visible" });
}

document.addEventListener("DOMContentLoaded", function () {
    customCursor();

    AOS.init({
        duration: 1200,
    });

    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const elmOverlay = document.querySelector('.shape-overlays');
    const preloader = new preLoader(elmOverlay, {
        numPoints: 2
    });

    if (document.querySelector(".preloader")) {
        setTimeout(function () {
            document.querySelector(".preloader").remove()
            preloader.close();
            preLoader1(tl);
        }, 500)
    }
});