import styled from 'styled-components';
import { device } from '../../utils/responsive';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  height: fit-content;
  margin-top: 60px;
  @media ${device.mobile}{
    width: 92%;
    box-sizing: border-box;
    padding: 0;
  }
  @media ${device.tablet}{
    width: 92%;
    box-sizing: border-box;
    padding: 0;
  }
`

export const Th = styled.th`
    border: 0.5px solid  #92d9ff;
    text-align: center;
`
export const Td = styled.td`
    @media ${device.mobile} {
        font-size: 14px;
    }
    @media ${device.tablet} {
        font-size: 16px;
    }
`
export const Img = styled.img`
    width: 29px;
    height: 29px;
    margin-left:5px ;
    border-radius: 50%;
    box-shadow: 0.5px 1px 2px 1.5px #555;
    @media ${device.mobile}{
        width:15px;
        height: 15px;
    }
    @media ${device.tablet}{
        width: 29px;
        height: 29px;
    }
`