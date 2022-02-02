<template>
<div>
    <b-row align-h="center">
      <FornecedorForm/>
    </b-row>
  </div>  
</template>

<script>
import FornecedorForm from '../components/FornecedorForm.vue'
export default {
  name: "NovoFornecedor",
  components: {
    FornecedorForm,
  }
};
</script>
<style >
</style>