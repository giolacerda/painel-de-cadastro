<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
    name: 'Resumo',

    setup() {
        const store = useStore()
        store.state.listaDeClientes
        const totalDeClientes = computed(() => store.getters.totalDeClientes)
        const ultimoClienteCadastrado = computed(() => store.getters.ultimoClienteCadastrado)
        const clientesCadastradosHoje = computed(() => store.getters.clientesCadastradosHoje)

        return {
            totalDeClientes,
            ultimoClienteCadastrado,
            clientesCadastradosHoje
        }

    }

})
</script>

<template>
    <v-app>
        <v-container>
            <v-card>
                <router-link to="/">
                    <v-icon class="back-icon mb-4">mdi-arrow-left</v-icon>
                </router-link>
                <h2>Resumo</h2>
                <p>Visão geral dos clientes cadastrados</p>
                <div>
                    <v-card>
                        <v-icon class="icon-box mb-4">mdi-account-group</v-icon>
                         <h3>Total de clientes</h3>
                        <template v-if="totalDeClientes">
                            <h3>{{ totalDeClientes }}</h3>
                        </template>

                        <template v-else>
                            <p> Nenhum cliente cadastrado ainda</p>
                        </template>
                    </v-card>
                    <v-card>
                        <v-icon class="icon-box mb-4">mdi-calendar-today</v-icon>
                        <h3>Cadastrados hoje</h3>
                        <template v-if="clientesCadastradosHoje">
                            <h3>{{ clientesCadastradosHoje }}</h3>
                        </template>

                        <template v-else>
                            <p> Nenhum cliente cadastrado ainda</p>
                        </template>

                    </v-card>
                </div>
                <v-card class="last-client-card">
                    <h2>Último cliente cadastrado</h2>

                    <template v-if="ultimoClienteCadastrado">
                        <h4>Nome: {{ ultimoClienteCadastrado.nome }}</h4>
                        <h4>E-mail: {{ ultimoClienteCadastrado.email }}</h4>
                        <h4>Telefone: {{ ultimoClienteCadastrado.telefone }}</h4>
                    </template>

                    <template v-else>
                        <p>Nenhum cliente cadastrado ainda</p>
                    </template>


                </v-card>
            </v-card>
        </v-container>
    </v-app>
</template>

<style scoped>
/* fundo geral */
.v-application {
    background: linear-gradient(135deg, #f5f7fa, #eef2ff);
}

/* card principal */
.v-container>.v-card {
    max-width: 900px;
    margin: 40px auto;
    padding: 32px;
    border-radius: 20px;
    background-color: #ffffff;
}

/* ícone de voltar */
.back-icon {
    color: #9ca3af;
    cursor: pointer;
    transition: color 0.2s ease;
}

.back-icon:hover {
    color: #4f46e5;
}

/* título principal */
h2 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 4px;
}

/* subtítulo */
p {
    color: #6b7280;
    margin-bottom: 32px;
}

/* área dos cards de resumo */
.v-card>div {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;
}

/* cards pequenos (total / hoje) */
.v-card>div>.v-card {
    flex: 1;
    padding: 24px;
    border-radius: 16px;
    background: linear-gradient(135deg, #ffffff, #f8f7ff);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.25s ease;
}

/* hover suave */
.v-card>div>.v-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(123, 97, 255, 0.18);
}

/* ícones dos cards */
.v-card>div>.v-card v-icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background-color: #ede9fe;
    color: #7c3aed;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-bottom: 12px;
}

/* título dos cards */
.v-card>div>.v-card h3 {
    font-size: 16px;
    font-weight: 500;
}

/* título do último cliente */
.v-card>.v-card:last-child h2 {
    font-size: 18px;
    margin-bottom: 12px;
}

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

/* card do último cliente */
.v-card>.v-card:last-child {
    margin-top: 24px;
    padding: 32px;
    border-radius: 18px;
    background: linear-gradient(135deg, #ffffff, #f8f7ff);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

/* cada linha (Nome, Email, Telefone) */
.v-card>.v-card:last-child p {
    margin: 6px 0;
    font-size: 15px;
    color: #4b5563;
}

/* card do último cliente */
.last-client-card {
    margin-top: 24px;
    padding: 32px;
    border-radius: 18px;
    background: linear-gradient(135deg, #ffffff, #f8f7ff);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

/* título */
.last-client-card h2 {
    font-size: 18px;
    margin-bottom: 16px;
}

/* container das infos */
.client-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* linhas */
.client-info p {
    margin: 0;
    font-size: 15px;
    color: #374151;
}
</style>