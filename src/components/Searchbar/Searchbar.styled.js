import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: blue;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  left: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
`;

export { Header, Button, Input, Wrapper };
