import styled from 'styled-components';

const Container = styled.div`
box-sizing: border-box;
    height: 100vh;
    width: 100wh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: whitesmoke;
    `
const Wrapper = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`
Wrapper.Text = styled.div``
Wrapper.Button = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: red; */

`

const Button = styled.p`
    color: var(--activeColor);
    font-size: 16px;
    /* border-bottom: 1px solid var(--activeColor); */
    padding: 0;
    cursor: pointer;
    font-weight: 600;
`

export { Container, Wrapper, Button };


