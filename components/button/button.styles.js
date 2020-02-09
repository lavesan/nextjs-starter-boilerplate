import styled, { css } from 'styled-components';

const ButtonCss = css`
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 20px;
`;

export const StyledSuccessButton = styled.button`
    ${ButtonCss}
    ${({ theme }) => css`
        color: #fff;
        background-color: ${theme.green.primary};
        border: thin solid ${theme.green.primary};
    `}
`;

export const StyledRevSuccessButton = styled.button`
    ${ButtonCss}
    ${({ theme }) => css`
        color: ${theme.green.primary};
        background-color: #fff;
        border: thin solid #fff;
    `}
`;