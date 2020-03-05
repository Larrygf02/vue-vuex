<template>
  <section>
    <h3>Tareas</h3>
    <ul>
      <li v-for="tarea in getTareas" :key="tarea.id">{{ tarea.name }}</li>
    </ul>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTareas"])
  }
};
</script>