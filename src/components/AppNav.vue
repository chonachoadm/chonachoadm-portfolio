<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    start: "top+=1 top",
    end: 999999,

    onEnter: () => {
        gsap.to(".nav-bar", {
            padding: "1em 2em",
            backgroundColor: "#00000000",
            backdropFilter: "none",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".nav-bar a", {
            color: '#000000',
            duration: 0.3,
            ease: "power2.out",
        });
    },

    onLeaveBack: () => {
        gsap.to(".nav-bar", {
            padding: "2em",
            backgroundColor: "#000000d9",
            backdropFilter: "blur(2em)",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(".nav-bar a", {
            color: '#ffffff',
            duration: 0.3,
            ease: "power2.out",
        });
    }
});

export default {
    name: "AppNav",
    data() {
        return {
            openNav: false,
        }
    },
    watch: {

        openNav(newVal) {
            if (!window.matchMedia("(max-width: 1024px)").matches) {
                return
            }
            if (newVal) {
                gsap.to(".nav-bar", {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            } else {
                gsap.to(".nav-bar", {
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            }
        }
    },
}
</script>
<template>
    <button v-if="!openNav" class="fs-2 nav-toggle" @click="openNav = true">
        ☰
    </button>
    <nav class="nav-bar" :class="{ openMobileNav: openNav }">
        <button v-if="openNav" class=" fs-2 nav-toggle" @click="openNav = false">
            X
        </button>
        <ul class="nav-list">
            <li class="nav-item">
                <RouterLink @click="openNav = !openNav" to="/">Inicio</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink @click="openNav = !openNav" to="/sobre-mi">Sobre mí</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink @click="openNav = !openNav" to="/portfolio/esquina-cultural">Portfolio</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink @click="openNav = !openNav" to="/contacto">Contacto</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.nav-toggle {
    display: none;
    color: black;
}

.nav-bar {
    display: block;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #000000d9;
    backdrop-filter: blur(2em);
    /* height: 100px; */
    width: 100%;
    padding: 2em;
}


.nav-list {
    list-style: none;
    display: flex;
    justify-content: start;
    margin: 0;
    gap: 3em;
    font-size: 1.5rem;
    font-family: 'Norwester', sans-serif;
}

.nav-item {
    display: flex;
    align-items: center;
}

a {
    color: white;
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 0% 3px;

    transition: background-size 0.3s ease;
}

a:hover,
a:focus {
    background-size: 100% 3px;
}

@media (max-width: 1024px) {

    .nav-bar {
        visibility: hidden;
        pointer-events: none;
        position: fixed;
        inset: 0;
        transition: none;
    }

    .openMobileNav {
        visibility: visible;
        pointer-events: auto;
        display: flex;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(2em);
        justify-content: center;
    }

    .nav-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    .nav-toggle {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        text-align: end;
        font-size: min(7em, 3vw);
        padding: .3em .8em;
        margin: 1em;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2em);
        border: none;
        border-radius: 5px;
        z-index: 100;
        background-color: rgba(0, 0, 0, 0.85);
        color: white;
        font-family: 'Norwester', sans-serif;
    }
}
</style>
