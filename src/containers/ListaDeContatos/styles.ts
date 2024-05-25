import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const Table = styled.table`
  width: 90%;
  border: 1px solid #ccc;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: #f5f5f5;
  -webkit-box-shadow: -4px 10px 5px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 10px 5px 3px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 10px 5px 3px rgba(0, 0, 0, 0.75);
`

export const TableHead = styled.thead`
  background-color: #f5f5f5;
  tr {
    th {
      border: 1px solid #ccc;
      padding: 8px;
    }
  }
`
export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  td {
    border-bottom: 1px solid #ccc;
    text-align: center;
    padding: 8px;
  }
`
