// Prestige + reset/format handlers (globals, no build step)

function resetRunForPrestige() {
  archivedFiles = 0;
  storageUsed = 0;
  fileCredits = 0;
  dataRate = 0;
  fileCreditsLastSecond = 0;
  activeDownloads = 0;
  passiveIncome = 0;
  finding = false;

  activeDownloadsList = [];
  if (foundFilesElement) foundFilesElement.innerHTML = "";

  // reset core stats
  fileSize = 1;
  storageMax = 1024;
  internetSpeed = 1;
  findFileTime = 1;
  maxFoundFiles = 1;

  // reset prices
  fileSizeUpgradePrice = 5;
  storageMaxUpgradePrice = 100;
  internetSpeedUpgradePrice = 5;
  cpuLoadUpgradePrice = 10;
  findFileTimeUpgradePrice = 20;
  maxFoundFilesUpgradePrice = 20;
  cpuLoad = 0;

  if (typeof updateDisplay === "function") updateDisplay();
}

if (prestigeButton) {
  prestigeButton.onclick = () => {
    if (archivedFiles < 100) return;

    if (
      confirm(
        "Prestige? This resets your run, but permanently doubles upgrade effectiveness",
      )
    ) {
      prestigeLevel += 1;
      prestigeMultiplier = Math.pow(2, prestigeLevel);
      resetRunForPrestige();
    }
  };
}

// clear storage
if (clearStorageButton) {
  clearStorageButton.onclick = () => {
    if (storageUsed === 0) return;
    if (
      confirm(
        "Format drive? This will free up all storage space, but divides File credits and Total archived files by 2",
      )
    ) {
      storageUsed = 0;
      fileCredits = +(fileCredits / 2).toFixed(2);
      // keep archivedFiles integer-ish
      archivedFiles = Math.floor(archivedFiles / 2);
      if (typeof updateDisplay === "function") updateDisplay();
    }
  };
}
