<template>
  <Template>
    <div class="content">
      <h1>Gestão de Alunos</h1>
      <div class="container">
        <!-- Barra de progresso -->
        <div
          class="progress-bar"
          v-if="
            data.registeredStudents.length > 0 ||
            data.noRegisteredStudents.length > 0
          "
        >
          <div
            class="registered"
            :style="{ width: data.progress.registered + '%' }"
          >
            {{ data.progress.registered }}%
          </div>
          <div
            class="no-registered"
            :style="{ width: data.progress.no_registered + '%' }"
          >
            {{ data.progress.no_registered }}%
          </div>
        </div>
        <!-- Tabela de alunos cadastrados -->
        <div class="content-table">
          <div class="title-status">
            <h2>Cadastrado</h2>
          </div>
          <table>
            <tr
              v-for="(student, index) in data.registeredStudents"
              :key="index"
              class="border-data"
            >
              <td>{{ student.ra }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.reference_classe }}</td>
              <td>{{ student.module }}</td>
              <td>{{ student.name_elective }}</td>
            </tr>
          </table>
        </div>
        <!-- Tabela de alunos cadastrados -->
        <div class="content-table">
          <div class="title-status">
            <h2>Cadastrado</h2>
          </div>
          <table>
            <tr
              v-for="(student, index) in data.noRegisteredStudents"
              :key="index"
              class="border-data"
            >
              <td>{{ student.ra }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.reference_classe }}</td>
              <td>{{ student.module }}</td>
              <td>{{ student.name_elective }}</td>
            </tr>
          </table>
          <div class="controls">
            <i @click="toggleFilterModal" class="fa-solid fa-filter"></i>
            <i @click="toggleAddModal" class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
        <!-- Botões para exportar/importar dados -->
        <div class="btn-files">
          <button @click="downloadExcel" class="xlsx">Exportar dados</button>
          <button class="csv">Importar e Atualizar</button>
        </div>
      </div>
    </div>
  </Template>
  <Modal @close="toggleFilterModal" :modalActive="filterModalActive">
  <div class="modal-content">
    <h1>Filtrar Alunos</h1>
    <form @submit.prevent="filterStudents">
      <h2 class="title">Turmas</h2>
      <div class="input-columns">
        <div class="column" v-for="(item, index) in itens.reference_classe" :key="index">
          <input type="checkbox" :id="item.reference_classe" :name="item.reference_classe" v-model="item.checked" />
          <label>{{ item.reference_classe }}</label>
        </div>
      </div>
      <h2 class="title">Ano</h2>
      <div class="input-columns">
        <div class="column" v-for="(item, index) in itens.module" :key="index">
          <input type="checkbox" :id="item.module" :name="item.module" v-model="item.checked" />
          <label>{{ item.module }}</label>
        </div>
      </div>
      <button class="button cancel" type="button" @click="toggleFilterModal">Cancelar</button>
      <button class="button filter" type="submit" @click="filterStudents">Aplicar</button>
    </form>
  </div>
</Modal>


  <Modal @close="toggleAddModal" :modalActive="addModalActive">
    <div class="modal-content">
      <h1>Adicionar Aluno</h1>

      <form @submit.prevent="addStudents">
        <div class="input-group">
          <label for="ra">Matrícula</label>
          <input type="text" name="ra" v-model="data.ra" />
        </div>

        <div class="input-group">
          <label for="name">Nome</label>
          <input type="text" name="name" v-model="data.name" />
        </div>

        <div class="input-group">
          <label for="date_birth">Data de Nascimento</label>
          <input type="date" name="date_birth" v-model="data.date_birth" />
        </div>

        <div class="input-group">
          <label for="reference_classe">Classe de Referência</label>
          <input type="text" name="reference_classe" v-model="data.reference_classe" />
        </div>

        <div class="input-group">
          <label for="module">Módulo</label>
          <select name="module" v-model="data.module">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
          </select>
        </div>

        <button class="button" type="submit" @click="addStudents">
          Adicionar
        </button>
      </form>
    </div>
  </Modal>
</template>

<script>
import Template from "@/components/TemplateADM";
import axios from "axios";
import { ref } from "vue";
import Modal from "@/components/ModalService.vue";

export default {
  components: {
    Template,
    Modal,
  },

  setup() {
    const addModalActive = ref(false);
    const filterModalActive = ref(true);
    const itens = ref({
      reference_classe: {},
      module: {},
    });

    const data = ref({
      progress: {
        registered: 0,
        no_registered: 0,
      },
      registeredStudents: [],
      noRegisteredStudents: [],
      ra: "",
      name: "",
      date_birth: "",
      reference_classe: "",
      module: "",
    });

    const fetchStudents = async (referenceClasseFilters, moduleFilters) => {
      try {
        const response = await axios.post(
          "https://backend-rede-eletiva-ete.onrender.com/api/v1/administrator/list-students",
          {
            reference_classe: referenceClasseFilters.reduce((acc, curr) => {
              acc[curr] = true;
              return acc;
            }, {}),
            module: moduleFilters.reduce((acc, curr) => {
              acc[curr] = true;
              return acc;
            }, {})
          }
        );

        data.value.registeredStudents = response.data.registeredStudents;
        data.value.noRegisteredStudents = response.data.noRegisteredStudents;
        data.value.progress = response.data.progress;

      } catch (error) {
        console.log(error.message);
      }
    };

    const downloadExcel = async () => {
      try {
        const response = await axios.get(
          "https://backend-rede-eletiva-ete.onrender.com/api/v1/administrator/download-excel",
          {
            responseType: "blob",
          }
        );

        const contentDisposition = response.headers["content-disposition"];
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(contentDisposition);

        const now = new Date();
        const formattedDate = `${now.getFullYear()}${(now.getMonth() + 1)
          .toString()
          .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}_${now
          .getHours()
          .toString()
          .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
          .getSeconds()
          .toString()
          .padStart(2, "0")}`;

        let fileName = `relatorio_rede_eletiva_${formattedDate}`;

        if (matches != null && matches[1]) {
          fileName = matches[1].replace(/['"]/g, "");
        }

        const url = window.URL.createObjectURL(new Blob([response.data]));

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);

        link.click();

        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.log(error.message);
      }
    };

    const toggleAddModal = () => {
      addModalActive.value = !addModalActive.value;
    };

    const toggleFilterModal = () => {
      filterModalActive.value = !filterModalActive.value;
    };

    const itensFilter = async () => {
      try {
        const response = await axios.get(
          "https://backend-rede-eletiva-ete.onrender.com/api/v1/administrator/itens-students"
        );

        const referenceClasseItems = response.data.reference_classe.map(
          (item) => {
            return { reference_classe: item.reference_classe, checked: false };
          }
        );

        const moduleItems = response.data.module.map((item) => {
          return { module: item.module, checked: false };
        });

        itens.value.reference_classe = referenceClasseItems;
        itens.value.module = moduleItems;
      } catch (error) {
        console.log(error.message);
      }
    };

    const filterStudents = async () => {
      try {
        const referenceClasseFilters = itens.value.reference_classe.filter(item => item.checked).map(item => item.reference_classe);
        const moduleFilters = itens.value.module.filter(item => item.checked).map(item => item.module);

        await fetchStudents(referenceClasseFilters, moduleFilters);
        toggleFilterModal();

      } catch (error) {
        console.log(error.message);
      }
    };

    const addStudents = async () => {
      try {
        const response = await axios.post(
          "https://backend-rede-eletiva-ete.onrender.com/api/v1/administrator/add-students",
          {
            ra: data.value.ra,
            name: data.value.name,
            date_birth: data.value.date_birth,
            reference_classe: data.value.reference_classe,
            module: data.value.module,
          }
        );

        console.log(response.data); 

        data.value.ra = "";
        data.value.name = "";
        data.value.date_birth = "";
        data.value.reference_classe = "";
        data.value.module = "";

        toggleAddModal(); 

        await fetchStudents();
      } catch (error) {
        console.log(error.message);
      }
    };


    fetchStudents();
    itensFilter();
    return {
      data,
      downloadExcel,
      addModalActive,
      toggleAddModal,
      filterModalActive,
      toggleFilterModal,
      itensFilter,
      itens,
      filterStudents,
      addStudents
    };
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
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.progress-bar {
  width: 500px;
  height: 40px;
  margin: 60px 0;
  position: relative;
  color: #f3f3f3;
  font-weight: 600;
}

.progress-bar .registered {
  background-color: #6bd15a;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-bar .no-registered {
  background-color: #d93131;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.status {
  position: absolute;
  top: -27px;
  color: #737373;
}

.content-table {
  width: 80%;
  margin-bottom: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-table .title-status {
  text-align: center;
  margin: 15px 0;
  color: #737373;
  font-size: 12pt;
}

.content-table .title-status h2 {
  font-weight: 600;
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

.content-table table::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #cccccc;
}

.content-table table::-webkit-scrollbar-track {
  background: #cccccc;
}

.content-table table::-webkit-scrollbar-track-piece {
  background: #cccccc;
}

.content-table table::-webkit-scrollbar-thumb {
  background: #2b6cb0;
  border-radius: 5px;
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

.controls {
  position: fixed;
  bottom: 20px;
  font-size: 30pt;
  color: #737373;
  transition: 0.3s;
  display: flex;
  width: 95vw;
  justify-content: space-between;
}
.btn-files {
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 48px;
}

.btn-files button {
  width: 500px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: #737373;
  color: #f3f3f3;
  font-weight: 600;
  transition: 0.3s;
}

.btn-files .xlsx:hover {
  background: #efce0e;
}

.btn-files .csv:hover {
  background: #ff00007d;
}

.fa-circle-plus:hover {
  color: #6bd15a;
}
.fa-filter:hover {
  color: #2b6cb0;
}

.modal-content h1 {
  color: #263a7f;
  text-align: center;
  padding: 10px;
}
.modal-content h1 {
  color: #263a7f;
  text-align: center;
  padding: 10px;
}
.input-group {
  margin-bottom: 10px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #374c9b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #263a7f;
}

.button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #374c9b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #263a7f;
}

</style>


