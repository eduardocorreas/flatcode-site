import React from 'react'
import { pulse } from 'react-animations'
import Radium, { StyleRoot } from 'radium'

// import { Container } from './styles';

export default function FormEmailMarketing() {
  const styles = {
    bounce: {
      animation: 'infinite x 1s',
      animationName: Radium.keyframes(pulse, 'pulse'),
    },
  }
  return (
    <form
      className="simple_form form form-vertical"
      id="new_subscriber"
      novalidate="novalidate"
      action="https://flatcodesm.us19.list-manage.com/subscribe/post?u=6e959381bfba31085590a4191&amp;id=1404175602"
      accept-charset="UTF-8"
      method="post"
    >
      <input name="utf8" type="hidden" value="&#x2713;" />

      <div className="form-group string optional subscriber_name">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 mt-5"
          type="text"
          name="FNAME"
          id="mce-FNAME"
          placeholder="Insira o seu nome"
          required
        />
      </div>
      <div className="form-group email required subscriber_email">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="Insira o seu melhor e-mail"
          required
        />
      </div>
      <div className="submit-wrapper">
        <StyleRoot>
          <input
            type="submit"
            name="commit"
            value="CADASTRAR AGORA"
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
            id="mc-embedded-subscribe"
            style={styles.bounce}
          />
        </StyleRoot>
      </div>
    </form>
  )
}
