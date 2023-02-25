import { Container, ImgCar, ImgShina1, ImgShina2, Wrapper, WrapperImg } from "./style";
import car from '../../assets/img/loadingCar.jpg'
import shina from '../../assets/img/11.jpg'

const Loading = () => {
    return (
        <Container>
            <Wrapper>
                <WrapperImg className="nocopy" >
                    <ImgCar src={car} ></ImgCar>
                    <ImgShina1  src={shina} ></ImgShina1>
                    <ImgShina2  src={shina} ></ImgShina2>
                </WrapperImg>
            </Wrapper>
        </Container>
    );
}

export default Loading;