/**
 * Dependencies
 */
import React from "react";
import { Route, Switch } from "react-router-dom";

/**
 * Components
 */
import Home from './home/Home';
import Courses from './courses/Courses';
import Events from './events/Events';
import NotFound from './notFound/NotFound';

export default function Pages() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cursos' component={Courses} />
        <Route path='/eventos' component={Events} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}