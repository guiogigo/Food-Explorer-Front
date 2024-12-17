import { styled } from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    min-height: 11.4rem;
    padding-inline: 2.4rem;
    padding-top: 2.5rem;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;

    
    .desktop-only {
        display: none;

        ${DEVICE_BREAKPOINTS.LG} {
            display: initial;
        }
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    button.no-bg {
        border: 0;
        border-radius: 2px;
        background: none;
        padding: .8rem .8rem .8rem 0;
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-family: 'Roboto';
        font-size: 2.1rem;
        gap: 1.6rem;

        img {
            -webkit-user-select: none; /* Safari */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
        }
    }

    nav {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        /*background: ${({ theme }) => theme.COLORS.DARK_400};*/

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        opacity: 0;
        transform: translateY(-100%);
        

        transition: all 300ms;

        .bg {
            width: 100%;
            height: 11.4rem;
            padding: 6rem 0 2.8rem 2.8rem;
            background: ${({ theme }) => theme.COLORS.DARK_700};
        }

        .menu-content {
            height: 100%;
            width: 100%;
            padding: 3.6rem 2.8rem 0;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            gap: 3.6rem;
            background: ${({ theme }) => theme.COLORS.DARK_400};

        }

        .input {
        margin-top: 6.5rem;
        margin-bottom: 3.6rem;
        width: 100%;
        }
    }

    nav.mobile-menu {
        opacity: 1;
        transform: translateY(0);
    }

    .mobile-button {
        width: 100%;
        text-align: left;
        border: none;

        height: 5.4rem;
        
        display: flex;
        flex-direction: column;

        span {
            padding: 1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            min-width: 100%;
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        
            font-family: 'Roboto';
            font-weight: 300;
            font-size: 2.1rem;
            line-height: 140%; /* 33.6px */
            gap: 1.6rem;
        }
        
        background: none;

        
    }

    #exit {
        display: none;
    }

    ${DEVICE_BREAKPOINTS.LG} {
        padding-inline: clamp(10px, 9vw, 12.3rem);
        padding-top: 0;
        gap: 3.2rem;
        min-height: 9.6rem;

        button.menu {
            display: none;
        }

        nav {
            background: initial;
            position: initial;
            top: initial;
            left: initial;
            width: initial;
            height: initial;
            padding: initial;
            opacity: initial;
            transform: initial;

            flex-direction: row;
            align-items: center;
            justify-content: center;

            width: 100%;
            max-height: 10.4rem;

            
            .bg,
            .mobile-button {
                display: none;
            }

            .menu-content {
                width: 100%;
                background-color: none;
                padding: 0;
            }
        }

        #exit {
            display: flex;
            align-items: center;
            justify-content: center;
        }  

        .navBar {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 3.2rem;
            
        }
        
    }

    #btn-favs {
        position: relative;
        border: none;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .8rem;

        > span > a {
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            white-space: nowrap;
            text-align: center;
            font-family: Roboto;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
        }
    }

    #btn-order {
        position: relative;
        border: none;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .8rem;


        .btn-order-txt {
            display: none;
        }
        .btn-order-qtd {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color:  ${({ theme }) => theme.COLORS.TOMATO_100};
            padding: 8px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 24px;

            position: absolute;
            top: -15%;
            right: -15%;
            overflow: hidden;
        }

        ${DEVICE_BREAKPOINTS.LG} {
            border-radius: 8px;
            padding: 12px 46px;
            background-color:  ${({ theme }) => theme.COLORS.TOMATO_100};

            .new-dish {
                padding: none;
            }

            .btn-new-dish,
            .btn-order-qtd,
            .btn-order-txt {
                display: inline;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                white-space: nowrap;
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
            }

            .btn-order-qtd {
                position: unset;
                top: unset;
                right: unset;
                padding: unset;
                width: unset;
                height: unset;
                border-radius: unset;
                justify-content: unset;
                align-items: unset;
                overflow: unset;
            }

            .btn-order-qtd::before {
                content: '(';
            }
            .btn-order-qtd::after {
                content: ')';
            }
        }
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;

    h1 {
        font-family: Roboto;
        font-size: 2.1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    

    > img {
        width: 2.4rem;
        height: 2.4rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        white-space: nowrap;
    }

    .profile-txt {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        gap: .8rem;

        span {
            color: ${({theme}) => theme.COLORS.CAKE_200};
            text-align: center;

            font-family: Roboto;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
        }
    }

    ${DEVICE_BREAKPOINTS.LG} {
        gap: 10px;
        h1 {
            font-size: 2.4rem;
        }
        > img {
            width: 3rem;
            height: 3rem;
        }

        .profile-txt {
        flex-direction: column;
        justify-content: end;
        align-items: end;
        
        gap: 0;
        }
    }
`;

