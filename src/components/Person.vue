<template>
  <section>
    <h3>Personas</h3>
    <ul>
      <li v-for="person in getPersons" :key="person.id">{{ person.name }}</li>
    </ul>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPersons"])
  }
};
</script>