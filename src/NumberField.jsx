import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function NumberField() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // Load the number from cookies when the component mounts
    const savedNumber = Cookies.get('userNumber');
    if (savedNumber) {
      setNumber(Number(savedNumber));
    }
  }, []);

  const handleNumberChange = (e) => {
    const newValue = e.target.value;
    setNumber(newValue);

    // Save the number to cookies whenever it changes
    Cookies.set('userNumber', newValue, { expires: 365 }); // Expires in 1 year
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleNumberChange}
      />
      <p>Entered Number: {number}</p>
    </div>
  );
}

export default NumberField;
