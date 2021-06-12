import React, { useState } from "react";
import Fields from "./Fields";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

function Form() {
  const [inputFields, setInputFields] = useState([
    {
      fromUnits: "",
      toUnits: "",
      unitAmount: "",
    },
  ]);

  const [totAmount, setTotAmount] = useState("0.00");
  const [totUnits, setTotUnits] = useState("");

  const handleChangeInput = (e, idx) => {
    let val = e.target.value;
    const values = [...inputFields];
    values[idx][e.target.name] = val;
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalAmt = 0.0;
    let i = 0;
    for (i; i < inputFields.length; i++) {
      let from = parseInt(inputFields[i].fromUnits);
      let to = parseInt(inputFields[i].toUnits);
      let unitAmt = parseFloat(inputFields[i].unitAmount);
      if (!validateInputFields(from, to, totUnits)) {
        return;
      }
      if (totUnits >= from && totUnits < to) {
        totalAmt += (totUnits - from) * unitAmt;
      } else {
        totalAmt += (to - from) * unitAmt;
      }
    }
    setTotAmount((Math.round(totalAmt * 100) / 100).toFixed(2));
  };

  const validateInputFields = (from, to, totUnits) => {
    if (from === "") {
      alert("Enter From Units");
      return false;
    }

    if (to === "") {
      alert("Enter To Units");
      return false;
    }

    if (totUnits === "") {
      alert("Enter Total Units");
      return false;
    }

    if (from > to) {
      alert("To Units cannot be less than From Units");
      return false;
    }

    if (from < 0 || to < 0 || totUnits < 0) {
      alert("From Units, To Units and Total Units cannot be less than zero");
      return false;
    }

    return true;
  };

  const handleAdd = () => {
    setInputFields([
      ...inputFields,
      {
        fromUnits: "",
        toUnits: "",
        unitAmount: "",
      },
    ]);
  };

  const handleRemove = (idx) => {
    const values = [...inputFields];
    values.splice(idx, 1);
    setInputFields(values);
  };

  const handleChangeTotUnits = (e) => {
    setTotUnits(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((inputField, index) => (
        <Fields
          index={index}
          inputField={inputField}
          handleChangeInput={handleChangeInput}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
      ))}

      <TextField
        placeholder='0'
        type='number'
        name='totUnits'
        variant='outlined'
        label='Total Units'
        onChange={(event) => {
          handleChangeTotUnits(event);
        }}
        value={totUnits}
      />
      <TextField
        name='unitAmount'
        variant='outlined'
        label='Total Amount'
        disabled
        value={totAmount}
      />

      <Button
        variant='contained'
        type='submit'
        endIcon={<Icon>send</Icon>}
        onClick={handleSubmit}
      >
        Calculate
      </Button>
    </form>
  );
}

export default Form;
