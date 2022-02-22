import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
    height: auto;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`

export const HeaderContainer = styled.header `
    width: 100%;
    height: 12vh;
    background-color: #000;
    color: #fff;
    display: flex;

    .navbar {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        padding: 0 15px;
        display: flex;

        .navbar--logo, .navbar--menu {
            width: 50%;
            height: 100%;
        }

        .navbar--logo {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .navbar--logo > img {
            max-height: 6vh;
            cursor: pointer;
        }

        .menu {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0;
            margin: 0;
            list-style-type: none;

            li {
                padding: 28px 17px;

                a {
                    text-decoration: none;
                    color: #fff;
                    font-weight: bold;

                    &:hover {
                        color: #1ED760;
                    }
                }
            }

            .separator {
                width: 1px;
                height: 20%;
                background-color: #fff;
                margin: auto 17px;
            }
        }
    }
`

export const BodyContainer = styled.main `
    background-image: url(https://www-growth.scdn.co/static/home/bursts.svg);
    background-size: 175%;
    background-position: 46% 4%;
    -webkit-box-pack: center;
    justify-content: center;
    min-height: 846px;
    background-color: #2941AB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1ED760;

    .body--title {
        font-size: 156px;
        text-align: center;
        padding-bottom: 40px;
        margin: 0;
    }

    .btn-primary {
        margin-top: 1em;
        background-color: #1ED760;
        color: #2941AB;
        border: 0;
        border-radius: 500px;
        padding: 17px 40px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
            background-color: #2DE26D;
        }
    }
`

export const FooterContainer = styled.footer `
    width: 100%;
    height: 80vh;
    background-color: #000;
    color: #fff;

    .footer {
        width: 85%;
        height: 100%;
        display: grid;
        grid-template-rows: 4fr 20px 1fr;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-areas: "footer-row1 footer-row1 footer-row1" "footer--country footer--country footer--country" "footer--bottomLinks footer--bottomLinks footer--bottomLinks"; 
        margin: 0 auto;
        padding: 80px 0 50px 0;

        .footer-row1 {
            display: grid;
            grid-template-columns: 1fr 3fr 1fr;
            grid-template-rows 1fr;
            grid-area: footer-row1;
        }

        .footer--logoContainer > img {
            max-height: 6vh;
        }

        .footer--navbar {
            display: flex;

            .navbar--menu {
                padding: 0 25px;
            }

            .nav-header {
                color: #919496;
            }

            .menu {
                list-style-type: none;
                padding: 0;

                li {
                    padding: 3px 0 15px;

                    a {
                        text-decoration: none;
                        color: #fff;

                        &:hover {
                            color: #1ED760;
                        }
                    }
                }
            }
        }

        .footer--socialIcons {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;

            .btn-socialMedia {
                width: 54px;
                height: 54px;
                border-radius: 50%;
                cursor: pointer;
                background-color: #222326;
                border: 0;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    color: #1ED760;
                }
            }
        }

        .footer--country {
            grid-area: footer--country;
            display: flex;
            justify-content: flex-end;
            color: #919496;
            font-size: 12px;

            a {
                text-decoration: none;
                color: #919496;
                margin-left: 5px;
            }
        }

        .footer--bottomLinks {
            grid-area: footer--bottomLinks;
            display: flex;            
            justify-content: space-between;
            .navbar {
                width: 50%;

                .menu {
                    list-style-type: none;
                    padding: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    a {
                        text-decoration: none;
                        color: #919496;
                        font-size: 12px;

                        &:hover {
                            color: #1ED760;
                        }
                    }
                }
            }

            .footer--copyright {
                display: flex;
                align-items: center;
                color: #919496;

                p {
                    font-size: 12px;
                }
            }
        }
    }
`