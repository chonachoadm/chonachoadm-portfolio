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
                    <img class="icon-img" src="@/img/projects/logo-cia_jeruncio.svg" alt="Ícono de Cía Jeruncio">
                </div>
                <h2>Cía. Jeruncio Clown</h2>
                <div class="d-flex justify-content-center ps-4 ms-4">
                    <a class="visit-website-button" href="https://ciajeruncio.com" target="_blank">Sitio web</a>
                </div>
            </div>
            <div>
                <h3>Portfolio.</h3>
                <p>SPA (Single-Page Application) para compañía internacional de circo contemporáneo Jeruncio Clown.</p>
                <div class="techs-container">
                    <h5>
                        Tecnologías
                    </h5>
                    <ul class="list-unstyled d-flex align-items-center gap-4">
                        <li><img class="tech-icon" src="@/img/techs/vue.svg" alt="Ícono de VueJS"></li>
                    </ul>
                </div>
                <div class="demo-images-container">
                    <div class="demo-images">
                        <img class="img-fluid rounded-xl" src="@/img/projects/demos/cia-jeruncio/cia-jeruncio-1.webp"
                            alt="Cía Jeruncio 1">
                        <img class="img-fluid rounded-xl" src="@/img/projects/demos/cia-jeruncio/cia-jeruncio-2.webp"
                            alt="Cía Jeruncio 2">
                        <img class="img-fluid rounded-xl" src="@/img/projects/demos/cia-jeruncio/cia-jeruncio-3.webp"
                            alt="Cía Jeruncio 3">
                        <img class="img-fluid rounded-xl" src="@/img/projects/demos/cia-jeruncio/cia-jeruncio-4.webp"
                            alt="Cía Jeruncio 4">
                    </div>
                </div>
                <div class="w-100 d-flex justify-content-center mt-4">
                    <a class="visit-website-button" href="https://ciajeruncio.com" target="_blank">Sitio web</a>
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
    height: 100px;
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