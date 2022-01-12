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

export default function Pages() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/cursos' component={Courses} />
      <Route path='/eventos' component={Events} />
    </>
  )
}