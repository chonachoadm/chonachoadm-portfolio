<script>
export default {
    name: 'AppThechs',
}
</script>

<template>
    <div class="d-flex flex-column align-items-start gap-4 my-4 p-4 section-techs">
        <h2 class="align-self-center">Tecnologías</h2>
        <ul class="d-flex list-unstyled justify-content-center align-items-center track-techs">
            <li>
                <img src="../img/techs/html5.svg" alt="HTML 5" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/css3.svg" alt="CSS 3" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/javascript.svg" alt="JavaScript" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/vue.svg" alt="Vue.js" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/bootstrap.svg" alt="Bootstrap 5" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/tailwind.svg" alt="Tailwind CSS" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/php.svg" alt="PHP" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/laravel.svg" alt="Laravel" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/supabase.svg" alt="Supabase" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/mysql.svg" alt="MySQL" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/git.svg" alt="Git" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/wordpress.svg" alt="Wordpress" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/html5.svg" alt="HTML 5" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/css3.svg" alt="CSS 3" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/javascript.svg" alt="JavaScript" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/vue.svg" alt="Vue.js" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/bootstrap.svg" alt="Bootstrap 5" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/tailwind.svg" alt="Tailwind CSS" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/php.svg" alt="PHP" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/laravel.svg" alt="Laravel" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/supabase.svg" alt="Supabase" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/mysql.svg" alt="MySQL" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/git.svg" alt="Git" class="img-fluid" />
            </li>
            <li>
                <img src="../img/techs/wordpress.svg" alt="Wordpress" class="img-fluid" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
h2 {
    font-family: 'League spartan', sans-serif;
    font-weight: 900;
    font-size: 2.5rem;
}

.section-techs {
    background-image: linear-gradient(to right, #ffffff96, #cdd3ff);
    box-shadow: 0 0 20px rgba(124, 138, 246, 0.7);
    box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.5);
    overflow: hidden;
}

.track-techs {
    width: max-content;
    animation: scroll 20s linear infinite;
}

ul li {
    width: 100px;
    flex-shrink: 0;
    margin: 0 1rem;
}



@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

@media (max-width: 1024px) {
    h2 {
        font-size: 2rem;
    }
}
</style>
