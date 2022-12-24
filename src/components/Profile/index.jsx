
import { Button, Container } from './../../genericUI';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const navigate = useNavigate()
    const submit = () => {
        localStorage.setItem('token', "hello men tug'ildim")
        navigate('/')
    }
    const clear = () => {
        localStorage.removeItem('token')
        navigate('/siginIn')
        navigate('/')
    }

    return (
        <Container fc={true} jc={'center'} >
            <Button onClick={submit} type='primary' width='100px' > Create</Button>
            <Button onClick={clear} type='secondary' width='100px' > Logout</Button>

            <h1>
                {localStorage.getItem('token') ? 'Yes User' : 'Error'}
            </h1>

        </Container>
    );
}

export default Profile;