import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Home = Loadable({
  loader: () => import('./pages/home/Home'),
  loading: Loading,
});

const Form = Loadable({
  loader: () => import('./pages/form/Form'),
  loading: Loading,
});

const Table = Loadable({
  loader: () => import('./pages/table/Table'),
  loading: Loading,
});

const Summary = Loadable({
  loader: () => import('./pages/summary/Summary'),
  loading: Loading,
});


const _routes = [
  {path: '/home', name: 'Home', component: Home},
  {path: '/form', name: 'Form', component: Form},
  {path: '/table', name: 'Table', component: Table},
  {path: '/summary', name: 'Summary', component: Summary}
];

export default _routes;
