import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarhandler = () => {
    setCartIsShown(true);
  };

  const hideCarhandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCarhandler} />}
      <Header onShowCart={showCarhandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
