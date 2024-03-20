<template>
    <div class="container">
        <img src="../assets/PRINCIPAL ADM.svg" class="sub">
        <div class="container-img">
            <img src="../assets/PAINEL ELETIVA.svg">
            <img src="../assets/PAINEL ALUNO.svg">
        </div>
    </div>
</template>
<script>
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 87vh;
}

.sub {
    align-self: center;
    margin-bottom: 43px;
}

.container-img {
    width: 63%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container-img img {
    width: 45%;
    height: auto;
}
</style>