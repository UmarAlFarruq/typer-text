import { Button, Container } from './../../genericUI';
import { Card, Content, Img, P, Title, Wrapper, WrapperText } from './style';
import car from '../../assets/img/car3.jpg'
import carrace from '../../assets/img/car.png'
import carRace from '../../assets/img/carrace.jpg'
import Table from '../../genericUI/Table';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import { useState } from 'react';

const Home = () => {
    const navigate = useNavigate()
    const [start, setStart] = useState(true)
    const startGame = (e) => {
        setStart(false)
        console.log(e);
        setTimeout(() => {
            navigate(e)
            setStart(true)
        }, 8000)

    }

    return (
        <Container fc={true} jc='center' >
            {
                start ?
                    <Wrapper className='nocopy'>
                        <Card>
                            <Content>
                                <WrapperText>
                                    <Title>TypeRacer - The Global Typing Competition</Title>
                                    <P>Increase your typing speed while racing against others!</P>
                                </WrapperText>
                                <Button
                                    onClick={() => startGame('/raceGame')}
                                    fontsize='20px'
                                    type={'primary'}
                                    width={'65%'}
                                    height="52px"
                                >
                                    Enter Race game
                                </Button>
                            </Content>
                            <Img src={car}  ></Img>
                        </Card>
                        <Card>
                            <Content>
                                <WrapperText>
                                    <Title>Typing Test</Title>
                                    <P>Improve your typing skills on your own</P>
                                </WrapperText>
                                <Button fontsize='20px' type={'primary'} width={'65%'} >Practice YourSelf</Button>
                            </Content>
                            <Img src={carRace}  ></Img>
                        </Card>
                        <Card>
                            <Content>
                                <WrapperText>
                                    <Title>Race your friends</Title>
                                    <P>Create your own racetrack and play with friends</P>
                                </WrapperText>
                                <Button
                                    fontsize='20px'
                                    type={'primary'}
                                    width={'65%'}
                                    onClick={() => startGame('/raceGame')}
                                >
                                    Create Racetrack
                                </Button>
                            </Content>
                            <Img src={carrace}  ></Img>
                        </Card>
                        <Table />
                    </Wrapper>
                    : <Loading />
            }
        </Container>
    );
}

export default Home;