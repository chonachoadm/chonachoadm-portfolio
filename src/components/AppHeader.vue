<script>
export default {
    name: 'AppHeader',
}
</script>
<template>
    <div class="box-header">
        <h1>Ignacio <br />Lopez</h1>
        <h2>Desarrollador Web</h2>
    </div>
</template>

<style scoped>
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

@media (max-width: 768px) {
    h1 {
        font-size: 5rem;
    }

    .box-header {
        height: 75vh;
    }
}
</style>
