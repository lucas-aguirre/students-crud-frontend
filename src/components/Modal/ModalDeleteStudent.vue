<template>
  <v-row justify="center">
    <v-dialog v-model="modalDeleteStudent" max-width="480" persistent>
      <v-card>
        <br />
        <v-card-title class="headline">Tem certeza que deseja excluir o aluno?</v-card-title>
        <br />
        <v-card-text>
          <p>Registro Acadêmico: {{student.academicRecord}}</p>
          <p>Nome do Aluno: {{student.name}}</p>
          <p>E-mail do Aluno: {{student.email}}</p>
          <p>CPF do Aluno: {{student.document}}</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey lighten-1" text @click="closeModal">Cancelar</v-btn>

          <v-btn color="red darken-1" text @click="deleteCurrentStudent">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ['student'],

  data: () => ({
    modalDeleteStudent: true,
  }),

  methods: {
    closeModal() {
      this.$emit('closeModal');
    },

    deleteCurrentStudent() {
      this.$emit('deleteStudent', this.student);
    },
  },
};
</script>

<style>
</style>
