<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {

  }
});
</script>

<template>

  <div class="menu-topo">
    <router-link to="/" class="menu-link" active-class="ativo">Home</router-link>
    <router-link to="/cadastro" class="menu-link" active-class="ativo">Cadastro</router-link>
    <router-link to="/resumo" class="menu-link" active-class="ativo">Resumo</router-link>
  </div>
  <router-view />
</template>

<style scoped>
.menu-topo {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 18px 0;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.menu-link {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: #6b7280;
  /* cinza moderno */
  position: relative;
  transition: color 0.3s ease;
}

.menu-link:hover {
  color: #7b61ff;
}

/* link ativo */
.menu-link.ativo {
  color: #7b61ff;
  font-weight: 600;
}

/* detalhe criativo abaixo do ativo */
.menu-link.ativo::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background-color: #7b61ff;
  border-radius: 2px;
}
</style>
