import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import { getDisplayedValue } from './Select.helpers';
import Icon from '../Icon';


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation>
        <span>{displayedValue}</span><Icon id="chevron-down" size="16"/>
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  border-radius: 8px;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`

const Presentation = styled.div`
  display: flex;
  color: ${COLORS.gray700};
  background-color: ${COLORS.gray50};
  font-size: 1rem;
  padding: 12px 16px;
  line-height: 1rem;
  width: auto;
  border-radius: 8px;

  & span {
    margin-right: 16px;
  }

  ${NativeSelect}:focus + & {
    border: 2px solid hsla(218, 57%, 53%, 1);
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`
export default Select;
