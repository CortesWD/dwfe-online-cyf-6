/**
 * Dependencies
 */
import React from "react";
import { Route } from "react-router-dom";

/**
 * Components
 */
import Home from '../components/home/Home';
import Courses from '../components/courses/Courses';
import Events from '../components/events/Events';
import { URLS } from '../utils/constants';

export default function Pages() {
  return (
    <>
      {/* <Route exact path='/' component={Home} /> */}
      <Route exact path={URLS.home} component={Home} />
      {/* <Route path='/cursos' component={Courses} /> */}
      <Route path={URLS.courses} component={Courses} />
      {/* <Route path='/eventos' component={Events} /> */}
      <Route path={URLS.events} component={Events} />
    </>
  )
}