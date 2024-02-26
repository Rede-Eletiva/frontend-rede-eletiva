<template>
  <div class="header">
    <h1 class="title">Rede Eletiva</h1>
    <h2 class="name-title" v-if="student.length > 0">{{ student[0].name }}</h2>
  </div>
  
  <div class="container">
    <div class="loading-container" v-if="electivesLoading" >
      <i class="fa-solid fa-circle-notch fa-spin"></i>
    </div>
    <div v-else class="content" v-for="elective in electives" :key="elective.key">
      <div class="context">
        <h1>{{ elective.code_elective }} - {{ elective.name_elective }}</h1>
        <h2>Professor: {{ elective.name_teacher }}</h2>
      </div>

      <div class="context-right">
        <h3>{{ elective.filled_vacancies }}/ {{ elective.total_vacancies }}</h3>
        <button
          @click="selectElective(elective.code_elective)"
          type="submit"
          :class="
            student.length > 0 &&
            elective.code_elective === student[0].code_elective
              ? 'selected-on'
              : 'selected-off'
          "
        >
          {{
            student.length > 0 &&
            elective.code_elective === student[0].code_elective
              ? "Selecionado"
              : "Selecionar"
          }}
        </button>
      </div>
    </div>
    <button class="confirm-button" type="submit" @click="confirmSelection">
      Confirmar
    </button>
    <button
      v-show="student.length > 0 && student[0].code_elective"
      class="replace-button"
      @click="toggleButtonReplace"
    >
      Trocar Eletiva
    </button>
  </div>
  <img src="../assets/pernambucoMain.svg" class="pernambuco-main" />
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      electivesLoading: true,
      student: [],
      electives: [],
      selectedElective: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.fetchElectives();
    }, 10000);

    this.getDataStudent();
  },
  methods: {
    async confirmSelection() {
      try {
        const token = Cookies.get("_myapp_token");
        await axios.post(
          "https://backend-rede-eletiva-ete.onrender.com/api/v1/students/register",

          { code_elective: this.student[0].code_elective },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.log(error.message);
      } finally {
        this.fetchElectives();
      }
    },
    selectElective(code_elective) {
      if (!this.student[0].code_elective) {
        this.student[0].code_elective = code_elective;
      }
    },
    async fetchElectives() {
      try {
        const token = Cookies.get("_myapp_token");

        const response = await axios.get(
          "https://backend-rede-eletiva-ete.onrender.com/api/v1/discipline/list-electives",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.electives = response.data;
      } catch (error) {
        console.log(error.message);
      } finally {
        this.electivesLoading = false;
      }
    },
    async getDataStudent() {
      try {
        const token = Cookies.get("_myapp_token");

        const response = await axios.get(
          "https://backend-rede-eletiva-ete.onrender.com/api/v1/students/dataStudent",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.student = response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    toggleButtonReplace() {
      this.student[0].code_elective = "";
    },
  },
};
</script>
<style scoped>
.header {
  width: 100vw;
  height: 150px;
  padding: 20px;
}
.title {
  color: #2b6cb0;
  font-size: 65px;
}

.name-title {
  font-weight: 700;
  color: #737373;
}

label {
  padding-right: 20px;
  font-weight: 700;
  color: #737373;
}

.container {
  margin-left: 20px;
  width: 96vw;
  min-height: 76vh;
  max-height: 76vh;
  background: #fff;
  border: #7373736a 3px solid;
  padding: 15px;
  border-radius: 8px;
  overflow-y: auto;
}
.loading-container {
  width: 100%;
  height: 470px;
  display: flex;
  color: #3182ce;
  align-items: center;
  justify-content: center;
  font-size: 32pt;
}
.container .content {
  background: #3182ce5e;
  width: 80vw;
  height: 150px;
  border: 3px solid #73737382;
  display: flex;
  padding: 15px 8px;
  justify-content: space-between;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
}

.content .context h1 {
  font-size: 30px;
  color: #3182ce;
}
.content .context h2 {
  font-size: 20px;
  color: #000000b1;
}

.context-right {
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
}

.selected-off {
  width: 150px;
  height: 35px;
  border-radius: 8px;
  font-weight: 700;
  background: #2b6cb0;
  color: #fff;
  border: 3px solid #00000063;
  cursor: pointer;
  transition: 0.3s;
}

.selected-off:hover {
  background-color: #0f4a89;
}

.selected-on {
  width: 150px;
  height: 35px;
  border-radius: 8px;
  font-weight: 700;
  background: #b3af3a9e;
  color: #fff;
  border: 3px solid #00000063;
  cursor: pointer;
  transition: 0.3s;
}

.replace-button:hover {
  color: #000;
  background-color: #ddd72ebe;
}

.confirm-button {
  width: 150px;
  height: 35px;
  border-radius: 8px;
  font-weight: 700;
  border: 3px solid #00000063;
  position: fixed;
  bottom: 5%;
  right: 5%;
  background-color: #3d7e3376;
  cursor: pointer;
  transition: 0.3s;
}

.confirm-button:hover {
  background-color: #3d7e33d0;
}
.replace-button {
  width: 150px;
  height: 35px;
  border: 3px solid #00000063;
  border-radius: 8px;
  font-weight: 700;
  position: fixed;
  bottom: 5%;
  right: 15%;
  background-color: #b3af3a9e;
  cursor: pointer;
  transition: 0.3s;
}

.replace-button:hover {
  color: #000;
  background-color: #ddd72ebe;
}

.pernambuco-main {
  position: fixed;
  bottom: 0;
  right: -15%;
  z-index: -1;
}

.container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #cccccc;
}

.container::-webkit-scrollbar-track {
  background: #cccccc;
}
.container::-webkit-scrollbar-track-piece {
  background: #cccccc;
}
.container::-webkit-scrollbar-thumb {
  background: #2b6cb0;
  border-radius: 5px;
}
</style>
