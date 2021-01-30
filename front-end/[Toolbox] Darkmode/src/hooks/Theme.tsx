import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../styles/theme/light';
import dark from '../styles/theme/dark';


interface ThemeContextState {
    changeTheme() : void;
}

const ThemeContext = createContext<ThemeContextState>({} as ThemeContextState);


const MyThemeProvider: React.FC = ({children}) => {
    const themedark = localStorage.getItem('themedark');
    const [darkmode, setDarkmode] = useState(themedark !== 'no');

    const changeTheme = useCallback(() => {
        setDarkmode(!darkmode);
        const dark = !darkmode ? 'yes' : 'no';
        localStorage.setItem('themedark', dark);
    }, [darkmode]);



    return(
        <ThemeProvider theme={!darkmode ? light : dark}>
            <ThemeContext.Provider value={{ changeTheme }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

function useTheme(): ThemeContextState {
    const context = useContext(ThemeContext);

    return context;
}

export { useTheme, MyThemeProvider };