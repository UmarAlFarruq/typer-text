import styled from 'styled-components';

const size = {
    mobile: '350px',
    tablet: '500px',
    dectop: '1024px',
}
const device = {
    mobile: `(min-width:${size.mobile})`,
    tablet: `(min-width:${size.tablet})`,
    dectop: `(min-width:${size.dectop})`,
}

const getType = (type) => {
    switch (type) {
        case 'secondary': return {
            border: '1px solid #e6e9ec',
            color: '#0D263B',
        };
        case 'primary':
            return {
                background: '#0061DF',
                color: '#FFFFFF',
                border: '1px solid #0061DF',
            };
        default:
            return {
                border: '1px solid #E9E9EC',
                color: '#FFFFFF',
            }

    }
}

const Container = styled.button`
    font-family: var(--headerFond);
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    background: none;
    height: 44px;
    padding:${({ pd }) => `${pd}px`} ;
    white-space:nowrap ;
    margin-top: ${({ mt }) => `${mt}px`};
    margin-right: ${({ mr }) => `${mr}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
    margin-left: ${({ ml }) => `${ml}px`};
    border-radius: 2px;
    font-family:sans-serif;
    cursor: pointer;
    ${({ type }) => getType(type)}
    :active{
        transform: scale(0.98);
        opacity: 0.7;
    }

    @media ${device.mobile} {
        width: fit-content ;
        height:30px;
        padding: 6px 6px;
        font-size:12px;
        line-height:16px;
    }
    @media ${device.tablet} {
        width: fit-content ;
        height:38px;
        padding:4px 8px;
        font-size:14px;
        line-height:20px;
    }
    @media ${device.dectop} {
        width: fit-content ;
        height:44px;
        width: ${({ width }) => width || '100%'};
        height: ${({ height }) => height || '44px'};
        font-size: ${({ fontsize }) => fontsize};
        
    }


`

export { Container };


