import styled from 'styled-components';
import { DEVICE } from '../../../config';

const Button = styled.button`
  margin-left: 20px;
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

  @media ${DEVICE.tablet} {
    width: 70px;
    height: 70px;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
  }

  @media ${DEVICE.mobileL} {
    width: 42px;
    height: 42px;
    font-size: 13px;
    line-height: 16px;
  }
`;

export default Button;
