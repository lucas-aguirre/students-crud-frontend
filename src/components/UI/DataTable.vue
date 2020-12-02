<template>
  <div>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar Aluno"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <div class="my-2">
        <router-link :to="{ name: 'create-student' }">
          <v-btn depressed color="primary">Cadastrar Aluno</v-btn>
        </router-link>
      </div>
    </v-card-title>
    <div class="dataTable">
      <v-data-table
        :headers="headers"
        :items="students"
        :items-per-page="itemsPerPage"
        hide-default-footer
        item-key="title"
      >
        <template slot="item" slot-scope="props">
          <tr>
            <td>{{ props.item.academicRecord }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.document }}</td>
            <td>{{ props.item.email }}</td>
            <td>
              <router-link
                :to="{
                  name: 'update-student',
                  params: { academicRecord: props.item.academicRecord
                  }
                }"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">mdi-pencil</v-icon>
                  </template>
                  <span>Editar Aluno</span>
                </v-tooltip>
              </router-link>
              <a href="javascript:void(0)" @click="openModal(props.item)">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">mdi-delete</v-icon>
                  </template>
                  <span>Deletar Aluno</span>
                </v-tooltip>
              </a>
            </td>
          </tr>
        </template>
        <template slot="no-results">
          <p>Nenhum aluno encontrado</p>
        </template>
      </v-data-table>
    </div>
    <ModalDeleteStudent
      :student="selectedStudent"
      @closeModal="closeModal"
      @deleteStudent="deleteCurrentStudent"
      v-if="modalDeleteStudent"
    />
  </div>
</template>

<script>
import ModalDeleteStudent from '@/components/Modal/ModalDeleteStudent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['students'],

  components: {
    ModalDeleteStudent,
  },

  data: () => ({
    selectedStudent: null,
    timer: 0,
    search: null,
    headers: [
      { align: 'center', text: 'Registro Acadêmico', sortable: false },
      { align: 'center', text: 'Nome', sortable: false },
      { align: 'center', text: 'CPF', sortable: false },
      { align: 'center', text: 'E-mail', sortable: false },
      { align: 'center', text: 'Ações', sortable: false },
    ],
    itemsPerPage: 50,
  }),

  computed: {
    ...mapGetters(['modalDeleteStudent']),
  },

  created() {
    this.listAllStudents();
  },

  methods: {
    ...mapActions([
      'listStudents',
      'deleteStudent',
      'openModalDeleteStudent',
      'closeModalDeleteStudent',
    ]),

    listAllStudents() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.listStudents({ search: this.search });
      }, 500);
    },

    openModal(student) {
      this.selectedStudent = student;
      this.openModalDeleteStudent();
    },

    closeModal() {
      this.selectedStudent = null;
      this.closeModalDeleteStudent();
    },

    deleteCurrentStudent(student) {
      this.deleteStudent(student).then(() => {
        this.closeModal();
        this.listAllStudents();
      });
    },
  },

  watch: {
    search() {
      this.listAllStudents();
    },
  },
};
</script>

<style scoped>
.dataTable {
  margin-top: 3%;
}
</style>
