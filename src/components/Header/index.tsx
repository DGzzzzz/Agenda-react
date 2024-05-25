import { Link } from 'react-router-dom'
import { Cabecalho } from './styles'
import { BotaoAdicionar } from '../../styles'

const Header = () => (
  <Cabecalho>
    <h2>Lista de Contatos</h2>
    <Link to="/novo-cadastro">
      <BotaoAdicionar>Adicionar Novo</BotaoAdicionar>
    </Link>
  </Cabecalho>
)

export default Header
