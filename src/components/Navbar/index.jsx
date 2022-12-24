import { Button, Container, Select } from "../../genericUI";
import { IMG, Logo, Wrapper } from "./style";
import user from '../../assets/img/user.jpg'
import { Outlet, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    localStorage.getItem('token')
    return (
        <>
            <Container al={'center'} >
                <Logo className="nocopy animate-charcter" onClick={() => navigate('/')}  >Text Control</Logo>
                <Wrapper>
                    <Button type='primary' width='100px' onClick={() => navigate('/socket')} >Socket</Button>
                    <Select
                        option={[
                            { value: 'ru', name: 'Ru' },
                            { value: 'uz', name: 'Uz' },
                            { value: 'en', name: 'En' },
                        ]}
                    >
                    </Select>
                    {
                        localStorage.getItem('token') ?
                            <IMG
                                src={user}
                                className="nocopy"
                                onClick={() => navigate('/profile')}
                            ></IMG>
                            :
                            <Button type='primary' width='100px' onClick={() => navigate('/siginin')} >Sigin In</Button>
                    }
                </Wrapper>
            </Container>
            <Outlet />
        </>
    );
}

export default Navbar;