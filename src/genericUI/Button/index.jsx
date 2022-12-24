
import { Container } from "./style";

export const Button = ({
    children,
    fontsize,
    onClick,
    width,
    height,
    type,
    size,
    mr,
    ml,
    mb,
    mt

}) => {
    return (
        <Container
            className="nocopy"
            onClick={onClick}
            width={width}
            height={height}
            type={type}
            mr={mr}
            mt={mt}
            mb={mb}
            ml={ml}
            size={size}
            fontsize={fontsize}
        >
            {children}
        </Container>
    );
}

export default Button;