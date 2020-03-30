import styled, { css } from 'styled-components';

export const StyledOrderAddressStepForm = styled.section`
    display: flex;
    flex-flow: column nowrap;

    .first-row {
        display: flex;
        flex-flow: row nowrap;
        .first-column {
            width: 50%;
            margin-right: 10px;
        }
        .second-column {
            width: 50%;
        }
    }
    .second-row {
        display: flex;
        flex-flow: row nowrap;
        .first-column {
            width: 65%;
            margin-right: 10px;
        }
        .second-column {
            width: 35%;
        }
    }
    .address-last-row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
    }
    ${({ theme }) => css`
        .order-checkbox-label {
            color: ${theme.green.terciary};
        }

        .freight-value-container {
            background-color: ${theme.green.penternary};
            color: ${theme.green.terciary};
            border: thin solid ${theme.green.primary};
            border-radius: 5px;
            padding: 10px 20px;
            height: 100%;
        }
    `}
`;

export const StyledAddressInfoRadio = styled.div`
    ${({ theme }) => css`
        .address-title {
            color: ${theme.green.primary};
            font-size: .9rem;
        }
        p {
            color: ${theme.gray.secondary};
            font-size: .8rem;
        }

        .middle-text {
            margin: 5px 0;
        }
    `}
`
