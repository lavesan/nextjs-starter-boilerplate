import styled, { css } from 'styled-components';

export const StyledPerfilPage = styled.section`
    ${({ theme }) => css`
        .title-container {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;

            h1 {
                margin: 20px 0;
                font-size: 1.7rem;
            }

            .edit-button {
                border: thin solid ${theme.green.primary};
                color: ${theme.green.primary};
                font-size: 1rem;
                padding: 10px 20px;
                border-radius: 5px;
                background: none;
                cursor: pointer;
                outline: none;
                margin-left: 40px;
                
                .pen-icon {
                    margin-right: 5px;   
                }
            }
        }
        .perfil-form {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;

            > * {
                width: 30%;
            }

            .title-paragraph {
                color: ${theme.gray.secondary};
                margin: 10px 0 5px 0;
                font-size: 1rem;
            }

            .card-button {
                cursor: pointer;
                border-radius: 5px;
                border: none;
                background-color: ${theme.gray.terciary};
                font-size: .9rem;
                padding: 10px 20px;
                outline: none;
                color: ${theme.gray.secondary};

                .remove-icon {
                    font-size: .9rem;
                    color: ${theme.danger.primary};
                }
            }

            .row {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;

                > * {
                    width: 45%;
                }
            }

            .address-1-row {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;

                > :first-child {
                    width: 60%;
                }

                > :last-child {
                    width: 30%;
                }
            }

            .buttons-container {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;

                > * {
                    width: 35%;
                }
                
                .cancel-button {
                    background-color: #fff;
                    color: ${theme.gray.secondary};
                    border: thin solid ${theme.gray.secondary};
                    border-radius: 5px;
                    padding: 10px 20px;
                    outline: none;
                    cursor: pointer;
                }
            }
        }
    `}
`
