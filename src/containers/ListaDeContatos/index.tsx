import Header from '../../components/Header'
import Contato, { ContatoProps } from '../Contato'
import { Container, Table, TableBody, TableHead } from './styles'
import { useSelector } from 'react-redux'

const ListaDeContatos: React.FC = () => {
  const contatos = useSelector(
    (state: { contatos: { itens: ContatoProps[] } }) => state.contatos.itens
  )

  return (
    <Container>
      <Header />
      <Table>
        <TableHead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </TableHead>
        <TableBody>
          {contatos.map((contato) => (
            <Contato key={contato.id} {...contato} />
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default ListaDeContatos
