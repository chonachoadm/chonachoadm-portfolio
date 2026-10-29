<script>
export default {
    name: 'AppHeader',
}
</script>
<template>
    <section>
        <div class="box-header">
            <h1>Ignacio <br />Lopez</h1>
            <h2>Desarrollador Web</h2>
            <div class="d-flex justify-content-around">
                <RouterLink to="/portfolio/esquina-cultural" class="portfolio-button">
                    Portfolio
                </RouterLink>
                <div class="dropdown">
                    <button class="dropdown-toggle cv-button" type="button" data-bs-toggle="dropdown">Descargar
                        CV</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/files/CV-ignacio_lopez.pdf" download>Español</a></li>
                        <li><a class="dropdown-item" href="/files/ignacio_lopez-resume.pdf" download>English</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column align-items-start gap-4 my-4 p-4 section-techs">
            <ul class="d-flex list-unstyled justify-content-center align-items-center track-techs">
                <li>
                    <img src="@/img/techs/html5.svg" alt="HTML 5" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/css3.svg" alt="CSS 3" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/javascript.svg" alt="JavaScript" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/vue.svg" alt="Vue.js" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/bootstrap.svg" alt="Bootstrap 5" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/tailwind.svg" alt="Tailwind CSS" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/php.svg" alt="PHP" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/laravel.svg" alt="Laravel" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/supabase.svg" alt="Supabase" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/mysql.svg" alt="MySQL" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/git.svg" alt="Git" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/wordpress.svg" alt="Wordpress" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/mongodb.svg" alt="MongoDB" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/react.svg" alt="React" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/express.svg" alt="Express" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/node.svg" alt="NodeJS" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/html5.svg" alt="HTML 5" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/css3.svg" alt="CSS 3" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/javascript.svg" alt="JavaScript" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/vue.svg" alt="Vue.js" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/bootstrap.svg" alt="Bootstrap 5" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/tailwind.svg" alt="Tailwind CSS" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/php.svg" alt="PHP" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/laravel.svg" alt="Laravel" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/supabase.svg" alt="Supabase" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/mysql.svg" alt="MySQL" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/git.svg" alt="Git" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/wordpress.svg" alt="Wordpress" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/mongodb.svg" alt="MongoDB" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/react.svg" alt="React" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/express.svg" alt="Express" class="img-fluid" />
                </li>
                <li>
                    <img src="@/img/techs/node.svg" alt="NodeJS" class="img-fluid" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 4;
}

h1 {
    font-family: 'Norwester', sans-serif;
    font-size: 7rem;
}

h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
}

.box-header {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    padding-left: 10%;
}

.portfolio-button {
    text-decoration: none;
    background-color: black;
    padding: .5em 1em;
    border: 3px solid black;
    color: white;
    font-weight: bold;
    font-size: 1.1em;
    transition: all .2s ease;
}

.portfolio-button:focus,
.portfolio-button:hover {
    background-color: white;
    color: black;
}

.cv-button {
    text-decoration: none;
    background-color: transparent;
    padding: .5em 1em;
    border: 3px solid black;
    color: black;
    font-weight: bold;
    font-size: 1.1em;
    transition: all .2s ease;
}

.cv-button:focus,
.cv-button:hover {
    background-color: black;
    color: white;
}

.section-techs {
    overflow: hidden;
    mask-image: linear-gradient(to right,
            transparent 10%,
            black 40%,
            black 60%,
            transparent 90%);
    -webkit-mask-image: linear-gradient(to right,
            transparent 10%,
            black 40%,
            black 60%,
            transparent 90%);
    width: 100%;
}

.track-techs {
    display: flex;
    width: max-content;
    gap: 3em;
    animation: scroll 20s linear infinite;
}

ul li img {
    height: 100px;
    width: auto;
    flex-shrink: 0;
    object-fit: cover;
}

@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(calc(-50% - 1.5em));
    }
}

@media (max-width: 768px) {
    section {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 4;
        margin-top: 5em;
    }

    h1 {
        font-size: 5rem;
    }

    .box-header {
        height: 50vh;
    }

    .section-techs {
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
    }
}
</style>
