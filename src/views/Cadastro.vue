<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
    name: 'Cadastro',

    setup() {
        const store = useStore()
        store.state.listaDeClientes
        const cliente = ref({ nome: '', email: '', telefone: '' })
        const salvarCliente = () => {
            store.commit('adicionarNovoCliente', cliente.value)
        }

        return {
            cliente,
            salvarCliente
        }



    }

})
</script>

<template>
    <v-app>
        <v-container class="fill-height d-flex align-center justify-center pa-6">

            <v-card class="cadastro-card pa-8 rounded-xl elevation-2">
                <div class="d-flex justify-space-between align-center mb-4">
                    <router-link to="/">
                        <v-icon class="back-icon">mdi-arrow-left</v-icon>
                    </router-link>

                    <router-link to="/resumo">
                        <v-icon class="back-icon">mdi-arrow-right</v-icon>
                    </router-link>
                </div>

                <h2 class="text-h6 font-weight-bold mb-1">Cadastrar Cliente</h2>
                <p class="text-body-2 text-medium-emphasis mb-6">Preencha os dados abaixo</p>

                <v-form class="d-flex flex-column gap-4">
                    <v-text-field placeholder="Nome completo" v-model="cliente.nome"></v-text-field>
                    <v-text-field type="email" placeholder="E-mail" v-model="cliente.email"></v-text-field>
                    <v-text-field placeholder="Telefone" v-model="cliente.telefone"></v-text-field>
                </v-form>

                <v-btn block height="48" class="text-none rounded-lg font-weight-medium" color="deep-purple-accent-4"
                    @click="salvarCliente">Salvar cliente</v-btn>
            </v-card>

        </v-container>
    </v-app>
</template>

<style scoped>
/* fundo suave */
.v-application {
    background: linear-gradient(135deg, #f5f7fa, #eef2ff);
}

/* card principal */
.cadastro-card {
    width: 100%;
    max-width: 420px;
    background-color: #ffffff;
}

/* seta de voltar */
.back-icon {
    color: #9ca3af;
    cursor: pointer;
    transition: color 0.2s ease;
}

.back-icon:hover {
    color: #4f46e5;
}

/* inputs */
.v-text-field {
    --v-field-border-opacity: 0.15;
}

/* botão */
.v-btn {
    margin-top: 12px;
}
</style>