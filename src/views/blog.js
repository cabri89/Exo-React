import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';


const req = new XMLHttpRequest();
var articles = null;

req.onreadystatechange = function(event) {
  if (this.readyState === XMLHttpRequest.DONE) {
    if (this.status === 200) {
      var res = JSON.parse(this.responseText);
      articles = res;
    } else {
    }
  }
};

req.open('GET', 'http://localhost:8080/articles', true);
req.send(null);

function getArticles(props) {
  const listItems = props.map((article) =>
    <li>
      <h1>{article.title}</h1><p>{article.content}</p>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default class Blog extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="grid_page" class="grid-page">
          <h1 class="title">Blog</h1>
          {getArticles(articles)}
        </div>
        <Footer/>
      </div>
    );
  }
};
