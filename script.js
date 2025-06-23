async function App() {
  const output = document.getElementById("output")
      const resp = await fetch('https://api.sampleapis.com/futurama/info');
      const json = await resp.json();
    output.textContent= JSON.stringify(json, null, 2)
  
}

window.onload = App();