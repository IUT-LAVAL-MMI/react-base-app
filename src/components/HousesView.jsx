import React, { useContext } from 'react';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import RootStore from '../RootStore';

function HousesView() {
  const { houseManager } = useContext(RootStore);
  return (
    <>
      <Row className={classNames('justify-content-sm-center')}>
        <Col xs={12} sm={8} md={6} lg={6} xl={4}>
          <h1>
            Editeur de maisons :
            {houseManager.nbHouses}
            {' '}
            maisons
          </h1>
        </Col>
      </Row>
      <Row className={classNames('mt-2')}>
        {
          houseManager.houses.map((house) => (
            <Col key={house.name}>
              <ButtonGroup>
                <LinkContainer to={house.id}>
                  <Button variant="success">{house.name}</Button>
                </LinkContainer>
                <Button variant="danger" onClick={() => houseManager.removeHouse(house)}>X</Button>
              </ButtonGroup>
            </Col>
          ))
        }
      </Row>
      <Row className={classNames('justify-content-sm-center', 'mt-2')}>
        <Col xs={12} sm={8} md={6} lg={6} xl={4}>
          <Outlet />
        </Col>
      </Row>
    </>

  );
}

export default observer(HousesView);
