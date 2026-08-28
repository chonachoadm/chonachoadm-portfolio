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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    padding-left: 10%;
}

.section-techs {
    overflow: hidden;
    margin-inline: 2em;
    mask-image: linear-gradient(to right,
            transparent 10%,
            black 30%,
            black 70%,
            transparent 90%);
    -webkit-mask-image: linear-gradient(to right,
            transparent 10%,
            black 30%,
            black 70%,
            transparent 90%);
}

.track-techs {
    width: max-content;
    animation: scroll 20s linear infinite;
}

ul li img {
    height: 100px;
    flex-shrink: 0;
    margin: 0 1rem;
}

ul li {
    margin: 0 1em;
}

@keyframes scroll {

    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

@media (max-width: 768px) {
    section {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 4;
    }

    h1 {
        font-size: 5rem;
    }

    .box-header {
        height: 75vh;
    }

    .section-techs {
        overflow: hidden;
        margin-inline: 2em;
        mask-image: linear-gradient(to right,
                transparent 0%,
                black 20%,
                black 80%,
                transparent 100%);
        -webkit-mask-image: linear-gradient(to right,
                transparent 0%,
                black 20%,
                black 80%,
                transparent 100%);
    }
}
</style>
