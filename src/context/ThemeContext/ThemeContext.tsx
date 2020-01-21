import React, { createContext, useContext, useReducer } from 'react';

interface ThemeState {
  mode: string;
  light: Themes;
  dark: Themes;
}

interface Themes {
  main: string;
  primary: string;
  primaryVariant: string;
  secondary: string;
  warning: string;
  danger: string;
  error: string;
  background: string;
}

type Action = { type: string; payload: any };

export const themeInitialState: ThemeState = {
  mode: 'light',
  light: {
    main: '',
    primary: '',
    primaryVariant: '',
    secondary: '',
    warning: '',
    danger: '',
    error: '',
    background: ''
  },
  dark: {
    main: '',
    primary: '',
    primaryVariant: '',
    secondary: '',
    warning: '',
    danger: '',
    error: '',
    background: ''
  }
};

export const reducer = (state: ThemeState, action: Action) => {
  switch (action.type) {
    case 'openModal':
      return {
        ...state,
        modal: action.payload
      };

    default:
      return state;
  }
};

// export const ThemeContext = createContext(ThemeInitialState);
export const ThemeContext = createContext<{
  state: typeof themeInitialState;
  dispatch: (action: Action) => void;
}>({ state: themeInitialState, dispatch: () => {} });

export function ThemeProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, themeInitialState);
  const value = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const ThemeStateValue = () => useContext(ThemeContext);
