import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';

function sendMail() {
  var sendTo = document.getElementById("sendTo").value;
  var sub = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var data = {
    from: '"Cabri89" <cabridens@gmail.com>',
    to: sendTo,
    subject: sub,
    text: message,
    html: '<b>'+message+'</b>'
  };
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8080/sendMail", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(data));

}
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="grid_page" class="grid-page">
          <h1 class="title">Contact</h1>
          <div class="form">
            <label>To :</label>
            <input type="text" id="sendTo"/>
            <label>Subject</label>
            <input type="text" id="subject"/>
            <label>Message</label>
            <textarea id="message" rows="20">
            </textarea>
            <input type="button" id="send" value="Envoyer" onClick={sendMail}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

};
