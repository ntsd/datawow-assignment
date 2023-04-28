import styled from "@emotion/styled";

const TodoInput = styled.input`
  width: 100%;
  border: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  ::placeholder {
    color: #bcbcbc;
  }
`;

export default TodoInput;
