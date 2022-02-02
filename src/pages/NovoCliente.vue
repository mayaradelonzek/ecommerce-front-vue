<template>
<div>
    <b-row align-h="center">
      <ClienteForm/>
    </b-row>
  </div>  
</template>

<script>
import ClienteForm from '../components/ClienteForm.vue'
export default {
  name: "NovoCliente",
  components: {
    ClienteForm,
  }
};
</script>
<style >
</style>