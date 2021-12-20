import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
`;

export const InputText = styled.TextInput<InputProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;

export const ChangePasswordVisibilityButton = styled(BorderlessButton)`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;
`;
