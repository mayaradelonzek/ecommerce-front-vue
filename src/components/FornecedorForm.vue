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
          <b-form-input type="text" class="mb-3" />
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="3">
        <b-form-group label="CPF">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group>
      </b-col>
        <b-col md="3">
        <b-form-group label="Telefone">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="6">
        <b-form-group label="E-mail">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group>    
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="6">
        <b-form-group label="Rua">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group>   
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="3">
        <b-form-group label="Número">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group label="Bairro">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group> 
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="3">
        <b-form-group label="Complemento">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group label="CEP">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group>  
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="3">
        <b-form-group label="Cidade">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group label="Estado">
          <b-form-input type="text" class="mb-3"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col md="6">
        <b-form-group class="mt-3">
          <b-button variant="warning">Salvar</b-button>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "FornecedorForm",
}
</script>
