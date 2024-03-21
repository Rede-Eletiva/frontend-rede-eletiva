<template>
  <Template>
    <div class="content">
      <h1>Gestão de Eletivas</h1>
      <div
        v-for="(electiveGroup, index) in electives"
        :key="index"
        class="content-table"
      >
        <div class="controls">
          <i class="fa-solid fa-circle-plus"></i>
          <h2>{{ index }} ano</h2>
          <i class="fa-solid fa-toggle-on"></i>
        </div>
        <table>
          <tr>
            <th>Eletivas</th>
            <th>Professor</th>
            <th>Vagas</th>
            <th>Ação</th>
          </tr>
          <tr
            v-for="(elective, electiveIndex) in electiveGroup"
            :key="electiveIndex"
            class="border-data"
          >
            <td>{{ elective.name_elective }}</td>
            <td>{{ elective.name_teacher }}</td>
            <td>{{ elective.filled_vacancies }}/{{ elective.total_vacancies }}</td>
            <td>
              <i class="fa-solid fa-delete-left"></i>
              <i class="fa-regular fa-pen-to-square"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </Template>
</template>
<script>
import Template from "@/components/TemplateADM";
import axios from "axios";
export default {
  components: {
    Template,
  },

  data() {
    return {
      electives: [],
    };
  },

  mounted() {
    this.fetchElective();
  },

  methods: {
    async fetchElective() {
      try {
        const response = await axios.get(
          "https://backend-rede-eletiva-ete.onrender.com/api/v1/administrator/list-electives"
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
.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.content h1 {
  color: #374c9b;
  font-size: 18pt;
  margin: 25px 0;
}

.content-table {
  width: 80%;
  margin-bottom: 55px;
}

.content-table .controls {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 25px;
}

.content-table .controls i {
  font-size: 18pt;
  color: #737373;
  
}

.fa-delete-left {
    font-size: 14pt;
    padding: 0 15px;
    transition: 0.3s;
}

.fa-delete-left:hover {
    color: #ff00007d;
}

.fa-pen-to-square {
    font-size: 14pt;
    padding: 0 15px;
    transition: 0.3s;
}

.fa-pen-to-square:hover {
    color: #edd445;
    
}

.content-table .controls h2 {
  color: #737373;
  font-weight: 600;
  text-transform: uppercase;
}

.content-table .controls .fa-toggle-on {
  font-size: 25pt;
  color: #6bd15a;
}

.content-table table {
  width: 100%;
  background: #374c9b;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  border-spacing: 0 20px;
  box-shadow: 3px 3px 3px #0000008b;
}

table th {
  text-transform: uppercase;
  color: #f3f3f3;
  padding: 8px;
  font-weight: 600;
}

table .border-data {
  background: #eef5ff;
}

.border-data td {
  padding: 15px;
}
</style>