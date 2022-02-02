<template>
  <div id="app">
    <Header />
    <b-container class="mt-5">
      <NovoCliente/>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NovoCliente from "./pages/NovoCliente.vue";


export default {
  name: "App",
  components: {
    Header,
    NovoCliente    
  },
};
</script>

<style>
</style>
