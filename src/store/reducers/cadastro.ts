import { createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: '1',
      nome: 'Fulano',
      telefone: '(99) 99999-9999',
      email: 'fulano@email.com'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionarContato(state, action) {
      state.itens.push(action.payload)
    },
    editarContato(state, action) {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.itens[index] = action.payload
      }
    },
    excluirContato(state, action) {
      const indexExcluir = state.itens.findIndex(
        (contato) => contato.id === action.payload
      )
      if (indexExcluir !== -1) {
        state.itens.splice(indexExcluir, 1)
      }
    }
  }
})

export const { adicionarContato, editarContato, excluirContato } =
  contatoSlice.actions
export default contatoSlice.reducer

export const selectContatoById = (
  state: { contatos: ContatoState },
  id: string
) => {
  return state.contatos.itens.find((contato) => contato.id === id)
}
