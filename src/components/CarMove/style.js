import styled, { keyframes } from 'styled-components'
import { device } from '../../utils/responsive'

const Cars = keyframes`
    0%{
        transform: scale( .4 );
        opacity: 0;
    }
    100%{
        transform: scale( 1 );
        opacity: 1;
    }
`

// const HereAnime = keyframes`
//     0%{ opacity: 1; scale:1; }
//     20%{ opacity: 0.7; scale:0.9;}
//     40%{ opacity: 1;scale:1;}
//     60%{ opacity: 0.7;  scale:0.9;}
//     80%{ opacity: 1;scale:1;}
//     100%{ opacity: 0.3;}
// `
export const Container = styled.div`
    min-height: 200px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    @media ${device.mobile}{
        width: 96%;
    }
    @media ${device.tablet}{
        width: 90%;
    }
    @media ${device.dectop}{
        width: 98%;
    }
`

export const WrapperCars = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    animation-name: ${Cars};
    animation-duration: ${({ second }) => `${second}s`};
    animation-iteration-count: linear ;
    box-sizing: border-box;
    @media ${device.mobile}{
        height:30px;
    }
`
export const WrapperVPM = styled.div`
    height: 100%;
    margin: auto;
    text-align: end;
    white-space: nowrap;
    box-sizing: border-box;
    @media ${device.mobile}{
        width: 13%;
        border-bottom: 2px solid #ffb21c ;
    }
    @media ${device.tablet}{
        width: 7%;
        border-bottom: 2px solid  #ffb21c ;
    }
    @media ${device.dectop}{
        width: 4%;
        border-bottom: 2px solid  #ffb21c ;
    }
`
export const WrapperIMG = styled.div`
    height: 100%;
    display: flex;
    border-bottom: 2px dashed  #ffb21c ;
    align-items: end;
    box-sizing: border-box;
    @media ${device.mobile}{
        width: 87%;
        padding-left: 2px;
        border-bottom: 2px dashed  #ffb21c ;
    }
    @media ${device.tablet}{
        width: 93%;
        padding-left: 4px;
        border-bottom: 2px dashed  #ffb21c ;
    }
    @media ${device.dectop}{
        width: 96%;
        padding-left: 5px;
        border-bottom: 2px dashed  #ffb21c ;
    }
`
export const Wrapper = styled.div`
    position: relative;
    @media ${device.mobile}{
        width: 20%;
        margin-left: ${({ ml }) => `${ml * 0.79}%`};
    }
    @media ${device.tablet}{
        width: 10%;
        margin-left: ${({ ml }) => `${ml * 0.89}%`};
    }
    @media ${device.dectop}{
        width: 7%;
        margin-left: ${({ ml }) => `${ml * 0.92}%` || `93%`};
    }
     
`
export const Popover = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    min-width: 250px;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    font-size: 22px;
    font-weight:600;
    top: 115%;
    right: ${({ ml }) => ml > 50 && 0};
    left: ${({ ml }) => ml <= 50 && 0};
    z-index: 3;
    border: 1px solid whitesmoke;
    box-shadow: 0 0 3px 0 rgba(1, 173, 233,1);
    border-radius: 4px;
    background:white ;
`

export const Img = styled.img`
    height:fit-content;
    margin-bottom: 2px;
    cursor: pointer;
    width: 100%;
    &:hover ~ ${Popover} {
        display:flex;
    }
`
export const P = styled.div``

P.Place = styled.p`
    color: #333;
    font-size: 12px;
    font-weight: 600;
    font-style: normal;
    line-height: 20px;
`
export const Time = styled.div`
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled(WrapperIMG)`
    color: blue;
    border: none;
`
export const PopoverInfo = styled.div`
    widows: 100%;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    font-family: 'Courier New', 'Courier', 'monospace';
`
export const Guset = styled.p`
    position: absolute;
    display: flex;
    z-index: 1;
    @media ${device.mobile}{
        left: ${({ ml }) => ml > 22 ? '-100%' : '-10%'};
        top: ${({ ml }) => ml > 25 ? '-30%' : '-88%'};
        font-size: 10px;
    }
    @media ${device.tablet}{
        font-size: 14px;
        display:${({ ml }) => ml > 15 ? 'flex' : 'none'};
        left: ${({ ml }) => ml > 15 ? '-110%' : '0%'};
        top: ${({ ml }) => ml > 15 ? '-40%' : '-108%'};
    }
    @media ${device.dectop}{
        font-size :16px;
        top: ${({ ml }) => ml > 8 ? '-40%' : '-100%'};
        left: ${({ ml }) => ml > 8 ? '-90px' : '0'};
        display:${({ ml }) => ml > 8 ? 'flex' : 'none'}
    }
`