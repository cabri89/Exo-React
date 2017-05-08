import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';
import RessourcesTD from '../components/ressources-td.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="grid_page" class="grid-page">
          <h1 class="title">Home</h1>
          <RessourcesTD/>
        </div>
        <Footer/>
      </div>
    );
  }
};
