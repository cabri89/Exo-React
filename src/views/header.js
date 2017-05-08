import React, {Component} from 'react';
import MainNav from '../components/main-nav.js';
import {logo} from "../assets/img/logo.png";

export default class pageHeader extends Component {
  render() {
    return (
      <header id="grid_header" class="row grid-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="logo" class="logo" />
        <MainNav/>
      </header>
    );
  }
}
