<script>
export default {
    name: 'AppAboutMe',
}
</script>

<template>
    <section id="AboutMe">
        <div class="container">
            <h1 class="mb-4">Sobre mí</h1>
            <h2>Técnico superior en diseño y programación web</h2>
            <h3>Escuela Multimedial Da Vinci</h3>
            <div class="box-about-me">
                <p>
                    Soy Ignacio López, un <strong>desarrollador web</strong> apasionado por crear experiencias digitales
                    atractivas y funcionales. Con una sólida formación en programación y diseño web, me
                    especializo en el desarrollo de sitios web responsivos y aplicaciones web interactivas.
                </p>
                <p>
                    Mi enfoque se centra en comprender las necesidades del cliente y traducirlas en
                    <strong>soluciones tecnológicas efectivas</strong>. Me esfuerzo por mantenerme actualizado con las
                    últimas tendencias y tecnologías en el campo del desarrollo web para ofrecer productos
                    de alta calidad.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
}

p {
    width: 40%;
    font-size: 1.1rem;
}

section {
    margin: 10%;
    /* padding: 0 5%; */
    scroll-margin-top: 4rem;
    /* background-image: url(../img/about/about-background.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center; */
    /* box-shadow: 0 0 15px rgba(124, 138, 246, 0.5); */

}

.box-about-me {
    margin-top: 5%;
    display: flex;
    justify-content: start;
    gap: 4em;
}


@media (max-width: 1024px) {
    section {
        margin-inline: 5%;
    }

    .box-about-me {
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 2em;
    }

    p {
        width: 100%;
        font-size: 1rem;
    }

    /* section {
        background-image: url(../img/about/about-background-md_sm.webp);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 0;
    } */
}

@media (max-width: 768px) {
    section {
        margin-top: 5em;
    }

    h1 {
        font-size: 4rem;
    }
}
</style>
