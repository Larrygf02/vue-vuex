<template>
  <section>
    <h1>Cantidad {{ cantidad }}</h1>
    <button @click="aumentarAsync(1)">Aumentar</button>
    <button @click="reducirAsync({ cantidad: 1 })">Reducir</button>
    <h3>Frutas</h3>
    <ul>
      <li v-for="fruta in getFrutas" :key="fruta.id">
        {{ fruta.nombre }}
      </li>
    </ul>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getFrutas", "cantidad"])
  },
  methods: mapActions(["aumentarAsync", "reducirAsync"])
};
</script>
