<template>
  <div>
    <b-container class="mt-5">
      <Clientes />
    </b-container>
    <b-container class="mt-5">
      <Fornecedores />
    </b-container>
  </div>
</template>

<script>
import Clientes from "../pages/Clientes.vue";
import Fornecedores from "../pages/Fornecedores.vue";
export default {
  components: { Clientes, Fornecedores },
  name: "Home",
};
</script>
