'use client'
import styled from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.footer`
    width: 100%;
    display: flex;
    margin-top: 3rem;
    border-top: 1px solid ${theme.border};
    height: 5rem;
    justify-content: center;
    align-items: center;

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        button{
            background: none;
            border: none;
            color: ${theme.primary};
            text-transform: uppercase;
            font-size: 1.2rem;
            font-weight: 300;
        }
    
        >section{
            display: flex;
            align-items: center;
            gap: 1rem;

            svg{
                width: 2rem;
                height: 2rem;
                transition: .5s;
                cursor: pointer;

                &:hover{
                    color: ${theme.secondary};
                }
            }
        }

        @media(max-width: 450px){
            button{
                font-size: 0.9rem;
            }
            >section{
                gap: .5rem;
                svg{
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }
    }
`;