import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BotaoAdicionar, BotaoCancelar } from '../../styles'
import { Container, Formulario } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  adicionarContato,
  editarContato,
  selectContatoById
} from '../../store/reducers/cadastro'
import { useNavigate, useParams } from 'react-router-dom'
import { RootReducer } from '../../store/reducers'
import InputMask from 'react-input-mask'

const NovoContato: React.FC = () => {
  const { id } = useParams()
  console.log(id)
  const contato = useSelector((state: RootReducer) =>
    id ? selectContatoById(state, id) : undefined
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState(contato?.nome || '')
  const [telefone, setTelefone] = useState(contato?.telefone || '')
  const [email, setEmail] = useState(contato?.email || '')

  useEffect(() => {
    if (id && contato) {
      setNome(contato.nome)
      setTelefone(contato.telefone)
      setEmail(contato.email)
    }
  }, [id, contato])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (id) {
      dispatch(
        editarContato({
          id,
          nome,
          telefone,
          email
        })
      )
    } else {
      const novoId = uuidv4()
      dispatch(
        adicionarContato({
          id: novoId,
          nome,
          telefone,
          email
        })
      )
    }
    navigate('/')
  }

  const clickCancelar = () => {
    navigate('/')
  }

  const caracterMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 3) {
      event.target.setCustomValidity('Nome deve ter no mínimo 3 caracteres')
    } else {
      event.target.setCustomValidity('')
    }
  }

  return (
    <Container>
      <Formulario onSubmit={handleSubmit}>
        <label>
          Nome:{' '}
          <input
            type="text"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value)
              caracterMin(e)
            }}
          />
        </label>
        <label>
          Telefone:{' '}
          <InputMask
            mask="(99) 99999-9999"
            maskChar={null}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <label>
          Email:{' '}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <BotaoAdicionar type="submit">Salvar</BotaoAdicionar>
        <BotaoCancelar type="button" onClick={clickCancelar}>
          Cancelar
        </BotaoCancelar>
      </Formulario>
    </Container>
  )
}

export default NovoContato
