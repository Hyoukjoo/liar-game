import { useCallback, useState } from 'react';

export type Validate = (value: any) => boolean;

const useValidationForm = (validateFunction: Validate) => {
  const [value, setValue] = useState();
  const [validity, setValidity] = useState(true);

  const editValue = useCallback(
    (value: any) => {
      setValue(value);
    },
    [value]
  );

  const validate = useCallback(() => {
    const isValidated = validateFunction(value);

    setValidity(isValidated);

    return isValidated;
  }, [value, validity]);

  return {
    value,
    editValue,
    validate,
    validity,
  };
};

export default useValidationForm;
