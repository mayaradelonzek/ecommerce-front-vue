<template>
  <div>
    <b-row>
      <b-col>
        <h3>Todos os clientes</h3>        
        
      </b-col>
      <b-col md="2" class="mb-3">
        <b-button variant="success">
          <b-link to="/novo-cliente" class="link-button">Novo cliente</b-link>
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-list-group>
        <b-list-group-item>
          <b-row>
            <b-col>Nome</b-col>
            <b-col>CPF</b-col>
            <b-col>E-mail</b-col>
            <b-col>Telefone</b-col>
            <b-col>Rua</b-col>
            <b-col>Número</b-col>
            <b-col>Complemento</b-col>
            <b-col>Bairro</b-col>
            <b-col>CEP</b-col>
            <b-col>Cidade</b-col>
            <b-col>Estado</b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item v-for="(cliente, index) in clientes" :key="index">
          <b-row>
            <b-col>{{ cliente.nome }}</b-col>
            <b-col>{{ cliente.cpf }}</b-col>
            <b-col>{{ cliente.contato.email }}</b-col>
            <b-col>{{ cliente.contato.telefone }}</b-col>
            <b-col>{{ cliente.endereco.rua }}</b-col>
            <b-col>{{ cliente.endereco.numero }}</b-col>
            <b-col>{{ cliente.endereco.complemento }}</b-col>
            <b-col>{{ cliente.endereco.bairro }}</b-col>
            <b-col>{{ cliente.endereco.cep }}</b-col>
            <b-col>{{ cliente.endereco.cidade }}</b-col>
            <b-col>{{ cliente.endereco.estado }}</b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Clientes",
  data: function () {
    return {
      clientes: [],      
    };
  },
  methods: {
    getClientes: async function () {
      const result = await fetch("http://localhost:8080/clientes/")
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.clientes = result;
      }
    },
  },
  created: function () {
    this.getClientes();
  },
};
</script>

<style>
.link-button {
  text-decoration: none;
  color: #fff;
}

.link-button:hover {
  text-decoration: none;
  color: #fff;
}
</style>
