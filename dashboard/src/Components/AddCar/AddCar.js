import React from 'react';
import './AddCar.scss';
import {useFormInput} from '../../hooks';

function AddCar() {
    const make = useFormInput("Make", "")
    const model = useFormInput("Model", "")
    console.log(make.value);
    console.log(model.value);
  return (
    <div>
      <form>
        <input {...make} />
        <input {...model} />
      </form>
    </div>
  )
}

export default AddCar;