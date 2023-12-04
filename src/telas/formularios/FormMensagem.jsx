import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../redux/mensagemReducer';

const MessageForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!text.trim()) {
      alert('Por favor, insira uma mensagem.');
      return;
    }

    // Objeto da mensagem a ser enviado ao backend
    const messageData = {
      // Defina os atributos necessários para enviar a mensagem ao backend
      text,
      // ... outros atributos, como o usuário que envia a mensagem, etc.
    };

    // Dispatch da action `sendMessage` para enviar a mensagem
    dispatch(sendMessage(messageData));

    // Limpa o campo de texto após o envio da mensagem
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Digite sua mensagem..."
        rows={4}
        cols={50}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MessageForm;
