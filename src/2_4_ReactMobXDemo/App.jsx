import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputArea from './components/InputArea/InputArea';
import FormattingTools from './components/FormattingTools/FormattingTools';
import TextsList from './components/TextsList/TextsList';
import Turnaround from './components/Turnaround/Turnaround';
import RootStore from './RootStore';
import STORE from './store';

import './App.scss';

function App() {
  return (
    <main>
      <RootStore.Provider value={STORE}>
        <Container fluid>
          <Row>
            <Col>
              <InputArea />
              <FormattingTools className="mt-2" />
            </Col>
            <Col>
              <TextsList />
            </Col>
            <Col>
              <Turnaround />
            </Col>
          </Row>
        </Container>
      </RootStore.Provider>
    </main>
  );
}

export default App;
