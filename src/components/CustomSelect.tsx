import React, { useState } from "react";
import styled from "@emotion/styled";
import ChevronDown from "./icons/ChevronDown";

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  width: 6rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
	font-size: 14px;
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  min-width: 100%;
  z-index: 1;
  text-transform: capitalize;
	margin-top: 0.5rem;
	padding: 0.5rem;
  border-radius: 0.5rem;
	box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
	z-index: 2;
`;

const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
	font-size: 14px;
	line-height: 16px;
  cursor: pointer;

  &:hover {
    background-color: #585292;
		color: #fff;
  }
`;

const CustomSelect: React.FC<{
	options: string[];
	value: string;
	onChange: (value: string) => void;
}> = ({ options, value, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (option: string) => {
		onChange(option);
		setIsOpen(false);
	};

	return (
		<Dropdown>
			<DropdownButton onClick={() => setIsOpen(!isOpen)}>
				<span>{value}</span>
				<ChevronDown />
			</DropdownButton>
			<DropdownContent isOpen={isOpen}>
				{options.map((option) => (
					<DropdownItem key={option} onClick={() => handleSelect(option)}>
						{option}
					</DropdownItem>
				))}
			</DropdownContent>
		</Dropdown>
	);
};

export default CustomSelect;