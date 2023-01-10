import { useState } from 'react';
import { Button, Containerr, ImgDiv, Info, Span, P, Title, TimeIsUp, ButtonX, WrapperTime, WrapperButton, WrapperInfo, InfoDiv, Div } from "./style";
import { Container } from '../../Generic';
import { useNavigate } from 'react-router-dom';

const YourResult = ({ hidden, accuracy, time, wpm }) => {

    const [hideTextOver, setHideTextOver] = useState(false);
    const navigate = useNavigate()


    return (
        <Container className="nocopy" al={'center'}>
            <Containerr>
                {
                    hidden ?
                        <WrapperTime style={{ display: hideTextOver ? 'none' : 'flex' }} >
                            <TimeIsUp> Sorry you'ar out of time!
                                <Span>
                                    We've reduced your text difficulty to
                                    "Beginner," so that you will get more time for the next race.
                                </Span>
                                <ButtonX
                                    className='nocopy'
                                    onClick={() => setHideTextOver(true)}
                                >X</ButtonX>
                            </TimeIsUp>
                        </WrapperTime>
                        : null
                }
                <WrapperButton>
                    <Button type={'leave'} onClick={() => navigate('/')} > Main menu(leave race)</Button>
                    <Button type={'again'} onClick={() => window.location.reload() } > Race again</Button>
                </WrapperButton>
                <InfoDiv>
                    <Title w={700} >You just typed a quote from the song:</Title>
                    <WrapperInfo>
                        <ImgDiv>
                        </ImgDiv>
                        <Div width={100} >
                            <Title>
                                <P.Value mb={5} width={100} >We Will Become Silhouettes</P.Value>
                                <P.Title>by The Postal Service(submitted by izzy180)</P.Title>
                            </Title>
                            <Div p={10} width={40}  >
                                <Info><P.Title>Your speed:</P.Title><P.Value>{wpm ? wpm : 0} wpm</P.Value></Info>
                                <Info><P.Title>Time:</P.Title><P.Value>{time} s</P.Value></Info>
                                <Info><P.Title>Accuracy:</P.Title><P.Value> {accuracy}{typeof accuracy === 'number' && '%'}</P.Value></Info>
                                <Info><P.Title>Points:</P.Title><P.Value>10</P.Value></Info>
                            </Div>
                            <Info>* this score will not be saved since you didn't finish typing the text in time.</Info>
                        </Div>
                    </WrapperInfo>
                </InfoDiv>
            </Containerr>
        </Container >
    )
}
export default YourResult;