import React, {useEffect, useRef} from 'react';
import { useField } from '@unform/core';

export default function TextInput({name, ...rest}) {
  const inputRef = useRef(null);
  const {registerField, fieldName} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <input ref={inputRef} name={fieldName} {...rest} />
  );
}
