import './App.scss';

import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from 'configurations/react-query';
import 'configurations/i18next';
// import 'configurations/axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import Router from 'configurations/react-router';

function App () {
  return (
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter><Router /></BrowserRouter>
      <ReactQueryDevtools initialIsOpen={ false } />
    </QueryClientProvider>
  );
}

export default App;
