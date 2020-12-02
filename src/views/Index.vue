<template>
  <DataTable :students="students" />
</template>

<script>
import DataTable from '@/components/UI/DataTable.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    DataTable,
  },

  computed: {
    ...mapGetters([
      'students',
    ]),
  },
};
</script>
