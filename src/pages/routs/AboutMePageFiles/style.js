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
    padding: 15px 10px 10px 10px;
`
export const Contact = styled.div`

`
export const Contact_Titel = styled.h1`
    font-size: 75px;
    border-bottom: lightblue 5px solid;
`
export const Mail_Container = styled.div`
    font-size: 22px;
    padding: 15px 5px 10px 30px;
`
export const Contact_Links = styled.a`
    justify-items: space-between;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    padding: 55px 5px 60px 5px;
`
export const Cv = styled.button`
    background-color: var(--color-btn);
    font-size: 37px;
    height: 45px;
    width: 115px;
    border-radius: 30px;
    justify-content: center;
    text-align: center;
`