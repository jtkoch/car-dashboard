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

export const useToggle = function useToggle(initialValue){
  const [toggle, setToggle] = useState(initialValue);

  function toggleBoolean(){
      setToggle(!toggle)
  }

  return [toggle,toggleBoolean]
}