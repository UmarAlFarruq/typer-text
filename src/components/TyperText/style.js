import styled, { keyframes } from 'styled-components'
import { device } from '../../utils/responsive';

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
const AnimationText = keyframes`
    0%{opacity: 1}
    50%{opacity: 0}
    100%{opacity: 1}
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: ${({ mt }) => mt && '50px'};
    `
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: aliceblue;
    box-sizing: border-box;
    @media ${device.mobile} {
        width: 96%;
        margin-top: 10px;
        padding: 3px 6px;
        border-radius: 5px;
        gap: 20px;
    }
    @media ${device.tablet} {
        width: 90%;
        margin-top: 20px;
        padding: 4px 10px;
        border-radius: 9px;
        gap: 30px;
    }
    @media ${device.dectop} {
        width: 86%;
        margin-top: 30px;
        padding: 14px 50px;
        gap: 40px;
    }
`
export const WrapTime = styled(Wrapper)`
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 3%;
    @media ${device.mobile} {
        padding: 0 2%;
    }
    @media ${device.tablet} {
        padding: 0 1%;
    }
`
export const H3 = styled.h3`
    color: blue;
`

export const WrapperText = styled.div`
    position: relative;
    @media ${device.mobile} {
        font-size: 14px;
        line-height: 20px;
        width: 100%;
    }
    @media ${device.tablet} {
        font-size:16px ;
    }
    @media ${device.dectop} {
        font-size:16px ;
        width: 100%;
    }
`
export const WrapperInput = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const Input = styled.input`
${({ type }) => getInputStyle(type)}
    width:100%;
    height: 30px;
    border-radius: 5px;
    font-size: 14px;
    padding-left: 5px;
    &:focus {
        outline: none;
    }
    @media ${device.mobile}{
        width: 99%;
    }
`



export const Span = styled.span`
    border-right: 1px solid #222;
    animation-name: ${AnimationText};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    width: 1px;
`
export const Active = styled.span`
    border-bottom: 1px solid black;
    /* border-right: 1px solid black; */
`
export const Success = styled.span`
    border-bottom:${({ type }) => type ? `1px solid #99cc00` : null};
    color:#99cc00 ;
    width: fit-content;
`
export const Error = styled.span`
    color: white;
    border-bottom: 1px solid #d08383;
    background-color:#d08383 ;
    border-radius: 3px;
`