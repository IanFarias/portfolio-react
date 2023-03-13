import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  width: 65px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50px;
  box-shadow: 1px 1px ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.background};

  .switcher-moon-icon {
    position: relative;
    right: -2px;
  }

  .switcher-sun-icon {
    position: relative;
    right: -16px;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  left: -99999px;

  &:checked + label {
    transform: translateX(31px);
  }

  &:focus-visible + label {
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.secondary};
  }
`;

export const Label = styled.label`
  cursor: pointer;
  position: absolute;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.terciary};
  border-radius: 50%;
  z-index: 1;
  transition: 0.2s transform;

  ::after {
    content: '';
    position: absolute;
    height: 44px;
    width: 44px;
    top: -10px;
    left: -8px;
  }
`;
