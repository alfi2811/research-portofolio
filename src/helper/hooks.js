import { useState, useEffect } from "react";

export const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => setValue(e.target.value);
  
    useEffect(() => {
      if (
        initialValue !== null &&
        initialValue !== "" &&
        initialValue !== undefined
      )
        setValue(initialValue);
    }, [initialValue]);
  
    return { value, onChange: handleChange };
};  