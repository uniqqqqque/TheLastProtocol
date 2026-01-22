// Basic upgrades (globals, no build step)

fileSizeUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    alert("Not enough cpu power!");
    return;
  }
  if (fileCredits >= fileSizeUpgradePrice) {
    fileCredits -= fileSizeUpgradePrice;
    fileSize = fileSize + fileSizeUpgradeValueIncrease * prestigeMultiplier;
    fileSizeUpgradePrice = Math.ceil(
      fileSizeUpgradePrice * fileSizeUpgradePriceIncrease,
    );
    cpuLoad++;
    if (typeof updateDisplay === "function") updateDisplay();
  }
};

storageMaxUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    alert("Not enough cpu power!");
    return;
  }
  if (fileCredits >= storageMaxUpgradePrice) {
    fileCredits -= storageMaxUpgradePrice;
    storageMax =
      storageMax + storageMaxUpgradeValueIncrease * prestigeMultiplier;
    storageMaxUpgradePrice = Math.ceil(
      storageMaxUpgradePrice * storageMaxUpgradePriceIncrease,
    );
    cpuLoad++;
    if (typeof updateDisplay === "function") updateDisplay();
  }
};

internetSpeedUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    alert("Not enough cpu power!");
    return;
  }
  if (fileCredits >= internetSpeedUpgradePrice) {
    fileCredits -= internetSpeedUpgradePrice;
    internetSpeed =
      internetSpeed + internetSpeedUpgradeValueIncrease * prestigeMultiplier;
    internetSpeedUpgradePrice = Math.ceil(
      internetSpeedUpgradePrice * internetSpeedUpgradePriceIncrease,
    );
    cpuLoad++;
    if (typeof updateDisplay === "function") updateDisplay();
  }
};

cpuLoadUpgradeElement.onclick = () => {
  if (cpuLoad <= 10) {
    return;
  }
  if (fileCredits >= cpuLoadUpgradePrice) {
    fileCredits -= cpuLoadUpgradePrice;
    cpuLoad = cpuLoad - cpuLoadUpgradeValueIncrease * prestigeMultiplier;
    cpuLoadUpgradePrice = Math.ceil(
      cpuLoadUpgradePrice * cpuLoadUpgradePriceIncrease,
    );
    cpuLoad++;
    if (typeof updateDisplay === "function") updateDisplay();
  }
};

findFileTimeUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    alert("Not enough cpu power!");
    return;
  }
  if (fileCredits >= findFileTimeUpgradePrice) {
    fileCredits -= findFileTimeUpgradePrice;
    findFileTime = Math.max(
      0.01,
      findFileTime - findFileTimeUpgradeValueIncrease * prestigeMultiplier,
    );
    findFileTimeUpgradePrice = Math.ceil(
      findFileTimeUpgradePrice * findFileTimeUpgradePriceIncrease,
    );
    cpuLoad++;
    if (typeof updateDisplay === "function") updateDisplay();
  }
};

maxFoundFilesUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    return;
  }
  if (fileCredits >= maxFoundFilesUpgradePrice) {
    fileCredits -= maxFoundFilesUpgradePrice;
    maxFoundFiles =
      maxFoundFiles + maxFoundFilesUpgradeValueIncrease * prestigeMultiplier;
    maxFoundFilesUpgradePrice = Math.ceil(
      maxFoundFilesUpgradePrice * maxFoundFilesUpgradePriceIncrease,
    );
    cpuLoad++;
    if (typeof updateDisplay === "function") updateDisplay();
  }
};
