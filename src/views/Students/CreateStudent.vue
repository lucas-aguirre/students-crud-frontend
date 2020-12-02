<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" no-gutters>
        <v-flex xs12 md6 lg5>
          <v-toolbar-title>Cadastrar Aluno</v-toolbar-title>
          <StudentForm @submitForm="createNewStudent" />
        </v-flex>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import StudentForm from '@/components/Students/StudentForm.vue';

export default {
  components: {
    StudentForm,
  },

  methods: {
    ...mapActions(['createStudent']),

    createNewStudent(student) {
      this.createStudent(student).finally(() => {
        this.backToHome();
      });
    },

    backToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.buttons {
  margin-top: 5%;
}
</style>
