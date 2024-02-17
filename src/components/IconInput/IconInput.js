import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const small = 14
const large = 18

const STYLES = {
  small: {
    icon:  { size: small },
    input: { lineHeight: small / 16 + 'rem', fontSize: small }
  },
  large: {
    icon:  { size: large },
    input: { lineHeight: large  / 16 + 'rem', fontSize: large }
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = STYLES[size]
  style.input.width = width

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{height: style.icon.size}}>
        <Icon id={icon} size={style.icon.size} />
      </IconWrapper>
      <NativeInput placeholder={placeholder} style={style.input} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  position: relative;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`
const NativeInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  padding-left: 24px;
  color: inherit;
  font-weight: 400;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 300;
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
`

export default IconInput;
