import { Button, Container,Table } from './../../Generic';
import { Card, Content, Img, P, Title, Wrapper, WrapperText } from './style';
import car from '../../assets/img/globalpage.jpg';
import carRace from '../../assets/img/testpage.jpg';
import carrace from '../../assets/img/frendspage.jpg';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const navigate = useNavigate();
    const {t} = useTranslation()
    const [start, setStart] = useState(true)
    const startGame = (e) => {
        setStart(false)
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
                                    <Title>{t('home.global.title')}</Title>
                                    <P>{t('home.global.text')}</P>
                                </WrapperText>
                                <Button
                                    onClick={() => startGame('/raceGame')}
                                    fontsize='20px'
                                    type={'primary'}
                                    width={'65%'}
                                    height="52px"
                                >
                                    {t('home.global.button')}
                                </Button>
                            </Content>
                            <Img src={car}  ></Img>
                        </Card>
                        <Card>
                            <Content>
                                <WrapperText>
                                    <Title>{t('home.test.title')}</Title>
                                    <P>{t('home.test.text')}</P>
                                </WrapperText>
                                <Button fontsize='20px' type={'primary'} width={'65%'} >{t('home.test.button')}</Button>
                            </Content>
                            <Img src={carRace}  ></Img>
                        </Card>
                        <Card>
                            <Content>
                                <WrapperText>
                                    <Title>{t('home.friends.title')}</Title>
                                    <P>{t('home.friends.text')}</P>
                                </WrapperText>
                                <Button
                                    fontsize='20px'
                                    type={'primary'}
                                    width={'65%'}
                                    onClick={() => startGame('/raceGame')}
                                >
                                    {t('home.friends.button')}
                                </Button>
                            </Content>
                            <Img src={carrace}  ></Img>
                        </Card>
                        <Table   />
                    </Wrapper>
                    : <Loading />
            }
        </Container>
    );
}

export default Home;