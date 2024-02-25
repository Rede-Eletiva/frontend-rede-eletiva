<template>
    <div class="trace"></div>
<div class="Tela-Principal">
    <h1>Rede Eletiva</h1>
    <div class="matricula">
        <h2>matricula</h2>
        <input 
        type="number"
        placeholder="1234567"
      />
    </div>
    
    <div class="Data-N">
        <h2>Data Nascimento</h2>
        <input 
        type="date"
        placeholder="01/02/2000"
      />
    </div>

    <button class="bnt-login">
    <span>Entrar</span>
    </button>
    <h3>Esqueci a Senha</h3>
    </div>

</template>

<style scoped>
.Tela-Principal h1 {
    font-style: poppins;
    

}

.bnt-login {
    width: 20%;
    padding: 11px;
    border-radius: 18px;
    
   
  }
 
body {
    
    background-color: #EEF5FF;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

}

.Tela-Principal {

    font-style: poppins;

}

.trace{
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 10%;
    background-color: #ff8608;
    clip-path: trace(50% at bottom right);
}
</style>