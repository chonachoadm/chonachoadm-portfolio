<script>
import { createHorizontalScroll } from '@/utils/horizontalScroll'

export default {
    name: 'BreakHouse',
    async mounted() {
        createHorizontalScroll(this.$el)
    },
    beforeUnmount() {
        this.horizontalScroll?.tween.kill()
        this.horizontalScroll?.trigger.kill()
    },
}
</script>

<template>
    <section>
        <div class=" d-flex align-items-center gap-4 mb-4">
            <div>
                <img class="icon-img" src="@/img/projects/logo-break_house.svg" alt="Ícono de Break House">
            </div>
            <h2>Break House</h2>
            <div class="d-flex justify-content-center ps-4 ms-4">
                <a class="visit-website-button" href="https://final-ah-f76b6.web.app" target="_blank">Sitio web</a>
            </div>
        </div>
        <div>
            <h3>Proyecto académico utilizando el stack MERN.</h3>
            <p>Funcionalidades CRUD y utilización de una base de datos no-relacional para un sitio de tutoriales de
                breakdance importados de YouTube.</p>
            <div class="techs-container">
                <h5>
                    Tecnologías
                </h5>
                <ul class="list-unstyled d-flex align-items-center gap-4">
                    <li><img class="tech-icon" src="@/img/techs/mongodb.svg" alt="Ícono de MongoDB"></li>
                    <li><img class="tech-icon" src="@/img/techs/express.svg" alt="Ícono de Express"></li>
                    <li><img class="tech-icon" src="@/img/techs/react.svg" alt="Ícono de React"></li>
                    <li><img class="tech-icon" src="@/img/techs/node.svg" alt="Ícono de NodeJS"></li>
                </ul>
            </div>
            <div class="demo-images-container">
                <div class="demo-images">
                    <img class="img-fluid rounded-xl" src="@/img/projects/demos/break-house/break-house-1.webp"
                        alt="Break House 1">
                    <img class="img-fluid rounded-xl" src="@/img/projects/demos/break-house/break-house-2.webp"
                        alt="Break House 2">
                    <img class="img-fluid rounded-xl" src="@/img/projects/demos/break-house/break-house-3.webp"
                        alt="Break House 3">
                    <img class="img-fluid rounded-xl" src="@/img/projects/demos/break-house/break-house-4.webp"
                        alt="Break House 4">
                </div>
            </div>
            <div class="w-100 d-flex justify-content-center mt-4">
                <a class="visit-website-button" href="https://final-ah-f76b6.web.app" target="_blank">Sitio web</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    margin: 0;
    padding: 3% 10%;
    background-color: rgb(255, 255, 255);
}

.icon-container {
    width: fit-content;
    background-color: white;
    border-radius: 200px;
    padding: 1em;
}

.icon-img {
    width: 100px;
}

.techs-container {
    margin-block: 3em;
}

.tech-icon {
    height: 50px;
}

.demo-images-container {
    margin-top: 3em;
}

.demo-images {
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    height: fit-content;
    gap: 2em;
}

.demo-images img {
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 1em;
    width: 90%;
    margin-inline: 5%;
    margin-bottom: 5%;

}

h2 {
    font-family: 'League spartan', sans-serif;
    font-weight: 900;
}

h3 {
    font-size: 1.5rem;
    font-weight: bold;
}

.visit-website-button {
    text-decoration: none;
    background-color: white;
    padding: .5em 1em;
    border: 3px solid black;
    color: black;
    font-weight: bold;
    font-size: 1.1em;

    transition: all .2s ease;
}

.visit-website-button:focus,
.visit-website-button:hover {
    background-color: black;
    color: white;
}
</style>