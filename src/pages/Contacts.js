import React, { Component } from 'react'

export class Contacts extends Component {
  render() {
    return (
      <div>
        <main className="section">
  <div className="container">
    <h1 className="title-1">Contacts</h1>
    <ul className="content-list">
      <li className="content-list__item">
        <h2 className="title-2">Location</h2>
        <p>Chisinau, Moldova</p>
      </li>
      <li className="content-list__item">
        <h2 className="title-2">Telegram / WhatsApp</h2>
        <p><a href="tel:+79051234567">+373 (0) 62026015</a></p>
      </li>
      <li className="content-list__item">
        <h2 className="title-2">Email</h2>
        <p><a href="mailto:webdev@protonmail.com">worittagebez@gmail.com</a></p>
      </li>
    </ul>
  </div>
</main>
      </div>
    )
  }
}

export default Contacts