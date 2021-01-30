import React, { useCallback, useState } from 'react';
import Switch from 'react-switch';

import { useTheme } from '../../hooks/Theme';

import * as S from './styles';

const Home: React.FC = () => {
    const themedark = localStorage.getItem('themedark');
    const [checked, setChecked] = useState(themedark !== 'no' ? true : false);

    const { changeTheme } = useTheme();

    const handleTheme = useCallback(() => {
        setChecked(checked ? false :  true);
        changeTheme();
    }, [checked]);

    return(
        <S.Container>
            <h1>Trocar tema!</h1>
            <div>
                <Switch onChange={handleTheme} checked={checked} />
            </div>
        </S.Container>
    ) ;
}

export default Home;