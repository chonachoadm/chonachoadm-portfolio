<script>
import { createHorizontalScroll } from '@/utils/horizontalScroll'

import desktop1 from '@/img/projects/demos/bosque-sentidos/bosque-sentidos-1.webp'
import desktop2 from '@/img/projects/demos/bosque-sentidos/bosque-sentidos-2.webp'
import desktop3 from '@/img/projects/demos/bosque-sentidos/bosque-sentidos-3.webp'
import desktop4 from '@/img/projects/demos/bosque-sentidos/bosque-sentidos-4.webp'
import mobile1 from '@/img/projects/demos/bosque-sentidos/mobile/bosque-sentidos-mobile-1.webp'
import mobile2 from '@/img/projects/demos/bosque-sentidos/mobile/bosque-sentidos-mobile-2.webp'
import mobile3 from '@/img/projects/demos/bosque-sentidos/mobile/bosque-sentidos-mobile-3.webp'
import mobile4 from '@/img/projects/demos/bosque-sentidos/mobile/bosque-sentidos-mobile-4.webp'

const MOBILE_QUERY = '(max-width: 767.98px)'

export default {
    name: 'BosqueSentidos',
    data() {
        return {
            isMobile: window.matchMedia(MOBILE_QUERY).matches,
            desktopImages: [
                { src: desktop1, alt: 'Bosque de los Sentidos 1' },
                { src: desktop2, alt: 'Bosque de los Sentidos 2' },
                { src: desktop3, alt: 'Bosque de los Sentidos 3' },
                { src: desktop4, alt: 'Bosque de los Sentidos 4' },
            ],
            mobileImages: [
                { src: mobile1, alt: 'Bosque de los Sentidos 1' },
                { src: mobile2, alt: 'Bosque de los Sentidos 2' },
                { src: mobile3, alt: 'Bosque de los Sentidos 3' },
                { src: mobile4, alt: 'Bosque de los Sentidos 4' },
            ],
        }
    },
    computed: {
        demoImages() {
            return this.isMobile ? this.mobileImages : this.desktopImages
        },
    },
    async mounted() {
        this.horizontalScroll = await createHorizontalScroll(this.$el)
        this.mediaQuery = window.matchMedia(MOBILE_QUERY)
        this.mediaQuery.addEventListener('change', this.handleBreakpointChange)
    },
    beforeUnmount() {
        this.horizontalScroll?.tween.kill()
        this.horizontalScroll?.trigger.kill()
        this.mediaQuery?.removeEventListener('change', this.handleBreakpointChange)
    },
    methods: {
        async handleBreakpointChange(event) {
            this.isMobile = event.matches
            this.horizontalScroll?.tween.kill()
            this.horizontalScroll?.trigger.kill()
            await this.$nextTick()
            this.horizontalScroll = await createHorizontalScroll(this.$el)
        },
    },
}
</script>

<template>
    <div>
        <section>
            <div class="d-flex align-items-center gap-2 gap-lg-4 my-4">
                <div>
                    <img class="icon-img" src="@/img/projects/logo-bosque_de_los_sentidos.svg"
                        alt="Ícono de Bosque de los Sentidos">
                </div>
                <h2 class="mb-0">Bosque de los Sentidos</h2>
            </div>
            <div>
                <h3>Ludoteca de juegos inclusivos.</h3>
                <p>E-commerce dirigido a tanto infancias como personas adultas con discapacidades, generando un espacio
                    de
                    inclusividad y acompañamiento para aquellos que más se beneficiarían de ello.</p>
                <div class="techs-container">
                    <h5>
                        Tecnologías
                    </h5>
                    <ul class="list-unstyled d-flex align-items-center gap-4">
                        <li><img class="tech-icon" src="@/img/techs/php.svg" alt="Ícono de PHP"></li>
                        <li><img class="tech-icon" src="@/img/techs/laravel.svg" alt="Ícono de Laravel"></li>
                        <li><img class="tech-icon" src="@/img/techs/mysql.svg" alt="Ícono de MySQL"></li>
                    </ul>
                </div>
                <div class="demo-images-container">
                    <div class="demo-images">
                        <img v-for="(image, index) in demoImages" :key="index" class="img-fluid rounded-xl"
                            :src="image.src" :alt="image.alt">
                    </div>
                </div>
                <p class="text-center mx-auto"><em>Es un proyecto en desarrollo, la integración de MercadoPago
                        está
                        en modo de prueba.</em></p>
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
}

.demo-images img {
    width: 90%;
    max-width: 100vw;
    max-height: 100vh;
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

@media (max-width: 768px) {
    section {
        padding-inline: 5%;
        margin-inline: .75rem;
    }

    .title-container {
        flex-wrap: wrap;
        justify-content: center;
    }

    .icon-img {
        width: 75px;
    }

    .techs-container ul {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>