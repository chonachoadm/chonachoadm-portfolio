<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <div class="row justify-content-around">
            <div class="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center my-4">
                <h4>
                    Redes Sociales
                </h4>
                <ul class="list-unstyled">
                    <li class="d-flex align-items-center gap-2"><img src="../img/footer/icons/whatsapp.svg"
                            alt="Ícono de WhatsApp"><a href="https://wa.link/xbatbv" class="link-footer" target="_blank"
                            rel="noopener noreferrer">WhatsApp</a>
                    </li>
                    <li class="d-flex align-items-center gap-2"><img src="../img/footer/icons/social.svg"
                            alt="Ícono de WhatsApp"><a href="https://www.instagram.com/chonachin/" class="link-footer"
                            target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li class="d-flex align-items-center gap-2"><img src="../img/footer/icons/linkedin.svg"
                            alt="Ícono de WhatsApp"><a href="https://www.linkedin.com/in/nacho-lopez-40a28b38b"
                            class="link-footer" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center my-4">
                <h4>Sitios Web</h4>
                <ul class="list-unstyled">
                    <li><a href="https://esquina-cultural-production-l2ojal.laravel.cloud" class="link-footer"
                            target="_blank" rel="noopener noreferrer">Esquina Cultural</a></li>
                    <li><a href="https://cajaclub.vercel.app" class="link-footer" target="_blank"
                            rel="noopener noreferrer">Caja Club</a></li>
                    <li><a href="https://ciajeruncio.com" class="link-footer" target="_blank"
                            rel="noopener noreferrer">Cía Jeruncio</a>
                    </li>
                    <li><a href="https://final-ah-f76b6.web.app" class="link-footer" target="_blank"
                            rel="noopener noreferrer">Break House</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center my-4">
                <h4>Repositorios</h4>
                <ul class="list-unstyled">
                    <li><a href="https://github.com/chonachoadm/esquina-cultural" class="link-footer" target="_blank"
                            rel="noopener noreferrer">Esquina Cultural</a></li>
                    <li><a href="https://github.com/chonachoadm/caja-club" class="link-footer" target="_blank"
                            rel="noopener noreferrer">Caja Club</a></li>
                    <li><a href="https://github.com/chonachoadm/cia-jeruncio" class="link-footer" target="_blank"
                            rel="noopener noreferrer">Cía. Jeruncio</a>
                    </li>
                    <li><a href="https://github.com/chonachoadm/bosque-de-los-sentidos" class="link-footer"
                            target="_blank" rel="noopener noreferrer">Bosque de
                            los Sentidos</a></li>
                    <li><a href="https://github.com/chonachoadm/comunidad_cocinera" class="link-footer" target="_blank"
                            rel="noopener noreferrer">Comunidad
                            Cocinera</a></li>
                    <li><a href="https://github.com/chonachoadm/break-house" class="link-footer" target="_blank"
                            rel="noopener noreferrer">Break House</a></li>
                </ul>
            </div>
        </div>
        <div class="row w-100 text-center rights-reserved">
            <p> © {{ new Date().getFullYear() }} Ignacio López. Todos los derechos reservados.</p>
        </div>

    </footer>
</template>

<style scoped>
footer {
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.634), rgb(19, 19, 19));
    color: white;
}

h4 {
    font-family: 'League spartan', sans-serif;
    font-weight: bold;
}

ul li {
    margin-bottom: 5%;
}

.link-footer {
    color: white;
    text-decoration: none;
}

.link-footer:hover,
.link-footer:focus {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .rights-reserved {
        font-size: .8rem;
    }
}
</style>