<template>
  <Template>
    <div class="content">
      <h1>Gestão de Alunos</h1>

      <div class="progress-bar">
        <div class="registered" style="width: 35%">
          55%
          <div class="status">Cadastrado</div>
        </div>
        <div class="no-registered" style="width: 65%">
          45%
          <div class="status">Não cadastrado</div>
        </div>
      </div>

      <div class="content-table">
        <div class="title-status">
          <h2>Cadastrado</h2>
        </div>
        <table>
          <tr>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Turma</th>
            <th>Ano</th>
            <th>Eletiva</th>
          </tr>
          <tr class="border-data">
            <td>Matrícula</td>
            <td>Nome</td>
            <td>Turma</td>
            <td>Ano</td>
            <td>Eletiva</td>
          </tr>
        </table>
        <i class="fa-solid fa-circle-plus"></i>
      </div>
      <div class="btn-files">
        <button class="xlsx">Exportar dados</button>
        <button class="csv">Importar e Atualizar</button>
      </div>
    </div>
  </Template>
</template>
<script>
import Template from "@/components/TemplateADM";
export default {
  components: {
    Template,
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

.fa-circle-plus {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 30pt;
  color: #737373;
  transition: 0.3s;
}
.btn-files {
  width: 80%;
  display: flex;
  justify-content: space-around;
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
</style>
