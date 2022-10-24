import styled from "styled-components";

export const container = styled.div`
	display: flex;
    height: 90vh;
    width: 100vw;
`
export const Card = styled.div`
    background-color: var(--color-primary);
    height: 300px;
    width: 225px;
    margin: 5px;
`
export const Prosject = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 200px;
`
export const Link = styled.div`
    display: flex;
    height: 50px;
    width: 225px;
`
export const ProsjectTitel = styled.h2`
    text-align: center;
    justify-content: center;
`
export const ProsjectImg = styled.image`
    width: 225px; 
    height: 300px;
    border: solid;
    border-radius: 10px; 
    /* 
    text-align: center;
    justify-content: center;
    */
`
export const DemoLink = styled.a`
    margin: 5px;
    padding: 5px;
`
export const GitLink = styled.a`
    margin: 5px;
    padding: 5px;
`
export const Prosject_btn = styled.button`
    background-color: var(--color-btn);
    height: 35px;
    width: 90px;
    border-radius: 30px;
    justify-content: center;
    text-align: center;
`