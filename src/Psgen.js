import React, { useState } from 'react';

function Psgen() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+{}[]';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          min={1}
        />
      </div>
      <div>
        <label>Include Uppercase:</label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
      </div>
      <div>
        <label>Include Lowercase:</label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
      </div>
      <div>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>
      <div>
        <label>Include Symbols:</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <label>Password:</label>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
}

export default Psgen;
