import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 98vw;
    height: 94vh;
    margin: 5px;
`
export const Left_Container = styled.div`
    display: flex;
    flex-direction: column;
    width: var(--container-width-middels);
`
export const Right_Container = styled.div`
    display: flex;
    flex-direction: column;
    width: var(--container-width-small);
    text-align: right;
`
export const Text = styled.div`
    font-size: 30px;
`
export const Contact = styled.div`

`
export const Contact_Titel = styled.h1`
    font-size: 30px;
`
export const Mail_Container = styled.div`

`
export const Contact_Links = styled.a`
    justify-items: space-between;
`
export const Cv = styled.button`
    background-color: var(--color-btn);
    height: 35px;
    width: 90px;
    border-radius: 30px;
    justify-content: center;
    text-align: center;
`