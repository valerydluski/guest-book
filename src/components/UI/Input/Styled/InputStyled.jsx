import styled from 'styled-components';
import { DEVICE } from '../../../../config';

export const InputContainer = styled.div`
  margin: 10px auto;
  width: 80%;
`;

export const InputStyled = styled.input`
  margin-right: 10px;
  font-size: 24px;
  line-height: 28px;
  width: 80%;
  &.message {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    color: #b2b2b2;
    outline: none;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    -webkit-autofill:focus,
    -internal-autofill-selected {
      -webkit-text-fill-color: #b2b2b2;
    }
  }
`;

export const LabelStyled = styled.label`
  margin-left: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  @media ${DEVICE.mobileL} {
    font-size: 18px;
  }
`;
