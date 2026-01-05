<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Home',
})
</script>

<template>
    <v-app>
        <v-container class="fill-height d-flex flex-column align-center justify-start pa-8">
            <div class="text-center mb-8">
                <h2 class="text-h5 font-weight-bold mb-1">Painel do Cliente</h2>
                <p class="text-body-2 text-medium-emphasis">Gerencie seus clientes de forma simples e organizada</p>
            </div>

            <div class="d-flex flex-wrap justify-center gap-6">
                <!-- card cadastrar cliente -->
                <v-card  class="home-card d-flex flex-column align-center justify-center text-center">
                    <router-link to="/cadastro" class="text-decoration-none text-inherit">
                        <v-icon class="icon-box mb-4">mdi-account</v-icon> 
                        <h3 class="text-subtitle-1 font-weight-medium mb-1">Cadastrar cliente</h3>
                        <p class="text-body-2 text-medium-emphasis">Adicione um novo cliente ao sistema</p>
                    </router-link>
                </v-card>

                <!-- card ver resumo -->
                <v-card class="home-card d-flex flex-column align-center justify-center text-center">
                    <router-link to="/resumo" class="text-decoration-none text-inherit">
                        <v-icon class="icon-box mb-4" >mdi-chart-bar</v-icon>
                        <h3 class="text-subtitle-1 font-weight-medium mb-1">Ver resumo</h3>
                        <p class="text-body-2 text-medium-emphasis">Visualize os dados sistema gerais do sistema</p>
                    </router-link>
                </v-card>
            </div>
        </v-container>
    </v-app>
</template>

<style scoped>
   /* fundo geral */
.v-application {
  background: linear-gradient(135deg, #f5f7fa, #eef2ff);
}

/* wrapper dos cards */
.d-flex.flex-wrap {
  gap: 32px;
}

/* card base */
.home-card {
  width: 260px;
  height: 220px;
  border-radius: 16px;
  background-color: #ffffff;
  transition: all 0.25s ease;
  cursor: pointer;
  padding: 0;
}

/* hover elegante */
.home-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(123, 97, 255, 0.18);
}

/* router-link ocupa o card inteiro */
.home-card a {
  height: 100%;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

/* ícone */
.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background-color: #ede9fe;
  color: #7c3aed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 16px;
}
</style>