<template>
  <main class="container">
    <img class="pernambuco-tape" src="../assets/pernambuco.svg" />
    <div class="content-left">
      <h1 class="title">Rede Eletiva</h1>
      <form @submit.stop.prevent="submit">
        <div class="input-group">
          <label for="ra">Matrícula</label>
          <input v-model="ra" type="text" name="ra" />
        </div>

        <div class="input-group">
          <label for="date_birth">Data Nascimento</label>
          <input v-model="date_birth" type="text" name="date_birth" />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
    <div class="content-right"></div>
  </main>
</template>

<script>
import axios from "axios";
import Cookie from "js-cookie";

export default {
  data() {
    return {
      ra: "",
      date_birth: "",
    };
  },
  methods: {
    async submit() {
      const payload = {
        ra: this.ra,
        date_birth: this.date_birth,
      };

      try {
        const response = await axios.post(
          "https://backend-rede-eletiva-ete.onrender.com/api/v1/students/login",
          payload
        );
        const { token } = response.data;
        if(response.data.success) {
          Cookie.set("_myapp_token", token);
          this.$router.push("/");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  },
};
</script>

<style scoped>
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
  color: #3182ce;
  font-size: 72px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 1;
}

.content-left form {
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
  background: #fff;
  height: 45px;
  border-radius: 8px;
  border: 3px solid #e8e8e8;
}

.content-left form button {
  background-color: #2b6cb0;
  color: #fff;
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