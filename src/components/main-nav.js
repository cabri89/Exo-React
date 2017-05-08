import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class Menu extends Component {
  render() {
    return (
      <nav id="grid_nav" class="nav main">
        <ul class="list">
          <li class="item">
            <NavLink exact={true} to="/" class="link">home</NavLink>
          </li>
          <li class="item">
            <NavLink to="/blog" class="link">blog</NavLink>
          </li>
          <li class="item">
            <NavLink to="/contact" class="link">contact</NavLink>
          </li>
          <li class="item">
            <NavLink to="/dashboard" class="link">dashboard</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
