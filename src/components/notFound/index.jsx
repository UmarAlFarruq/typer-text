
import { Container, Wrapper,  } from "./style";
// import { Image,Button } from "antd";
import { useNavigate } from 'react-router-dom'
// import img from '../../assets/images/not-found1.png'
import { Button } from "../../Generic";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        {/* <Image
          className="nocopy"
          preview={false}
          src={img}
        /> */}
        <Wrapper.Text>

          <h1 className="nocopy"
            style={{ marginTop: '-3%' }}
          >Sorry this page is not available</h1>
          <Wrapper.Button>

            <Button
              className="nocopy"
              type="primary"
              onClick={() => navigate('/')}
            >
              Bosh sahifaga qaytish
            </Button>
            <Button
              className="nocopy"
              type="primary"
              onClick={() => navigate(`${window.history.back()}`)}
            >
              Ortga qaytish
            </Button>
          </Wrapper.Button>
        </Wrapper.Text>
      </Wrapper>
    </Container >
  );
}
export default NotFound;