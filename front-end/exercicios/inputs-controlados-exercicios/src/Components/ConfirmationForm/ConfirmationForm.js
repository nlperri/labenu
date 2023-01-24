import React, { useState } from "react";
import { Form } from "../MainPage/styles";
import { Input } from "../MainPage/styles";

const ConfirmationForm = () => {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [select, setSelect] = useState("");

  const sendForm = (event) => {
    event.preventDefault();
    if (date != "" && phone != "" && select != "") {
      setDate("");
      setPhone("");
      setSelect("");
      alert("Inscrição finalizada");
    } else {
      alert("Usuário não respondeu o formulário corretamente");
    }
  };

  return (
    <Form>
      <label>Data de nascimento:</label>
      <Input
        onChange={(event) => {
          setDate(event.target.value);
        }}
        value={date}
        type="date"
      />
      <label>Telefone:</label>
      <Input
        onChange={(event) => {
          setPhone(event.target.value);
        }}
        value={phone}
        type="tel"
      />
      <label>Etnia:</label>
      <select
        onChange={(event) => {
          setSelect(event.target.value);
        }}
        value={select}
      >
        <option value="" data-default disabled selected></option>
        <option>Branco</option>
        <option>Negro</option>
        <option>Pard</option>
        <option>Amarelo</option>
        <option>Indígena</option>
        <option>Prefiro não dizer</option>
      </select>

      <button onClick={sendForm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;
