import styled from 'styled-components';

const Button = styled.button`
  margin: 0 auto;
  width: 200px;
  height: 50px;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  background: #404497;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s linear;
  flex-grow: 1;
  align-self: flex-start;
  flex-shrink: 0;

  &:hover {
    background: #fec246;
  }
`;

export default Button;
