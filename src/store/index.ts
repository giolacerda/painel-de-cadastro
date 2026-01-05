import IdadosClientes from '@/interface'
import { createStore } from 'vuex'

export default createStore({
  state: {
    listaDeClientes: [] as IdadosClientes[]
  },
  getters: {
    totalDeClientes(state) {
      return state.listaDeClientes.length

    },
    ultimoClienteCadastrado(state) {
      if (state.listaDeClientes.length === 0) {
        return null
      } else {
        return state.listaDeClientes[state.listaDeClientes.length - 1]
      }

    },
    clientesCadastradosHoje(state) {
      const hoje = new Date().toDateString()
      return state.listaDeClientes.filter(
        cliente => new Date(cliente.dataCadastro).toDateString() === hoje
      ).length
    }

  },
  mutations: {
  adicionarNovoCliente(state, payload) {
    // adiciona a data atual ao cliente antes de salvar
    const novoCliente = { 
      ...payload, 
      dataCadastro: new Date() 
    }
    state.listaDeClientes.push(novoCliente)
  }
},

})
