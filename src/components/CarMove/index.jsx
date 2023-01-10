import { memo, useEffect, useState } from 'react';
import { Container, WrapperCars, Img, Guset, WrapperVPM, WrapperIMG, P, Popover, Wrapper, PopoverInfo, } from "./style";
import car1 from '../../assets/img/racecar1.jpg'
import car2 from '../../assets/img/racecar2.jpg'
import car3 from '../../assets/img/racecar3.jpg'
import car4 from '../../assets/img/racecar4.jpg'
import car6 from '../../assets/img/racecar6.png'


const CarMove = ({ ml, wpm }) => {
    let random = Math.floor(Math.random() * 10);
    const [count, setCount] = useState(0)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        wpm = setInterval(() => {
            setCount(count + Math.floor(Math.random() * 10));
        }, 3000);

        return () => clearInterval(wpm);
    });
    const stop = () => { return clearInterval(wpm) };
    stop();

    const cars = [
        { id: 1, name: 'Guest', car: car2 },
        { id: 2, name: 'Guest', car: car4 },
        { id: 3, name: 'Guest', car: car3 },
        { id: 4, name: 'Guest', car: car1 },
    ]

    return (
        <Container className='nocopy' >
            <WrapperCars second={0.3}  >
                <WrapperIMG>
                    {/* <P.Wpm>Mehmon:(you)</P.Wpm> */}
                    <Wrapper ml={ml || 0}>
                        <Img src={car6}></Img>
                        <Guset ml={ml} >Guset:(you)</Guset>
                        <Popover ml={ml} >
                            <P.Place>You:</P.Place>
                            <PopoverInfo>
                                <P.Place>Speed{`${Math.floor(ml) || 0}  CPM`.padStart(26, '.')}</P.Place>
                                <P.Place>Last race{`${random + random + 10} CPM`.padStart(21, '.')}</P.Place>
                                <P.Place>Best race{`${random * 3 + 10 || 0}  CPM`.padStart(21, '.')}</P.Place>
                                <P.Place>Points{`${random}`.padStart(20, '.')}</P.Place>
                                <P.Place>Races completed{`${Math.floor(random / 3)}`.padStart(11, '.')}</P.Place>
                                <P.Place>Country  {'Uzbekistan '.padStart(19, '.')}</P.Place>
                            </PopoverInfo>
                        </Popover>
                    </Wrapper>
                </WrapperIMG>
                <WrapperVPM>
                    <P.Place> {wpm || 0} wpm</P.Place>
                </WrapperVPM>
            </WrapperCars>
            {
                cars.map(({ wpm, car, id, }) => {
                    return (
                        <WrapperCars key={id} second={id * 0.4 + 0.3} >
                            <WrapperIMG>
                                <Wrapper ml={wpm < 90 ? wpm * 0.8 : null} >
                                    <Img src={car} ></Img>
                                    <Popover left={ml > 60 || ml === 0 ? true : false}>
                                        <Img src={car6}></Img>
                                    </Popover>
                                    <Guset >Guset:</Guset>
                                </Wrapper>
                            </WrapperIMG>
                            <WrapperVPM>
                                <P.Place>0 wpm</P.Place>
                            </WrapperVPM>
                        </WrapperCars>
                    )
                })
            }

        </Container >
    );
}

export default memo(CarMove);