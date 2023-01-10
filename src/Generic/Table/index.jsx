import { rating } from "../../utils/rating";
import { Img, Td, Th, Wrapper } from "./style";
import './style.css'


function Table() {
    return (
        <Wrapper>
            <table
                className="nocopy table table-striped table-hover"
                style={{ borderCollapse: 'collapse', }}

            >
                <thead>
                    <tr>
                        <Th>#</Th>
                        <Th>  Name </Th>
                        <Th>Speed  </Th>
                        <Th>Time </Th>
                        {/* <Th>Country </Th> */}
                    </tr>
                    {
                        rating.map(({ id, speed, time, name, img, country }) => {
                            return (
                                <tr key={id} style={{ border: '0.5px solid  #92d9ff', textAlign: 'center', padding: '0', }} >
                                    <Td className="number" > {id}</Td>
                                    <Td className="name" > <Img src={img} ></Img>  {name}</Td>
                                    <Td className="speed" >{speed}</Td>
                                    <Td>{time}</Td>
                                </tr>
                            )
                        })
                    }
                </thead>
            </table>
        </Wrapper>
    );
}

export default Table;