import styled from 'styled-components';

const ButtonsList = styled.ul`
  display: flex;
  li {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  button {
    cursor: pointer;
  }
`;

export default ButtonsList;
