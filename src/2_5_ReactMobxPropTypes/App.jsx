import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCollectionView from './components/ItemCollectionView';
import RootStore from './RootStore';
import STORE from './store';

import './App.scss';

function App() {
  console.log('RENDER: App'); // eslint-disable-line no-console
  return (
    <main>
      <RootStore.Provider value={STORE}>
        <Container fluid>
          <Row>
            <Col>
              <ItemCollectionView />
            </Col>
          </Row>
        </Container>
      </RootStore.Provider>
    </main>
  );
}

export default App;
