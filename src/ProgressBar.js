import React, { useState, useEffect } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000); // Change interval time as needed (e.g., 1000 ms = 1 second)

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, [progress]);

  return (
    <div>
      <h2>Progress: {progress}%</h2>
      <div style={{ width: '300px', border: '1px solid #ccc',display:'flex',  }}>
        <div
          style={{
            display:"flex",
            width: `${progress}%`,
            height: '30px',
            backgroundColor: 'blue',
            borderRadius:"10px",
            justifyContent:"center",
            alignItems:"center"

          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
