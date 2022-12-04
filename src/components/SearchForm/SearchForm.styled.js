import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  border: none;
  background-color: #6161d4;
  color: white;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #37379c;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 20px;
  border: none;
  font-size: 16px;

  &:focus {
    outline-color: #37379c;
  }
`;

export { Button, Input, Wrapper };
