function choca() {
  const dairyFromDB = await Dairy.find();
  document.getElementById("valormyInput").innerHTML = "Tu presupuesto es de: $" + dairyFromDB;
}
choca();