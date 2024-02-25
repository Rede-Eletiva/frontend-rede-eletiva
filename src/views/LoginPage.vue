<template>
    <main class="container">
      <img class="pernambuco-tape" src="../assets/pernambuco.svg" >
      <div class="content-left">
            
          <h1 class="title">Rede Eletiva</h1>
        <form @submit.prevent="">
            <div class="input-group">
                <label for="ra">Matrícula</label>
                <input type="text" name="ra">
            </div>

            <div class="input-group">
                <label for="date_birth">Data Nascimento</label>
                <input type="text" name="date_birth">
            </div>
            
            <button type="submit">Entrar</button>
            
        </form>
    </div>
    <div class="content-right"></div>
</main>
</template>


<style scoped>

@media screen and (min-width: 720px) and (max-width: 1280px) {
    
    .pernambuco-tape {
    position: fixed;
    top: 0;
  }

  .container {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  .content-left {
    width: 65%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .content-left .title {
    color: #3182CE;
    font-size: 36px;
    margin-bottom: 20px;
  }

  .content-left form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    width: 100%;
  }

  form .input-group {
    display: flex;
    flex-direction: column;
    color: #737373;
    width: 80%;
    margin-bottom: 15px;
  }

  form .input-group input {
    background: #FFF;
    height: 40px;
    border-radius: 8px;
    border: 3px solid #E8E8E8;
    padding: 0 10px;
    width: 100%;
  }

  .content-left form button {
    background-color: #2B6CB0;
    color: #FFF;
    width: 80%;
    height: 40px;
    border-radius: 8px;
    border: 3px solid #00000029;
    font-size: 14px;
    font-weight: 700;
    margin: 20px 0;
    cursor: pointer;
    transition: 0.3s;
  }

  .content-left form button:hover {
    background-color: #0f4a89;
  }

  .container .content-right {
    width: 35%;
    height: 100%;
    background-image: url("../assets/background-students.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

}
.pernambuco-tape {
    position: fixed;
    top: 0;
}
    .container {
        display: flex;
        width: 100vw;
        height: 100vh;
    }

    .content-left {
        width: 65%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content-left .title {
        color: #3182CE;
        font-size: 72px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
        z-index: 1; 
    }

    .content-left form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 16pt;
        font-weight: 700;
        height: 450px;
        width: 660px;
        z-index: 1;
    }  

    form .input-group {
        display: flex;
        flex-direction: column;
        color: #737373;
        width: 60%;
        margin-bottom: 15px;
    }

    form .input-group input {
        background: #FFF;
        height: 45px;
        border-radius: 8px;
        border: 3px solid #E8E8E8;
    }

    .content-left form button {
        background-color: #2B6CB0;
        color: #FFF;
        width: 60%;
        height: 45px;
        border-radius: 8px;
        border: 3px solid #00000029;
        font-size: 16pt;
        font-weight: 700;
        margin: 60px 0;
        z-index: 1;
        cursor: pointer;
        transition: 0.3s;
    }

    .content-left form button:hover {
        background-color: #0f4a89;
    }

    
    .container .content-right {
        width: 35%;
        background-image: url("../assets/background-students.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left bottom;
    }
</style> 