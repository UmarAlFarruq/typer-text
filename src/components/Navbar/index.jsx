/* eslint-disable no-const-assign */
import { Button, Container, } from "../../Generic";
import { IMG, Logo, Wrapper } from "./style";
import user from '../../assets/img/user.png'
import { Outlet, useNavigate } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import i18next from "i18next";
import cookie from 'js-cookie';
import { useTranslation } from 'react-i18next';

const lenguage = [
    {
        name: 'Uzbek',
        code: 'uz',
        flag: 'uz'
    },
    {
        name: `English`,
        code: 'en',
        flag: 'gb'
    },
    {
        name: 'Russsia',
        code: 'ru',
        flag: 'ru'
    },
]


const Navbar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation()
    localStorage.getItem('token');
    const currentLenguageCode = cookie.get('i18next') || 'en';
    const items = lenguage.map(({ name, code, flag }) => {
        return {
            label: <p
                onClick={() => {
                    i18next.changeLanguage(code);
                }}
                style={{ opacity: code === currentLenguageCode ? .6 : 1 }}
            >
                {<span className={`fi fi-${flag}`}></span>} &nbsp; {name}
            </p>,
            key: `${code}`
        }

    })
    return (
        <>
            <Container al={'center'} >
                <Logo className="nocopy animate-charcter" onClick={() => navigate('/')}>Text Control</Logo>
                <Wrapper>
                    <Button type='primary' width='100px' onClick={() => navigate('/socket')} >Socket</Button>
                    <Dropdown menu={{ items }} trigger={['click']} >
                        <Button width='100px' >
                            {t('navbar.lenguage')}&nbsp; <DownOutlined />
                        </Button>
                    </Dropdown>
                    {
                        localStorage.getItem('token') ?
                            <IMG
                                src={user}
                                className="nocopy"
                                onClick={() => navigate('/profile')}
                            ></IMG>
                            :
                            <Button type='primary' width='100px' onClick={() => navigate('/siginin')} >{t('navbar.signin')}</Button>
                    }
                </Wrapper>
            </Container>
            <Outlet />
        </>
    );
}

export default Navbar;