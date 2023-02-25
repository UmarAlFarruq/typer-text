import styled from 'styled-components';

const Container = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    background: whitesmoke;
    padding: 20px;
    `
const Wrapper = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`
Wrapper.Text = styled.div`
    margin-top: 20px;
`
Wrapper.Button = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.p`
    color: var(--activeColor);
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    font-weight: 600;
`

export { Container, Wrapper, Button };


