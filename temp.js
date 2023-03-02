const TempConverter = () => {
  const tempinput = document.getElementById('ipdegree').value;

  const tempchoosen = document.getElementById('choosentype');
  const indexvalue = choosentype.options[tempchoosen.selectedIndex].value;

  // Celsius to Fahrenheit
  const CeltoFah = (C) => {
      let fahrenheit = ((C * 9 / 5) + 32).toFixed(2); 
    //   we can do Math.roud also
      return fahrenheit;
  }

  // Fahrenheit to Celsius
  const FahtoCel = (F) => {
      let celsius =((F- 32) * 5 / 9).toFixed(2);
      return celsius;
  }

  if (indexvalue == 'C') {
      document.getElementById("covtresult").innerHTML = CeltoFah(tempinput) + "&deg; F";
  }
  else {
      document.getElementById("covtresult").innerHTML = FahtoCel(tempinput) + "&deg; C";
  }
}