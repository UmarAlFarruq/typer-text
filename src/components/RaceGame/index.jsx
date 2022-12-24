
import { Container } from './../../genericUI';
import { Div, Input, Wrapper, WrapperInput, WrapperText } from './style';

const RaceText = () => {
    return (
        <Container>
            <Wrapper>
                <Div>
                    <WrapperText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et perferendis laudantium! Error dignissimos iusto nam nemo repellat, quae sapiente!
                    </WrapperText>
                    <WrapperInput>
                        <Input placeholder='input' />
                    </WrapperInput>
                </Div>
            </Wrapper>
        </Container>
    );
}

export default RaceText;