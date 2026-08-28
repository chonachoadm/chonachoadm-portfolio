<script>
import { RouterView } from "vue-router";


export default {
    name: 'AppProjects',
    data() {
        return {
            components: {
                RouterView
            },
        }
    },
}
</script>

<template>
    <section id="Projects">
        <div class="container">
            <h1 class="mb-4">Proyectos</h1>
            <ul class="list-unstyled d-flex techs-list">
                <li>
                    <RouterLink class="text-decoration-none text-dark fw-bold" to="/portfolio/esquina-cultural">Esquina
                        Cultural
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="text-decoration-none text-dark fw-bold" to="/portfolio/bosque-de-los-sentidos">
                        Bosque de los Sentidos</RouterLink>
                </li>
                <li>
                    <RouterLink class="text-decoration-none text-dark fw-bold" to="/portfolio/caja-club">Caja Club
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="text-decoration-none text-dark fw-bold" to="/portfolio/cia-jeruncio">Cía Jeruncio
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="text-decoration-none text-dark fw-bold" to="/portfolio/comunidad-cocinera">
                        Comunidad Cocinera
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="text-decoration-none text-dark fw-bold" to="/portfolio/break-house">Break House
                    </RouterLink>
                </li>
            </ul>
        </div>

        <RouterView />
    </section>
</template>

<style scoped>
section {
    margin-block: 10%;
}

.techs-list {
    background-color: white;
    width: fit-content;
    margin: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
}

li {
    padding: .7em 2em;
    box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.2);
}

li:has(.router-link-exact-active) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 -5px 5px 0 rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
    h1 {
        font-size: 3rem;
    }
}

/* @media (max-width: 768px) {

} */
</style>
