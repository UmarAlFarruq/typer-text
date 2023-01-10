/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useMemo, useEffect } from 'react';
import { Container } from '../../Generic';
import CarMove from '../CarMove';
import YourResult from '../yourResult';
import { Active, Div, Error, H3, Input, Span, Success, Wrapper, WrapperInput, WrapperText, WrapTime } from './style';

const TyperText = () => {
    ///////////////////////////         Verabiles      //////////////////////////////
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quibusdam.';
    const [gameOver, setGameOver] = useState(false);
    const [inputValue, setInputValue] = useState('');
    let length = inputValue.length; // input length
    const [count, setCount] = useState({
        active: 0,
        error: 0,
        before: 0,
        type: '',
        accuracy: 0,
    });
    
    // Destructuring 
    const { active, error, before, accuracy: errorLength } = count;

    let after = text.indexOf(' ', before); //  avtive text oxirgi index
    let text_over = (before + active === text.length);   //  text tugadi;
    let finished_road = useMemo(() => {
        return Math.floor((before + active) * 100 / text.length)
    }, [count.before]);  // ml || finished road || yozib bo'lingan text uzunligi foizda(%);
    let time = Math.floor(text.length / 2)
    const [minuts, setMinuts] = useState(time > 60 ? Math.floor(time / 60) : 0);
    const [seconds, setSeconds] = useState(time > 60 ? time % 60 : time);
    let lifeTime = useMemo(() => { return (time - minuts * 60 - seconds) }, [before]);   // secondda text yozish vaxti
    let wpm = useMemo(() => { return Math.floor(text.length * (before + active) / lifeTime) }, [before]);
    var timer;

    ///////////////////////////         TIMER      //////////////////////////////
    useEffect(() => {
        timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minuts > 0) {
                    setMinuts(minuts - 1);
                    setSeconds(59)
                } else stop();
            }
        }, 1000)
        if (minuts === 0 && seconds === 0) {
            stop();
            setGameOver(true);
        } else if (text_over) {
            stop();
        }

        return () => clearInterval(timer);
    });
    const stop = () => { clearInterval(timer) }
    let time_ui = `${minuts < 10 ? `0${minuts}` : minuts} :${seconds < 10 ? `0${seconds}` : seconds}`
    //////////////////////////      END TIMER      ////////////////////////////////////////////////

    if (after <= 0) after = before + text.slice(before).length; // active oxirgi so'zga borganda after
    // TEXT YOZISH, TEKSHIRISH, UZUNLIGLARINI ANIQLASH UCHUN IF ELSE CODLAR //////////////////
    if (text.slice(before, before + length) === inputValue && length > active) {
        setCount({ ...count, active: length, error: 0, type: 'active' });
        if (text.slice(before, after + 1) === inputValue) {
            setInputValue('')
            setCount({ ...count, before: before + length, active: 0, error: 0 });
        }
    } else if (length - 1 >= active + error && length <= after - before + 1)
        setCount({ ...count, error: error + 1, type: 'error', accuracy: errorLength + 1 });
    else if (length < active)
        setCount({ ...count, active: length, })
    else if (length < active + error)
        setCount({ ...count, error: length - active, type: 'active' });
    ////////////////////        END      ////////////////////////////////////////////
    return (
        <>
            <WrapTime className='nocopy' >
                <H3 > The race has ended. </H3>
                <h3> {text_over ? '00:00' : time_ui} </h3>
            </WrapTime>
            <CarMove ml={finished_road} wpm={wpm} />
            {
                text_over || gameOver ?
                    <YourResult
                        time={lifeTime || text.length / 2}
                        wpm={wpm}
                        accuracy={wpm > 0 ? (errorLength && Math.floor(100 - errorLength * 100 / text.length)) : `you didn't play`}
                        hidden={gameOver}
                    /> :
                    <Container ml={finished_road}  >
                        <Wrapper mt={true} >
                            <Div>
                                <WrapperText>
                                    <Success>{text.slice(0, before)}</Success>
                                    <Active>
                                        <Success type={'active'} >{text.slice(before, before + active)}
                                            {!error ? <Span></Span> : null}
                                            <Error>
                                                {error ? text.slice(before + active, before + active + error) : null}
                                            </Error>
                                            {error ? <Span></Span> : null}
                                        </Success>
                                        {text.slice(before + length, after)}
                                    </Active>
                                    {text.slice(after)}
                                </WrapperText>
                                <WrapperInput>
                                    <Input
                                        placeholder='input'
                                        onChange={(e) => setInputValue(e.target.value)}
                                        value={inputValue}
                                        type={count.type}
                                    />
                                </WrapperInput>
                            </Div>
                        </Wrapper>
                    </Container>
            }
        </>
    );
}

export default TyperText;