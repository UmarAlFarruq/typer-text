
import { Containerr } from './style'

const Container = ({ children, al, p, m, jc, fc, mt }) => {
    return (
        <Containerr
            al={al}
            jc={jc}
            fc={fc}
            p={p}
            m={m}
            mt={mt}
        >
            {children}
        </Containerr>
    );
}

export default Container;