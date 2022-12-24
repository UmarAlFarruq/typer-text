import styled from 'styled-components'
import { device } from './../../utils/responsive';

const getInputStyle = (type) => {
    switch (type) {
        case 'error': return {
            border: '2px solid #d08383',
            background: '#d8a1a1',
            color: 'white',
            fontSize: '18px'
        }
        default: return {
            border: '2px solid rgb(197, 243, 241)',
            boxShadow: ' 0 0 12px 0 rgba(197, 243, 241,0.7)'
        }
    }
}


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: aliceblue;
    gap: 40px;
    @media ${device.mobile} {
        width: 100%;
        margin-top: 10px;
        padding: 1px 5px;
        border-radius: 5px;
    }
    @media ${device.tablet} {
        width: 90%;
        margin-top: 20px;
        padding: 4px 10px;
        border-radius: 9px;
    }
    @media ${device.dectop} {
        width: 80%;
        margin-top: 30px;
        padding: 14px 50px;
    }
`
export const WrapperText = styled.div`
    
`
export const WrapperInput = styled.div`
    /* margin-top: 30px; */
`
export const Input = styled.input`
${({ type }) => getInputStyle(type)}
    width:100%;
    height: 30px;
    border-radius: 5px;
    font-size: 14px;
    &:focus {
        outline: none;
    }
    @media ${device.mobile}{
        width: 100%;
    }
`