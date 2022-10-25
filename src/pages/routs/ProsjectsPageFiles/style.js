import styled from "styled-components";

export const container = styled.div`
	display: flex;
    flex-direction: row;
    width: var(--container-width-big);
`
export const Card = styled.div`
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    margin: 5px;
`
export const Prosject = styled.div`
    display: flex;
    flex-direction: column;
`
export const Link = styled.div`
    display: flex;
    height: 50px;
    width: 225px;
`
export const Prosject_Titel = styled.h2`
    text-align: center;
    justify-content: center;
`
export const Prosject_Img = styled.img`
    width: var(--image-width-small); 
    height: var(--image-height-small);
    border: solid;
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