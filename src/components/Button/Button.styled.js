import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  width: 200px;
  height: 30px;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  background-color: #4747bc;
  color: white;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #37379c;
  }
`;
