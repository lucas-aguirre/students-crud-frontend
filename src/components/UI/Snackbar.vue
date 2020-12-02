<template>
  <v-snackbar
    v-model="snackbar"
    bottom
    right
    multi-line
    :timeout="5000"
    :color="color"
  >
    {{ snackbarValues.message }}
    <v-btn dark text @click="closeCurrentSnackbar()">X</v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    snackbar: false,
    color: null,
  }),

  computed: {
    ...mapGetters(['snackbarState', 'snackbarValues']),
  },

  methods: {
    ...mapActions(['closeSnackbar']),

    closeCurrentSnackbar() {
      this.closeSnackbar();
    },
  },

  watch: {
    snackbarState() {
      this.color = this.snackbarValues.color === 'success' ? '#4caf50' : '#ff5252';
      this.snackbar = this.snackbarState;
    },
  },
};
</script>

<style>
</style>
