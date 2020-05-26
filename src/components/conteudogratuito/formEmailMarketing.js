import React from 'react'

// import { Container } from './styles';

export default function FormEmailMarketing() {
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
          className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 mt-5"
          type="text"
          name="FNAME"
          id="mce-FNAME"
          placeholder="Insira o seu nome"
          required
        />
      </div>
      <div className="form-group email required subscriber_email">
        <input
          className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="Insira o seu melhor e-mail"
          required
        />
      </div>
      <div className="submit-wrapper">
        <input
          type="submit"
          name="commit"
          value="CADASTRAR AGORA"
          className="font-bold text-white rounded py-4 px-8 shadow-lg uppercase tracking-wider w-full bg-orange-500 hover:bg-orange-400 cursor-pointer"
          id="mc-embedded-subscribe"
        />
      </div>

      <p className="text-white text-center p-5">
        Valorizamos sua privacidade e nunca te enviaremos spam!
      </p>
    </form>
  )
}
