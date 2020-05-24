import React from 'react'
import { pulse } from 'react-animations'
import Radium, { StyleRoot } from 'radium'

// import { Container } from './styles';

export default function FormMailRelay() {
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
      action="https://flatcodelab.ipzmarketing.com/f/yV4DO8MFXjk"
      accept-charset="UTF-8"
      method="post"
    >
      <input name="utf8" type="hidden" value="&#x2713;" />

      <div className="form-group string optional subscriber_name">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 mt-5"
          type="text"
          name="subscriber[name]"
          id="subscriber_name"
          placeholder="Insira o seu nome"
          required
        />
      </div>
      <div className="form-group email required subscriber_email">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          type="email"
          name="subscriber[email]"
          id="subscriber_email"
          placeholder="Insira o seu melhor e-mail"
          required
        />
      </div>
      <div className="form-group check_boxes optional subscriber_groups text-center mt-3 mb-5">
        <label className="control-label check_boxes optional text-white text-center mt-3 mb-5">
          Selecione a caixa e garanta sua inscrição gratuita:
        </label>
        <br />
        <br />
        <input type="hidden" name="subscriber[group_ids][]" value="" />
        <span className="checkbox">
          <label for="subscriber_group_ids_2" className="text-white text-sm">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              value="2"
              name="subscriber[group_ids][]"
              id="subscriber_group_ids_2"
            />
            EU QUERO CONTEÚDO GRATUITO!
          </label>
        </span>
      </div>
      <input
        type="text"
        name="anotheremail"
        id="anotheremail"
        style={{ position: 'absolute', left: -5000 }}
        tabindex="-1"
        autocomplete="off"
      />
      <div className="submit-wrapper">
        <StyleRoot>
          <input
            type="submit"
            name="commit"
            value="CADASTRAR AGORA"
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
            data-disable-with="Processando"
            style={styles.bounce}
          />
        </StyleRoot>
      </div>
    </form>
  )
}
