<script>
import { createHorizontalScroll } from '@/utils/horizontalScroll'

import desktop1 from '@/img/projects/demos/cia-jeruncio/cia-jeruncio-1.webp'
import desktop2 from '@/img/projects/demos/cia-jeruncio/cia-jeruncio-2.webp'
import desktop3 from '@/img/projects/demos/cia-jeruncio/cia-jeruncio-3.webp'
import desktop4 from '@/img/projects/demos/cia-jeruncio/cia-jeruncio-4.webp'
import mobile1 from '@/img/projects/demos/cia-jeruncio/mobile/cia-jeruncio-mobile-1.webp'
import mobile2 from '@/img/projects/demos/cia-jeruncio/mobile/cia-jeruncio-mobile-2.webp'
import mobile3 from '@/img/projects/demos/cia-jeruncio/mobile/cia-jeruncio-mobile-3.webp'
import mobile4 from '@/img/projects/demos/cia-jeruncio/mobile/cia-jeruncio-mobile-4.webp'

const MOBILE_QUERY = '(max-width: 767.98px)'

export default {
    name: 'CiaJeruncio',
    data() {
        return {
            isMobile: window.matchMedia(MOBILE_QUERY).matches,
            desktopImages: [
                { src: desktop1, alt: 'Cía. Jeruncio 1' },
                { src: desktop2, alt: 'Cía. Jeruncio 2' },
                { src: desktop3, alt: 'Cía. Jeruncio 3' },
                { src: desktop4, alt: 'Cía. Jeruncio 4' },
            ],
            mobileImages: [
                { src: mobile1, alt: 'Cía. Jeruncio 1' },
                { src: mobile2, alt: 'Cía. Jeruncio 2' },
                { src: mobile3, alt: 'Cía. Jeruncio 3' },
                { src: mobile4, alt: 'Cía. Jeruncio 4' },
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
        window.scrollTo({ top: 0, left: 0 })
        this.mediaQuery = window.matchMedia(MOBILE_QUERY)
        this.mediaQuery.addEventListener('change', this.handleBreakpointChange)
    },
    beforeUnmount() {
        this.horizontalScroll?.kill()
        this.mediaQuery?.removeEventListener('change', this.handleBreakpointChange)
    },
    methods: {
        async handleBreakpointChange(event) {
            this.isMobile = event.matches
            this.horizontalScroll?.kill()
            await this.$nextTick()
            this.horizontalScroll = await createHorizontalScroll(this.$el)
        },
    },
}
</script>

<template>
    <div>
        <section>
            <div class="row align-items-center gap-4 my-4 title-container">
                <div class="col-12 col-md-4 d-flex align-items-center justify-content-center gap-2 gap-lg-4">
                    <div>
                        <img class="icon-img" src="@/img/projects/logo-cia_jeruncio.svg" alt="Ícono de Cía Jeruncio">
                    </div>
                    <h2 class="mb-0">Cía. Jeruncio Clown</h2>
                </div>
                <div class="col-12 col-sm-4 d-flex justify-content-center ps-0 ms-0 ps-lg-4 ms-lg-4">
                    <a class="text-center visit-website-button" href="https://ciajeruncio.com" target="_blank">Sitio
                        web</a>
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
                        <img v-for="(image, index) in demoImages" :key="index" class="img-fluid rounded-xl"
                            :src="image.src" :alt="image.alt">
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