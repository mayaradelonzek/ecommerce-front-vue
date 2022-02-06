<template>
  <div>
    <b-row>
      <b-col>
        <h3>Todos os fornecedores</h3>        
        
      </b-col>
      <b-col md="2" class="mb-3">
        <b-button variant="success">
          <b-link to="/novo-fornecedor" class="link-button">Novo fornecedor</b-link>
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-list-group>
        <b-list-group-item>
          <b-row>
            <b-col>Nome fantasia</b-col>
            <b-col>CNPJ</b-col>
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
        <b-list-group-item v-for="(fornecedor, index) in fornecedores" :key="index">
          <b-row>
            <b-col>{{ fornecedor.nomeFantasia }}</b-col>
            <b-col>{{ fornecedor.cnpj }}</b-col>
            <b-col>{{ fornecedor.contato.email }}</b-col>
            <b-col>{{ fornecedor.contato.telefone }}</b-col>
            <b-col>{{ fornecedor.endereco.rua }}</b-col>
            <b-col>{{ fornecedor.endereco.numero }}</b-col>
            <b-col>{{ fornecedor.endereco.complemento }}</b-col>
            <b-col>{{ fornecedor.endereco.bairro }}</b-col>
            <b-col>{{ fornecedor.endereco.cep }}</b-col>
            <b-col>{{ fornecedor.endereco.cidade }}</b-col>
            <b-col>{{ fornecedor.endereco.estado }}</b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Fornecedores",
  data: function () {
    return {
      fornecedores: [],      
    };
  },
  methods: {
    getFornecedores: async function () {
      const result = await fetch("http://localhost:8080/fornecedores/")
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
        this.fornecedores = result;
      }
    },
  },
  created: function () {
    this.getFornecedores();
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
