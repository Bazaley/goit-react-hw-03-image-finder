import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: blue;
`;

const Form = styled.form`
  position: relative;
  width: 300px;
  height: 50px;
`;

const Button = styled.button`
  position: absolute;
  left: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
`;

export { Header, Form, Button, Input };
