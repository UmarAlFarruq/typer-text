import { Container, OptionSelect } from "./style";



const Select = ({ option }) => {
    return (
        <Container>
            {option.map((item) => {
                    return <OptionSelect key={item.value} >{item.name}</OptionSelect>
                })}
        </Container>
    );
}

export default Select;