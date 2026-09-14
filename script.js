
const loader = document.querySelector(".loader");
const video = document.querySelector(".loader-video");

// Lenis smooth scroll
let lenis;

if (window.innerWidth >= 700) {

    lenis = new Lenis({
        duration: 1.8,
        wheelMultiplier: 0.7,
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

}

// Disable scrolling
function disableScroll() {

    document.body.classList.add("loader-active");

    if (lenis) {
        lenis.stop();
    }

}

// Enable scrolling
function enableScroll() {

    document.body.classList.remove("loader-active");

    if (lenis) {
        lenis.start();
    }

}

// Loader logic
if (sessionStorage.getItem("loaderShown")) {

    loader.style.display = "none";

    enableScroll();

} else {

    sessionStorage.setItem("loaderShown", "true");

    // Stop scroll while video plays
    disableScroll();

    video.addEventListener("ended", () => {

        loader.style.display = "none";

        // Start scroll after video ends
        enableScroll();

    });

}


// For menu effect
let menubtn = document.querySelector("#menubtn");
let menubox = document.querySelector("#menu-box");
let menucl = document.querySelector("#menu-cl");
let menugo = document.querySelector(".menugo");
function openMenu() {
    menubox.style.display = "block";

    gsap.fromTo("#menu-box",
        {
            x: 500,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.8
        }
    );

    menubtn.style.display = "none";
    menucl.style.display = "block";
}

function closeMenu() {
    gsap.to("#menu-box", {
        x: 500,
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            menubox.style.display = "none";
        }
    });

    menubtn.style.display = "block";
    menucl.style.display = "none";
}

menubtn.addEventListener("click", openMenu);

menucl.addEventListener("click", closeMenu);

// Close menu when a menu item is clicked
let menuItems = document.querySelectorAll(".menugo");

menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
});




// For right hero box
if (window.innerWidth >= 1024) {
    let box = document.querySelector("#right-hero");
    box.addEventListener("mouseover", () => {
        gsap.to(box, {
            x: 0,
            duration: 0.8
        })
    });
    box.addEventListener("mouseleave", () => {
        gsap.to(box, {
            x: 390,
            duration: 0.8
        })
    })
}




// For Dark and bright toggle btn
let darkbtn = document.querySelector("#ic-dark");
let brightbtn = document.querySelector("#ic-bright");

darkbtn.addEventListener("click", () => {
    document.body.classList.toggle("bright");

    darkbtn.style.display = "none";
    brightbtn.style.display = "block";
});

brightbtn.addEventListener("click", () => {
    document.body.classList.toggle("bright");

    brightbtn.style.display = "none";
    darkbtn.style.display = "block";
});



// Project card animation
if (window.innerWidth >= 1024) {
    let pc = document.querySelectorAll(".pr-c");

    pc.forEach((card) => {
        let detail = card.querySelector(".pr-detail");

        card.addEventListener("mouseenter", () => {
            gsap.to(detail, {
                x: 0,
                duration: 0.8,
                opacity: 1
            });
            ovr.style.visibility = "visible";
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(detail, {
                x: -1000,
                duration: 0.8,
                opacity: 0
            });
            ovr.style.visibility = "hidden";
        });

    });
}






