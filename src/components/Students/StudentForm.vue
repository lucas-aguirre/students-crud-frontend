<template>
  <v-form ref="form" lazy-validation v-model="validForm">
    <v-text-field v-model="form.name" label="Nome" :rules="nameRules"></v-text-field>

    <v-text-field v-model="form.email" label="E-mail" :rules="emailRules"></v-text-field>

    <v-text-field
      v-model="form.academicRecord"
      :disabled="student != null"
      label="Registro Acadêmico"
      :rules="academicRecordRules"
      required
    ></v-text-field>

    <v-text-field
      return-masked-value
      v-model="form.document"
      :disabled="student != null"
      label="CPF"
      required
      :rules="documentRules"
    ></v-text-field>

    <div class="buttons">
      <v-btn class="mr-4" @click="$router.go(-1)">Cancelar</v-btn>
      <v-btn color="primary" @click="submit()">Salvar</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  props: ['student'],

  data: () => ({
    validForm: true,
    form: {
      academicRecord: null,
      name: null,
      email: null,
      document: null,
    },

    nameRules: [
      (value) => !!value || 'Campo obrigatório.',
      (value) => (value && value.length >= 5) || 'O nome deve conter pelo menos 5 caracteres',
      (value) => (value && value.length <= 100) || 'O nome deve conter no máximo 100 caracteres',
    ],

    emailRules: [
      (value) => !!value || 'Campo obrigatório.',
      (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'E-mail inválido.';
      },
    ],

    academicRecordRules: [(value) => !!value || 'Campo obrigatório.'],

    documentRules: [
      (value) => !!value || 'Campo obrigatório.',
      (value) => (value && value.length === 11) || 'O CPF deve conter 11 caracteres',
    ],
  }),

  methods: {
    validate() {
      const validForm = this.$refs.form.validate();

      if (validForm) {
        this.$emit('submitForm', this.form);
      }
    },

    submit() {
      this.validate();
    },
  },

  watch: {
    student() {
      if (this.student) {
        const { student } = this;

        this.form.academicRecord = student.academicRecord;
        this.form.name = student.name;
        this.form.email = student.email;
        this.form.document = student.document;
      }
    },
  },
};
</script>

<style>
</style>
