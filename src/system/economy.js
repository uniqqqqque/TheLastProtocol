// Economy tick (globals, no build step)

setInterval(() => {
  fileCredits += passiveIncome;
  dataRate = fileCreditsLastSecond + passiveIncome;
  fileCreditsLastSecond = 0;
  if (typeof updateDisplay === "function") updateDisplay();
}, 1000);
