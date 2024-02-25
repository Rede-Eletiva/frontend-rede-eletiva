<template>
    <h1 class="name">Rede Eletiva</h1>
    <svg class="fitas" width="1539" height="1080" viewBox="0 0 1539 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line opacity="0.49" y1="-13" x2="2217.85" y2="-13"
            transform="matrix(-0.451533 0.892255 -0.994199 -0.107555 1558.03 -41.7339)" stroke="#FF0000"
            stroke-width="26" />
        <line opacity="0.49" y1="-300" x2="2217.85" y2="-300"
            transform="matrix(-0.451533 0.892255 -0.994199 -0.107555 1579.31 -30.3713)" stroke="#0500FF"
            stroke-width="600" />
        <line opacity="0.49" y1="-13" x2="2217.77" y2="-13"
            transform="matrix(-0.45145 0.892296 -0.994182 -0.107716 1497.15 -19.2368)" stroke="#24FF00" stroke-width="26" />
        <line opacity="0.49" y1="-13" x2="2217.85" y2="-13"
            transform="matrix(-0.451526 0.892258 -0.994197 -0.107569 1527.59 -30.3379)" stroke="#FFF500"
            stroke-width="26" />
    </svg>
    <div class="select">
        <h1>Selecione a turma:</h1>
        <input type="select" name="id_adm" placeholder="1 ANODS - A" />
    </div>
    <div class="container">
        <div class="space1">
            <h1>Eletiva 1 - Transformações Digitais e Novas Tecnologias</h1>
            <h2>Professor: Juninho</h2>
            <h3>4/45</h3>
            <button @click="handleButtonClick">Botão</button>
        </div>
        <div class="space2">
            <h1>Eletiva 2 - Consumo e Desenvolvimento no Mercado de Trabalho</h1>
            <h2>Professora: Joaninha</h2>
            <h3>10/45</h3>
            <button @click="handleButtonClick">Botão</button>
        </div>
        <div class="space3">
            <h1>Eletiva 3 - Sociologia e suas Novas Descobertas</h1>
            <h2>Professora: Ana Clara</h2>
            <h3>5/45</h3>
            <button @click="handleButtonClick">Botão</button>
        </div>
        <div class="space4">
            <h1>Eletiva 4 - Jogos de Quadra</h1>
            <h2>Professor: Diego</h2>
            <h3>39/45</h3>
            <button @click="handleButtonClick">Botão</button>
        </div>
    </div>
</template>

<script></script>

<style scoped>

.fitas{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 20%;
    z-index: -10;
}
.name {
    color: #2b6cb0;
    font-family: "Poppins", sans-serif;
    font-size: 65px;
    padding: 5px 30px;
}

.select {
    font-family: "Poppins";
    padding: 15px 30px;
    display: flex;
}

.container {
    width: 94%;
    margin: 0 auto;
    padding: 15px 30px;
    background-color: #F2FAFF;
    border-radius: 25px;
}


.space1 {
    background-color: #d9eafa;
    width: 80%;
    min-height: auto;
    padding: 15px 30px;
    color: #061b30;
    font-family: "Poppins", sans-serif;
    margin-bottom: 25px;
    border-radius: 25px;
    text-align: left;
    display: flex;
    justify-content: column;
}

.space1>h1,
.space2>h1,
.space3>h1,
.space4>h1 {
    font-family: "Poppins", sans-serif;
    color: #3182ce;
}

.space1>h2,
.space2>h2,
.space3>h2,
.space4>h2 {
    position: absolute;
    top: 32%;
}

.space1>h3,
.space2>h3,
.space3>h3,
.space4>h3 {
    margin-left: auto;
}

.space2 {
    background-color: #3182ce62;
    opacity: 60%;
    width: 80%;
    padding: 15px 30px;
    margin-bottom: 25px;
    border-radius: 25px;
    font-family: "Poppins", sans-serif;
    margin-bottom: 25px;
    border-radius: 25px;
    text-align: left;
    display: flex;
    justify-content: column;
}

.space3 {
    background-color: #3182ce62;
    width: 80%;
    opacity: 50%;
    padding: 15px 30px;
    margin-bottom: 25px;
    border-radius: 25px;
    font-family: "Poppins", sans-serif;
    margin-bottom: 25px;
    border-radius: 25px;
    text-align: left;
    display: flex;
    justify-content: column;
}

.space4 {
    background-color: #3182ce62;
    width: 80%;
    opacity: 50%;
    padding: 15px 30px;
    margin-bottom: 25px;
    font-family: "Poppins", sans-serif;
    margin-bottom: 25px;
    border-radius: 25px;
    text-align: left;
    display: flex;
    justify-content: column;

}
</style>
