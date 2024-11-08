const petro = document.getElementById('Petro')
const ny = document.getElementById('NY')
const tokyo = document.getElementById('Tokyo')

async function Api() {
   const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m');
   const respons_tokyo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m');
   const respons_ny = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m');
   const data_petro = await respons_petro.json();
   const data_ny = await respons_ny.json();
   const data_tokyo = await respons_tokyo.json();
   return [data_petro, data_tokyo, data_ny];
}

async function output() {
   try {
       let out = await Api()
       console.log(out)
       petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
       ny.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C` 
       tokyo.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
   }
   catch(error) {
       console.log(error)
   }
   finally {
       setTimeout(output, 10000)
   }
}

output()