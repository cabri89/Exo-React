import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="grid_page" class="grid-page">
          <h1 class="title">Dashboard</h1>
        </div>
        <Footer/>
      </div>
    );
  }
};
