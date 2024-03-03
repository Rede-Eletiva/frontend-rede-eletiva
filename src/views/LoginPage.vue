<template>
  <main class="container">
    <img class="pernambuco-mobile" src="../assets/pernambuco-mobile.svg" />
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
          <input type="date" v-model="date_birth" name="date_birth" />
        </div>

        <button type="submit">
          <span v-if="!loginLoading">Entrar</span>
          <span v-else>
            <i class="fa-solid fa-circle-notch fa-spin"></i>
          </span>
        </button>
      </form>
    </div>
    <div class="content-right"></div>
    <div class="footer"></div>
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
      loginLoading: false,
    };
  },
  methods: {
    async submit() {
      this.loginLoading = true;
      const payload = {
        ra: this.ra,
        date_birth: this.date_birth,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/students/login",
          payload
        );
        const { token } = response.data;
        if (response.data.success) {
          Cookie.set("_myapp_token", token);
          this.$router.push("/");
        }
      } catch (error) {
        console.error("Error during login:", error);
      } finally {
        this.loginLoading = false;
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .content-left {
    width: 100% !important;
  }

  .content-left .title {
    font-size: 36pt !important;
  }

  .content-left form {
    width: 100% !important;
  }

  .content-left form .input-group {
    width: 80% !important;
  }
  
  .content-right {
    display: none;
  }

  .container .pernambuco-tape {
    display: none;
  }

  .container .pernambuco-mobile {
    display: block !important;
    position: absolute;
    top: 0;
    right: 0px;
  }

  .footer {
    position: absolute;
    bottom: 0;
  }
}

.container .pernambuco-mobile {
  display: none;
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
  font-size: 12pt;
  font-weight: 700px;
  padding: 8px;
  color: #737373;
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