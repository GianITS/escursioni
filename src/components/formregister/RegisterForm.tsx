import React, { FormEvent, useState } from 'react';
import { AccountForm } from './AccountForm';
import { AddressForm } from './AddressForm';
import { useMultistepForm } from './useMultistepForm';
import { UserForm } from './UserForm';

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  via: string;
  citta: string;
  provincia: string;
  CAP: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  via: "",
  citta: "",
  provincia: "",
  CAP: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const [data,setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const {
    steps, currentStepIndex, step, isFirstStep, isLastStep, back, next, goTo
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields}/>,
    <AddressForm {...data} updateFields={updateFields}/>,
    <AccountForm {...data} updateFields={updateFields}/>,
  ])

  function onSubmit(e: FormEvent){
    e.preventDefault();
    if (!isLastStep){
      return next()
    }
    fetch("http://127.0.0.1:5000/createAccount", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.ok){
          alert("Successful Account Creation");
          goTo(0);
          window.location.reload();
        }else {
          alert("Account Creation Failed");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form'>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className='btnContent'>
          {!isFirstStep && <button type='button' className='btn-custom' onClick={back}>Back</button>}
          {!isLastStep?
            <button type='submit'className='btn-custom'>Next</button>:
            <button type='submit'className='btn-custom btn-submit'>Finish</button>}
        </div>
      </form>
    </div>
  );
}

