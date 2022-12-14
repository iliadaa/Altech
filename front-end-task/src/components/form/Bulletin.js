import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstApi } from "../../redux/api/actions";
import Input from "../genericInput/Input";
import "./Bulletin.scss";
import searchIcon from "../../assets/searchIcon.png";
const Bulletin = () => {
  const dispatch = useDispatch();
  const api1 = useSelector((state) => state.api);
  const [selectedOption, setSelectedOptions] = useState("");
  const [values, setValues] = useState({
    tipologia: `${api1.tipoBbollettino}`,
    numero_conto_corrente: "",
    companyName: "",
    diEuro: "",
    causale: "",
    person: "",
    nome: "",
    cognome: "",
    denominazione: "",
    indirizzo: "",
    citta: "",
  });

  const fetchOnClick = () => {
    dispatch(firstApi(values));
    console.log(values);
  };

  const inputs = [
    {
      id: 1,
      name: "tipologia",
      type: "text",
      placeholder: "Bianco Generico (TD 123)",
      label: "Tipo Bolletino",
      required: true,
      className: "input",
      readOnly: true,
      value: "Bianco Generico (TD " + +`${values.tipologia}` + ")",
      imgclassName: "icon_hidden",
    },
    {
      id: 2,
      name: "numero_conto_corrente",
      type: "text",
      placeholder: "Numero Conto Corrente",
      label: "Numero Conto Corrente",
      required: true,
      className: "input ",
      isDisabled: false,
      value: `${values.numero_conto_corrente}`,
      src: searchIcon,
      fetchClick: fetchOnClick,
      imgclassName: "img-icon",
    },
    {
      id: 3,
      name: "companyName",
      type: "textarea",
      placeholder: "Nome beneficario del pagamento",
      label: "Intestato a",
      className: "input-color bold",
      value: `${api1.companyName}` || `${api1.errorCompanyName}`,
      readOnly: true,
    },
    {
      id: 4,
      name: "diEuro",
      type: "number",
      placeholder: "00.00",
      label: "di Euro €",
      required: true,
      className: "input bold",
      isDisabled: false,
      imgclassName: "icon_hidden",
    },
    {
      id: 5,
      name: "causale",
      type: "text",
      placeholder: "Causale",
      label: "Causale",
      required: true,
      className: "input",
      isDisabled: false,
      imgclassName: "icon_hidden",
    },
    {
      id: 6,
      name: "person",
      type: "radio",
      placeholder: "Fisica",
      label: "Fisica",
      required: true,
      className: "checkbox",
      isDisabled: false,
      imgclassName: "icon_hidden",
      value: "F",
      checked: "",
    },
    {
      id: 7,
      name: "person",
      type: "radio",
      placeholder: "Giurisica",
      label: "Giurisica",
      required: true,
      className: "checkbox",
      isDisabled: false,
      imgclassName: "icon_hidden",
      value: "G",
      checked: "",
    },
    {
      id: 8,
      name: "nome",
      type: "text",
      placeholder: "Nome",
      label: "Nome ",
      required: true,
      className: "input",
      isDisabled: false,
      imgclassName: "icon_hidden",
    },
    {
      id: 9,
      name: "cognome",
      type: "text",
      placeholder: "Cognome",
      label: "Cognome",
      required: true,
      className: "input",
      isDisabled: false,
      imgclassName: "icon_hidden",
    },
    {
      id: 10,
      name: "denominazione",
      type: "text",
      placeholder: "Denominazione",
      label: "Denominazione",
      required: true,
      className: "input",
      isDisabled: false,
      imgclassName: "icon_hidden",
    },
    {
      id: 11,
      name: "indirizzo",
      type: "text",
      placeholder: "Indirizzo",
      label: "Indirizzo",
      required: true,
      className: "input",
      isDisabled: false,
      imgclassName: "icon_hidden",
    },

    {
      id: 12,
      name: "citta",
      type: "text",
      placeholder: "Città",
      label: "Città",
      required: true,
      className: "input",
      isDisabled: false,
      imgclassName: "icon_hidden",
    },
  ];

  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleOptionChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const click = () => {
    console.log("Click =>", selectedOption);
  };

  const Giurisica = (
    <div className="denominazione">
      {inputs
        .map((input) => (
          <div key={input.id} className="input-field">
            <label htmlFor={input.id} className="input-label">
              {input.label} <span className="req">*</span>
            </label>
            <Input {...input} value={values[input.name]} onChange={onChange} />
          </div>
        ))
        .slice(9, 10)}
    </div>
  );
  const Fisica = (
    <div className="nome-cognome">
      {inputs
        .map((input) => (
          <div key={input.id} className="input-field">
            <label htmlFor={input.id} className="input-label">
              {input.label} <span className="req">*</span>
            </label>
            <Input {...input} value={values[input.value]} onChange={onChange} />
          </div>
        ))
        .slice(7, 9)}
    </div>
  );
  return (
    <>
      <form>
        <div className="form">
          <div className="left-form">
            {inputs
              .map((input) => (
                <div key={input.id} className="input-field">
                  <label htmlFor={input.id} className="input-label">
                    {input.label} <span className="req">*</span>
                  </label>
                  <Input {...input} onChange={onChange} />
                </div>
              ))
              .slice(0, 2)}
            {inputs
              .map((input) => (
                <div key={input.id} className="input-field">
                  <label htmlFor={input.id} className="input-label">
                    {input.label} <span className="req">*</span>
                  </label>
                  <textarea
                    {...input}
                    onChange={onChange}
                    rows={5}
                    cols={5}
                  ></textarea>
                </div>
              ))
              .slice(2, 3)}
            <div className="euro-causale">
              {inputs
                .map((input) => (
                  <div key={input.id} className="input-field">
                    <label htmlFor={input.id} className="input-label">
                      {input.label} <span className="req">*</span>
                    </label>
                    <Input
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  </div>
                ))
                .slice(3, 5)}
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="right-form">
            <div className="label-fisica-giurisica">
              <label className="input-label">
                Persona <span className="req">*</span>
              </label>
              <div className="fisica-giurisica">
                {inputs
                  .map((input) => (
                    <div key={input.id} className={input.name}>
                      <div className="switch">
                        <Input
                          onChange={handleOptionChange}
                          {...input}
                          onClick={click()}
                          id={input.id}
                        />
                      </div>
                      <label htmlFor={input.id}>{input.label}</label>
                    </div>
                  ))
                  .slice(5, 7)}
              </div>
            </div>
            {selectedOption === "F"
              ? Fisica
              : selectedOption === "G"
              ? Giurisica
              : Fisica}
            <div className="indirizzo-citta">
              {inputs
                .map((input) => (
                  <div key={input.id} className="input-field">
                    <label htmlFor={input.id} className="input-label">
                      {input.label} <span className="req">*</span>
                    </label>
                    <Input
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  </div>
                ))
                .slice(10, 12)}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Bulletin;
