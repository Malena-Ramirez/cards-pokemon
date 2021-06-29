import React from 'react';
import CardDetail from '../components/CardDetail';
import CardsContainer from '../components/CardsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <CardsContainer onClick={() => setModalShow(true)} />
      <CardDetail show={modalShow}
        onHide={() => setModalShow(false)} />

    </>
  );
}
export default App;
