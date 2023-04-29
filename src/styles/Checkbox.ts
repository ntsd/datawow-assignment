import styled from "@emotion/styled";

const CustomCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
	flex-shrink: 0;
  width: 22px;
  height: 22px;
  background-color: ${({ checked }) => (checked ? "#585292" : "transparent")};
  border: 2px solid #585292;
  border-radius: 3px;
	cursor: pointer;
	color: ${({ checked }) => (checked ? "#fff" : "transparent")};
  font-weight: bold;
	line-height: 22px;
  text-align: center;
`;

export default CustomCheckbox;
