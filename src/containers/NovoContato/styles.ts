import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 200px;
  height: 100vh;
`

export const Formulario = styled.form`
  display: flex;
  padding: 20px;
  width: 50%;
  border-radius: 10px;
  background-color: #f5f5f5;
  -webkit-box-shadow: -4px 10px 5px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 10px 5px 3px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 10px 5px 3px rgba(0, 0, 0, 0.75);

  label {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 100%;
  }

  input {
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`
