import React, { useState } from 'react';

function TextUtils() {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const getWordCount = () => {
    return text.trim().split(/\s+/).length;
  };

  const getCharacterCount = () => {
    return text.length;
  };

  const removeExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' '));
  };

  return (
    <div>
      <h1>Text Utils</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
        rows={5}
        cols={50}
      />
      <div>
        <button onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div>
        <p>Word Count: {getWordCount()}</p>
        <p>Character Count: {getCharacterCount()}</p>
      </div>
    </div>
  );
}

export default TextUtils;
