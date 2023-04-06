import { BrowserRouter } from 'react-router-dom';

import { Header } from './app/shared-modules/header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;
