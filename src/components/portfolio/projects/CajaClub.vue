<script>
import { createHorizontalScroll } from '@/utils/horizontalScroll'

export default {
    name: 'EsquinaCultural',
    mounted() {
        createHorizontalScroll(this.$el)
    }
}
</script>

<template>
    <div>
        <section>
            <div class="d-flex align-items-center gap-4 mb-4">
                <div>
                    <img class="icon-img" src="@/img/projects/logo-caja_club.svg" alt="Ícono de CajaClub">
                </div>
                <h2>Caja Club</h2>
                <div class="d-flex justify-content-center ps-4 ms-4">
                    <a class="visit-website-button" href="https://cajaclub.vercel.app" target="_blank">Sitio web</a>
                </div>
            </div>
            <div>
                <h3>SPA para un sistema sencillo de caja para El Club de la Mortal.</h3>
                <p>El Club de la Mortal tiene eventos culturales casi todos los fines de semana. Este sistema fue hecho
                    para que les sea más sencillo mantener un registro de lo que venden en la barra.</p>
                <div class="techs-container">
                    <h5>
                        Tecnologías
                    </h5>
                    <ul class="list-unstyled d-flex align-items-center gap-4">
                        <li><img class="tech-icon" src="@/img/techs/vue.svg" alt="Ícono de VueJS"></li>
                        <li><img class="tech-icon" src="@/img/techs/javascript.svg" alt="Ícono de JavaScript"></li>
                    </ul>
                </div>
                <div class="demo-images-container">
                    <div class="demo-images">
                        <img class="img-fluid rounded-xl" src="@/img/projects/demos/caja-club/caja-club-1.webp"
                            alt="Caja Club 1">
                        <img class="img-fluid rounded-xl" src="@/img/projects/demos/caja-club/caja-club-2.webp"
                            alt="Caja Club 2">
                        <img class="img-fluid rounded-xl" src="@/img/projects/demos/caja-club/caja-club-3.webp"
                            alt="Caja Club 3">
                        <img class="img-fluid rounded-xl" src="@/img/projects/demos/caja-club/caja-club-4.webp"
                            alt="Caja Club 4">
                    </div>
                </div>
                <div class="w-100 d-flex justify-content-center mt-4">
                    <a class="visit-website-button" href="https://cajaclub.vercel.app" target="_blank">Sitio web</a>
                </div>
            </div>
        </section>
    </div>

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

.demo-images {
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    height: fit-content;
    gap: 2em;
    align-items: center;
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