/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'react-i18next';

const Socket = () => {
    const {t} = useTranslation()
    return (
        <div>
            Sokket: {t('test')}
        </div>
    );
}

export default Socket;