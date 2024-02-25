<template>
    <div class="trace"></div>
    <div class="Tela-Principal">
        <h1>Rede Eletiva</h1>
        <img class="photo" src="../assets/image 12.svg">
        <img class="fita" src="../assets/Container right (1).svg">
        <div class="matricula">
            <h2>matricula</h2>
            <input type="number" placeholder="1234567" />
        </div>

        <div class="Data-N">
            <h2>Data Nascimento</h2>
            <input type="date" placeholder="01/02/2000" />
        </div>

        <button class="bnt-login">
            <span>Entrar</span>
        </button>
        <h3>Esqueci a Senha</h3>
    </div>
</template>

<style scoped>
.photo {
    position: relative;
    float: right;
    margin-right: 50px;
    left: 5%;
    width: 40%;
}

.fita {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 30%;
    z-index: -10;
}

.Tela-Principal {
}
</style>