import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
    ${({ theme }) => css`
        width: 100%;
        margin-top: auto;

        .footer-info {
            padding: 20px 60px;
            background-color: ${theme.green.terciary};
            display: grid;
            grid-template-columns: 2fr 2fr 1fr;
            grid-gap: 20px;

            .social-media-container {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                
                a {
                    text-decoration: none;
                    color: #fff;
                }

                > * {
                    font-size: 1.2rem;
                    margin: 0 10px 0 0;
                    cursor: pointer;
                }
            }

            > * {
                min-width: 0;
                display: flex;
                flex-flow: column nowrap;
            }
        }
        
        h3 {
            font-size: 1rem;
            color: ${theme.green.primary};
        }
        
        p {
            font-size: .7rem;
            color: #fff;
        }

        .footer-cards {
            padding: 10px 60px;
            background-color: ${theme.green.quaternary};
            color: #fff;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }

        .whatsapp-container {
            margin-bottom: 10px;
        }

        .footer-responsive-info {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            background-color: ${theme.green.terciary};
            padding-top: 30px;

            > * {
                margin: 0 0 20px 0;
            }

            .address-text {
                text-align: center;
                font-size: .6rem;
            }

            .contact-link {
                font-size: .6rem;
            }

        }

        .util-link {
            text-decoration: none;
            color: #fff;
            font-size: .7rem;
        }

        .social-link {
            font-size: 1rem;
            color: #fff;
            text-decoration: none;
        }

        @media(max-width: 750px) {
            .footer-info {
                display: none;
            }
            .footer-responsive-info {
                display: flex;
            }
            .footer-cards {
                justify-content: center;

                .enterprise-name {
                    display: none;
                }
            }
        }
    `}
`;