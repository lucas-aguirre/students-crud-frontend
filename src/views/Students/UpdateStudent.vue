<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" no-gutters>
        <v-flex xs12 md6 lg5>
          <v-toolbar-title>Atualizar Aluno</v-toolbar-title>
          <StudentForm @submitForm="updateCurrentStudent" :student="student" />
        </v-flex>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import StudentForm from '@/components/Students/StudentForm.vue';

export default {
  components: {
    StudentForm,
  },

  created() {
    const { academicRecord } = this.$route.params;

    if (!academicRecord) {
      this.backToHome();
    }

    this.findStudent({ academicRecord });
  },

  computed: {
    ...mapGetters(['student']),
  },

  methods: {
    ...mapActions(['findStudent', 'updateStudent']),

    updateCurrentStudent(student) {
      this.updateStudent(student).then(() => {
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
