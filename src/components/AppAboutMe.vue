<script>
export default {
    name: 'AppAboutMe',
}
</script>

<template>
    <section id="AboutMe">
        <div class="about-me-bg">
            <h1>SOBRE MÍ</h1>
            <div class="box-about-me">
                <p>
                    Soy Ignacio López, un desarrollador web apasionado por crear experiencias digitales
                    atractivas y funcionales. Con una sólida formación en programación y diseño web, me
                    especializo en el desarrollo de sitios web responsivos y aplicaciones web interactivas.
                </p>
                <p>
                    Mi enfoque se centra en comprender las necesidades del cliente y traducirlas en
                    soluciones tecnológicas efectivas. Me esfuerzo por mantenerme actualizado con las
                    últimas tendencias y tecnologías en el campo del desarrollo web para ofrecer productos
                    de alta calidad.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
p {
    width: 40%;
    font-size: 1.1rem;
}

section {
    margin: 20% 0;
    padding: 0 5%;
    scroll-margin-top: 4rem;
    background-image: url(../img/about/about-background.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center;
    box-shadow: 0 0 15px rgba(124, 138, 246, 0.5);

}

.box-about-me {
    margin-top: 5%;
}

.about-me-bg {
    width: 100%;
    padding: 5% 0;
    background-image: linear-gradient(to right, white, #00000000);

}


@media (max-width: 1024px) {
    .box-about-me {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    p {
        width: 100%;
        font-size: 1rem;
    }

    section {
        background-image: url(../img/about/about-background-md_sm.webp);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 0;
    }

    .about-me-bg {
        background-color: rgba(255, 255, 255, 0.75);
        padding: 10%;
        box-shadow: 0 0 15px rgba(124, 138, 246, 0.5);
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 3rem;
    }
}
</style>
