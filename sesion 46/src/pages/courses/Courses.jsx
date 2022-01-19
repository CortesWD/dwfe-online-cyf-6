/**
 * Dependencies
 */
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Course from '../../components/course/Course';
import NotFound from '../notFound/NotFound';

/**
 * Components
 */
import List from './components/list/List';

/**
 * Styles
 */
import './Courses.css';

const cursos = [
  {
    id: "1",
    name: "UX/UI",
    url: "ux"
  },
  {
    id: "2",
    name: "Data Science",
    url: "ds"
  },
  {
    id: "3",
    name: "Desarrollo Back-end",
    url: "fsv"
  },
  {
    id: "4",
    name: "Desarrollo Front-end",
    url: "fa"
  }
];

function Courses() {
  return (
    <>
      <Switch>
      <Route
        exact
        path="/cursos"
        render={() => {
          return (<List cursos={cursos} />)
        }}
      />
      <Route
        path="/cursos/ux"
        render={() => (<Course name="UX/UI" image="/assets/ux.svg" />)}
      />
      <Route
        path="/cursos/ds"
        render={() => (<Course name="Data Science" image="/assets/datascience.svg" />)}
      />
      <Route
        path="/cursos/fsv"
        render={() => (<Course name="Backend" image="/assets/backend.svg" />)}
      />
      <Route
        path="/cursos/fa"
        render={() => (<Course name="Frontend" image="/assets/frontend.svg" />)}
      />
      <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default Courses;