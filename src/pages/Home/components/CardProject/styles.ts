import styled from "styled-components";

export const CardContainer = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    img {
        width: 100%;
        object-fit: cover;
    }

    :hover {
        div {
            display: flex;
        }
    }
`

export const Overlay = styled.div`
    position:absolute;
    width: 100%;
    height: 100%;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;

    background-color: rgba(0, 0, 0, 0.49);

    h3, span {
        color: ${({theme}) => theme.colors.white };
    }

    span {
        font-weight: 900;
    }
`