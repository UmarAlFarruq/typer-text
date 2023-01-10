import styled from 'styled-components'
import { device } from '../../utils/responsive'

export const Containerr = styled.div`
    box-sizing: border-box;
    max-width: 1440px;
    min-width: 350px;
    width: 100%;
    display: flex;
    flex-direction:${({ fc }) => fc && 'column'};
    align-items: ${({ jc }) => jc || 'start'};
    justify-content: ${({ al }) => al || 'start'};
    padding: ${({ p }) => p || 0};
    margin: ${({ p }) => p || 0};
    
    @media ${device.mobile}{
        padding: 0 1px;
    }
    @media ${device.tablet}{
        padding: 3px 12px;
    }
    @media ${device.dectop}{
        padding: 3px 60px;
    }
`
export const MinWidth = styled.div`
    display: flex;
`
