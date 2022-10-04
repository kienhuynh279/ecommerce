import { StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/styles';
import i18n from 'app/i18n';
import PublicRoute from 'app/navigation/PublicRoute';
import store from 'app/store';
import theme from 'app/theme';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContext from './includes/AuthContext';
import GlobalCss from './includes/GlobalCss';
import Guard from './includes/Guard';

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <StyledEngineProvider injectFirst>
            <GlobalCss />
          </StyledEngineProvider>

          <BrowserRouter>
            <AuthContext>
              <Routes>
                <Route path="/*" element={<Guard />}></Route>
                {PublicRoute.map((route, i) => {
                  const { path, element: AuthComponent } = route
                  return <Route key={i} path={path} element={AuthComponent ? <AuthComponent /> : null}></Route>
                })}
              </Routes>
            </AuthContext>
          </BrowserRouter>

        </ThemeProvider>
      </I18nextProvider>
    </Provider >
  );
}

export default App;
