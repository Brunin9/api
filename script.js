import {useEffect, useState} from 'react';

export default function App() {
    const output = document.getElementById("otp")
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/futurama/info');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    output.textContent= JSON.stringify(json, null, 2)
  )
}

window.onload = App();