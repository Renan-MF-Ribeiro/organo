import "./Form.css";
import TextField from "@mui/material/TextField";
import Select from "../Select";
import * as React from "react";
import Button from "@mui/material/Button";

const Form = (params) => {
  const [name, setName] = React.useState("");
  const [office, setOffice] = React.useState("");
  const [imgPath, setImgPath] = React.useState("");
  const [squad, setSquad] = React.useState("");

  const save = () => {
    params.sendForm({
      name,
      office,
      imgPath,
      squad,
    });
    setName("");
    setOffice("");
    setImgPath("");
    setSquad("");
  };

  return (
    <section className="sectionForm">
      <form noValidate onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          value={name}
          fullWidth
          id="nome"
          label="Nome"
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          value={office}
          fullWidth
          id="cargo"
          label="Cargo"
          variant="standard"
          onChange={(e) => setOffice(e.target.value)}
        />
        <TextField
          value={imgPath}
          fullWidth
          id="imagem"
          label="Imagem"
          variant="standard"
          onChange={(e) => setImgPath(e.target.value)}
        />
        <Select
          label="Time"
          list={params.times}
          onChangeSelect={(value) => setSquad(value)}
          value={squad}
        />
        <Button onClick={save} className="button" variant="contained">
          {" "}
          Criar Card
        </Button>
      </form>
    </section>
  );
};
export default Form;
