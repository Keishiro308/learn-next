import { useState, useEffect } from 'react';

function SayHi() {
  const [data, setData] = useState({name: ''});
  useEffect(() => {
    fetch('api/hi')
    .then(response => response.json())
    .then((profile) => {
      setData(profile);
    })
  }, []);
  return (
    <div>
      <h1>Hi {data.name}</h1>
    </div>
  );
}

export default SayHi;