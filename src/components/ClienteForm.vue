<template>
  <div>
    <b-row align-h="center">
      <b-col md="6">
        <h3 class="mb-3">Cadastro de um novo Cliente</h3>               
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="6">
        <b-form-group label="Nome completo">
          <b-form-input :state="nome.validation" type="text" class="mb-3" v-model="nome.valor" />
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="3">
        <b-form-group label="CPF">
          <b-form-input :state="cpf.validation" type="text" class="mb-3" v-model="cpf.valor"/>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group label="Telefone">
          <b-form-input :state="contato.telefone.validation" type="text" class="mb-3" v-model="contato.telefone.valor"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="6">
        <b-form-group label="E-mail">
          <b-form-input :state="contato.email.validation" type="text" class="mb-3" v-model="contato.email.valor"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="6">
        <b-form-group label="Rua">
          <b-form-input :state="endereco.rua.validation" type="text" class="mb-3" v-model="endereco.rua.valor"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="3">
        <b-form-group label="Número">
          <b-form-input :state="endereco.numero.validation" type="text" class="mb-3" v-model="endereco.numero.valor"/>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group label="Bairro">
          <b-form-input :state="endereco.bairro.validation" type="text" class="mb-3" v-model="endereco.bairro.valor"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="3">
        <b-form-group label="Complemento">
          <b-form-input :state="endereco.complemento.validation" type="text" class="mb-3" v-model="endereco.complemento.valor"/>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group label="CEP">
          <b-form-input :state="endereco.cep.validation" type="text" class="mb-3" v-model="endereco.cep.valor"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="3">
        <b-form-group label="Cidade">
          <b-form-input :state="endereco.cidade.validation" type="text" class="mb-3" v-model="endereco.cidade.valor"/>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group label="Estado">
          <b-form-input :state="endereco.estado.validation" type="text" class="mb-3" v-model="endereco.estado.valor"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="6">
        <b-form-group class="mt-3">
          <b-button @click="isSubmit" variant="warning">Salvar</b-button>
          <p>{{ message }}</p>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ClienteForm",
  data: function () {
    return {      
      nome: {
        valor: "",
        validation: null
      },
      cpf: {
        valor: "",
        validation: null
      },
      contato: {
        email: {
          valor: "",
          validation: null
        },
        telefone: {
          valor: "",
          validation: null
        },
      },
      endereco: {
        rua: {
          valor: "",
          validation: null
        },
        numero: {
          valor: "",
          validation: null
        },
        bairro: {
          valor: "",
          validation: null
        },
        complemento: {
          valor: "",
          validation: null
        },
        cep: {
          valor: "",
          validation: null
        },
        cidade: {
          valor: "",
          validation: null
        },
        estado: {
          valor: "",
          validation: null
        },
      },
      message: "",
    };
  },
  methods: {
    createClientes: async function () {
      const newCliente = {        
        nome: this.nome.valor,
        cpf: this.cpf.valor,
        contato: {
          email: this.contato.email.valor,
          telefone: this.contato.telefone.valor
        },
        endereco: {
          rua: this.endereco.rua.valor,
          numero: this.endereco.numero.valor,
          complemento: this.endereco.complemento.valor,
          cep: this.endereco.cep.valor,
          bairro: this.endereco.bairro.valor,
          estado: this.endereco.estado.valor,
          cidade: this.endereco.cidade.valor
        }        
      };

      let isError = [];      
      this.nome.validation = this.isValidate(this.nome.valor, isError);
      this.cpf.validation = this.isValidate(this.cpf.valor, isError);
      this.contato.email.validation = this.isValidate(this.contato.email.valor, isError);
      this.contato.telefone.validation = this.isValidate(this.contato.telefone.valor, isError);
      this.endereco.rua.validation = this.isValidate(this.endereco.rua.valor, isError);
      this.endereco.numero.validation = this.isValidate(this.endereco.numero.valor, isError);
      this.endereco.complemento.validation = this.isValidate(this.endereco.complemento.valor, isError);
      this.endereco.cep.validation = this.isValidate(this.endereco.cep.valor, isError);
      this.endereco.bairro.validation = this.isValidate(this.endereco.bairro.valor, isError);
      this.endereco.estado.validation = this.isValidate(this.endereco.estado.valor, isError);
      this.endereco.cidade.validation = this.isValidate(this.endereco.cidade.valor, isError);

      if (isError.includes(false)) {
        console.log(isError)
        this.message = "Campos obrigatórios não preenchidos"
        return;
      } else {
        this.message = ""
      }

      const result = await fetch("http://localhost:8080/clientes", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newCliente),
      })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {              
        this.nome = {valor: "", validation: null};
        this.contato.email = {valor: "", validation: null};
        this.contato.telefone = {valor: "", validation: null};
        this.endereco.rua = {valor: "", validation: null};
        this.endereco.numero = {valor: "", validation: null};
        this.endereco.complemento = {valor: "", validation: null};
        this.endereco.bairro = {valor: "", validation: null};
        this.endereco.cep = {valor: "", validation: null};
        this.endereco.estado = {valor: "", validation: null};
        this.endereco.cidade = {valor: "", validation: null};
        this.message = "Cliente cadastrado com sucesso!";
      }
    },
    getClientes: async function (nome) {
      const result = await fetch("http://localhost:8080/clientes?nome=" + nome)
        .then((res) => res.json())
        .then((res) => res)
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
    isValidate: function (valor, error) {
      if (valor && valor !== "") {
        error.push(true);
        return true;
      }
      error.push(false);
      return false;
    },
    isSubmit: function() {      
      this.createClientes();
    }
  },  
};
</script>
