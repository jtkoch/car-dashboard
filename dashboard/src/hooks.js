import {useState} from 'react';

export const useFormInput = function useFormInput(placeholder, initialValue){
  const [value, setValue] = useState(initialValue);
  function handleChange (e){
    setValue(e.target.value)
  }
  return {
    value, placeholder: placeholder, onChange: handleChange
  }
}