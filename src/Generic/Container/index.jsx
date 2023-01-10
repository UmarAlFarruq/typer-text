
import { Containerr } from './style'

const Container = ({ children, al, p, m, jc, fc }) => {
    return (
        <Containerr
            al={al}
            jc={jc}
            fc={fc}
            p={p}
            m={m}
        >
            {children}
        </Containerr>
    );
}

export default Container;