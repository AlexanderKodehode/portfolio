import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 1%;
`

export const img = styled.img`
    width : 500px ; 
    height : 600px ;
    border-radius: 50%;
    width: var(--container-width-small);
`
export const Text_Container = styled.div`
    display: flex;
    width: var(--container-width-small);
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    color: var(--color-txt);
`

export const Skill = styled.h2`
    color: var(--color-txt);
`