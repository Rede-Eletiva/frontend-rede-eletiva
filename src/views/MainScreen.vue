<template>
    <h1 class="name">Rede Eletiva</h1>
    <div class="select">
        <h1>Selecione a turma:</h1>
            <input
            type="select"
            name="id_adm"
            placeholder="1 ANODS - A"
          />  
    </div>
    <div class="container">
        <div class="space1">
            <h1>Eletiva 1 - Transformações Digitais e Novas Tecnologias</h1>
            <h2>Professor: Juninho</h2>
            <h3>4/45</h3>
        </div>
        <div class="space2">
            <h1>Eletiva 2 - Consumo e Desenvolvimento no Mercado de Trabalho</h1>
            <h2>Professora: Joaninha</h2>
            <h3>10/45</h3>
        </div>
        <div class="space3">
            <h1>Eletiva 3 - Sociologia e suas Novas Descobertas</h1>
            <h2>Professora: Ana Clara</h2>
            <h3>5/45</h3>
        </div>
        <div class="space4">
            <h1>Eletiva 4 - Jogos de Quadra</h1>
            <h2>Professor: Diego</h2>
            <h3>39/45</h3>
        </div>
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>

  .name{
    color: #2B6CB0;
    font-family: 'Poppins', sans-serif;
    font-size: 60px;
    padding: 15px 30px;
  }

  .select {
    background-color: blue;
    font-family: 'Poppins';
    padding: 15px 30px;
    display: flex;
  }
  .container {
    width: 99%;
    padding: 15px 30px;
  }

  .space1{
    background-color: #d9eafa;
    width: 70%;
    padding: 15px 30px;
    color: #061b30;
    font-family: 'Poppins', sans-serif;
  }

  .space1 > h1 {
    font-family: 'Poppins', sans-serif;
    border: 3px solid black;
    color: #3182CE;
  }
  .space2{
    background-color: pink;
    width: 70%;
    opacity: 50%;
    padding: 15px 30px;
  }

  .space3 {
    background-color: blueviolet;
    width: 70%;
    opacity: 50%;
    padding: 15px 30px;
  }

  .space4 {
    background-color: chocolate;
    width: 70%;
    opacity: 50%;
    padding: 15px 30px;
  }

  </style>
  