import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
    ${({ theme }) => css`
        width: 100%;

        .header-info {
            background-color: ${theme.green.terciary};
            color: #fff;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-end;
            padding: 5px 30px;
            font-size: .7rem;

            > * {
                margin-right: 20px;
                > :first-child {
                    margin-right: 5px;
                }
            }
        }
        
        .header-actions {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;

            .header-acition-logo {

                img {
                    width: 100px;
                }
            }

            .header-actions-aside {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;

                .header-actions-aside-divisor {
                    background-color: ${theme.gray.primary};
                    width: 1px;
                    height: 20px;
                    margin: 0 30px;
                }
            }

            > * {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        
        .header-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: row nowrap;
            background-color: ${theme.green.primary};
        }
    `}
`;