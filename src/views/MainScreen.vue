<template>
  <div class="header">
    <h1 class="title">Rede Eletiva</h1>

    <div class="select-group">
      <label for="select_classe">Selecionar Turma</label>
      <select name="select_classe">
        <option value=""></option>
      </select>
    </div>
  </div>

  <div class="container">
    <div class="content" v-for="elective in electives" :key="elective.key">
      <div class="context">
        <h1>{{ elective.code_elective }} - {{ elective.name_elective }}</h1>
        <h2>Professor: Juninho</h2>
      </div>

      <div class="context-right">
        <h3>{{ elective.filled_vacancies }}/ {{ elective.total_vacancies }}</h3>
        <button type="submit">Selecionar</button>
      </div>
    </div>
    <button class="confirm-button" type="submit">Confirmar</button>
  </div>
  <img src="../assets/pernambucoMain.svg" class="pernambuco-main" />
</template>

<script>

import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      students: [],
      electives: [],
    };
  },
  mounted() {
    this.fetchElectives();
  },
  methods: {
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
      }
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

label {
  padding-right: 20px;
  font-weight: 700;
  color: #737373;
}
select {
  width: 100px;
  height: 25px;
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

button {
  width: 150px;
  height: 35px;
  border-radius: 8px;
  font-weight: 700;
  background: #2b6cb0;
  color: #fff;
  border: 3px solid #00000063;
}

.confirm-button {
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
