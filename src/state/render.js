// UI rendering (globals, no build step)

function updateDisplay() {
  // prestige multiplier first (used by labels)
  prestigeMultiplier = Math.pow(2, prestigeLevel);

  /// stats
  archivedFilesElement.innerText = archivedFiles;
  if (lifetimeArchivedFilesElement) {
    lifetimeArchivedFilesElement.innerText = lifetimeArchivedFiles;
  }
  fileCreditsElement.innerText = fileCredits.toFixed(2);
  dataRateElement.innerText = dataRate.toFixed(2);

  /// variables
  fileSizeElement.innerText = fileSize.toFixed(2);
  storageUsedElement.innerText = storageUsed.toFixed(2);
  storageMaxElement.innerText = storageMax;
  internetSpeedElement.innerText = internetSpeed.toFixed(2);
  cpuLoadElement.innerText = cpuLoad.toFixed(2);
  findFileTimeElement.innerText = findFileTime.toFixed(2);
  maxFoundFilesElement.innerText = maxFoundFiles;

  /// upgrade prices
  fileSizeUpgradePriceElement.innerText = fileSizeUpgradePrice;
  storageMaxUpgradePriceElement.innerText = storageMaxUpgradePrice;
  internetSpeedUpgradePriceElement.innerText = internetSpeedUpgradePrice;
  cpuLoadUpgradePriceElement.innerText = cpuLoadUpgradePrice;
  findFileTimeUpgradePriceElement.innerText = findFileTimeUpgradePrice;
  maxFoundFilesUpgradePriceElement.innerText = maxFoundFilesUpgradePrice;

  // unique
  nowFoundFiles.innerText = foundFilesElement.childElementCount;

  // storageUsedProgressBar
  storageUsedProgressBar.max = storageMax;
  storageUsedProgressBar.value = storageUsed;
  const storageUsedProgressLabelPercent =
    storageMax === 0 ? 0 : (storageUsed / storageMax) * 100;
  storageUsedProgressLabel.innerText = `${storageUsedProgressLabelPercent.toFixed(
    1,
  )} %`;
  storageUsedProgressLabel.className =
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white";

  // cpuLoadProgressBar
  cpuLoadProgressBar.max = 100;
  cpuLoadProgressBar.value = cpuLoad;

  // advanced upgrades
  if (typeof checkAdvancedUpgrades === "function") {
    checkAdvancedUpgrades();
  }
  if (typeof updateArchivedFilesToNextUnlock === "function") {
    updateArchivedFilesToNextUnlock();
  }

  // upgrade green colors
  fileSizeUpgradeElement.className =
    "border p-2 " +
    (fileCredits >= fileSizeUpgradePrice ? "bg-green-200" : "bg-slate-200");

  storageMaxUpgradeElement.className =
    "border p-2 " +
    (fileCredits >= storageMaxUpgradePrice ? "bg-green-200" : "bg-slate-200");

  internetSpeedUpgradeElement.className =
    "border p-2 " +
    (fileCredits >= internetSpeedUpgradePrice
      ? "bg-green-200"
      : "bg-slate-200");

  cpuLoadUpgradeElement.className =
    "border p-2 " +
    (fileCredits >= cpuLoadUpgradePrice ? "bg-green-200" : "bg-slate-200");

  findFileTimeUpgradeElement.className =
    "border p-2 " +
    (fileCredits >= findFileTimeUpgradePrice ? "bg-green-200" : "bg-slate-200");

  maxFoundFilesUpgradeElement.className =
    "border p-2 " +
    (fileCredits >= maxFoundFilesUpgradePrice
      ? "bg-green-200"
      : "bg-slate-200");

  // updates with prestige
  const effFileSizeInc = fileSizeUpgradeValueIncrease * prestigeMultiplier;
  const effStorageMaxInc = storageMaxUpgradeValueIncrease * prestigeMultiplier;
  const effInternetSpeedInc =
    internetSpeedUpgradeValueIncrease * prestigeMultiplier;
  const effCpuLoadDec = cpuLoadUpgradeValueIncrease * prestigeMultiplier;
  const effFindFileTimeDec =
    findFileTimeUpgradeValueIncrease * prestigeMultiplier;
  const effMaxFoundFilesInc =
    maxFoundFilesUpgradeValueIncrease * prestigeMultiplier;

  // show how much update affects
  fileSizeUpgradeValueIncreaseElement.innerText = `+${effFileSizeInc.toFixed(
    1,
  )} to File size`;

  storageMaxUpgradeValueIncreaseElement.innerText = `+${effStorageMaxInc.toFixed(
    0,
  )} to Max storage`;

  internetSpeedUpgradeValueIncreaseElement.innerText = `+${effInternetSpeedInc.toFixed(
    1,
  )} to Internet speed`;

  cpuLoadUpgradeValueIncreaseElement.innerText = `-${effCpuLoadDec.toFixed(
    0,
  )} % to Processor load`;

  findFileTimeUpgradeValueIncreaseElement.innerText = `-${effFindFileTimeDec.toFixed(
    2,
  )} to Time to find file`;

  maxFoundFilesUpgradeValueIncreaseElement.innerText = `+${effMaxFoundFilesInc.toFixed(
    0,
  )} to Max files can found`;

  // passive
  passiveIncomeElement.innerText = passiveIncome.toFixed(2);

  // prestige button
  if (prestigeButton) {
    const canPrestige = archivedFiles >= 100;
    prestigeButton.disabled = !canPrestige;
    prestigeButton.className =
      "border p-2 " + (canPrestige ? "bg-purple-200" : "bg-slate-200");

    if (prestigeButtonLabel) {
      const nextMultiplier = prestigeMultiplier * 2;
      prestigeButtonLabel.innerText = `Prestige (x${prestigeMultiplier} → x${nextMultiplier})`;
    }
  }
}
