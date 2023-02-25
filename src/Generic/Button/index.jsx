
import { Container } from "./style";

export const Button = ({
    children,
    fontsize,
    onClick,
    disabled,
    width,
    height,
    type,
    size,
    mr,
    ml,
    mb,
    mt,
    border

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
            border={border}
            disabled={disabled}
        >
            {children}
        </Container>
    );
}

export default Button;