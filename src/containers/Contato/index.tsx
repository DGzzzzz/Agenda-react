import { useNavigate } from 'react-router-dom'
import { BotaoEditar, BotaoExcluir } from '../../styles'
import { excluirContato } from '../../store/reducers/cadastro'
import { useDispatch } from 'react-redux'

export interface ContatoProps {
  id: number
  nome: string
  telefone: string
  email: string
}

const Contato: React.FC<ContatoProps> = ({ id, nome, telefone, email }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const editar = () => {
    navigate(`/novo-cadastro/${id}`)
  }

  const excluir = () => {
    dispatch(excluirContato(id))
  }

  return (
    <tr key={id}>
      <td>{nome}</td>
      <td>{telefone}</td>
      <td>{email}</td>
      <td>
        <BotaoEditar onClick={editar}>Editar</BotaoEditar>
      </td>
      <td>
        <BotaoExcluir onClick={excluir}>Excluir</BotaoExcluir>
      </td>
    </tr>
  )
}

export default Contato
