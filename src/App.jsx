import React, { lazy, Suspense } from 'react';
// import classNames from 'classnames';
import {
  createBrowserRouter,
  useLoaderData,
  RouterProvider,
} from 'react-router-dom';
import Root from './components/Root';
import FatalError from './components/FatalError';
import Welcome from './components/Welcome';
import HousesView from './components/HousesView';
import InterrogatorView from './components/InterrogatorView';
import RootStore from './RootStore';
import STORE from './store';

import './App.scss';
import HouseView from './components/HouseView';
import { WithPagedTitle, withPageTitle } from './components/utils';

const HousesResume = lazy(() => import(/* webpackChunkName: "bundler-housesResume" */ './components/HousesResume'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <FatalError />,
    children: [
      {
        index: true,
        element: <WithPagedTitle pageTitle="Welcome"><Welcome /></WithPagedTitle>,
      },
      {
        path: 'houses',
        Component: withPageTitle(HousesView, 'Houses'),
        children: [
          {
            index: true,
            element: null,
          },
          {
            path: ':houseId',
            Component: () => {
              const house = useLoaderData();
              return (
                <WithPagedTitle pageTitle={`House ${house.name}`}>
                  <HouseView house={house} />
                </WithPagedTitle>
              );
            },
            loader: async ({ params }) => {
              const { houseManager } = STORE;
              const house = houseManager.houses.find((h) => h.id === params.houseId);
              if (!house) {
                throw new Error('House not found');
              }
              return house;
            },
          },
        ],
      },
      {
        path: 'houses-resume',
        element: (
          <Suspense fallback={<h4>Chargement du composant...</h4>}>
            <WithPagedTitle pageTitle="Resume"><HousesResume /></WithPagedTitle>
          </Suspense>),
      },
      {
        path: 'interrogator',
        element: (
          <WithPagedTitle pageTitle="Interrogator" overrideAppTitle>
            <InterrogatorView />
          </WithPagedTitle>),
      },
    ],
  },
]);

function App() {
  return (
    <RootStore.Provider value={STORE}>
      <RouterProvider router={router} />
    </RootStore.Provider>
  );
}

export default App;
