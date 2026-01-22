// DOM cache (globals, no build step)
// This file must be loaded after index.html elements exist.

// core UI elements
const findProgressElement = document.getElementById("findProgress");
const foundFilesElement = document.getElementById("foundFiles");

// stats
const fileCreditsElement = document.getElementById("fileCredits");
const archivedFilesElement = document.getElementById("archivedFiles");
const lifetimeArchivedFilesElement = document.getElementById(
  "lifetimeArchivedFiles",
);
const passiveIncomeElement = document.getElementById("passiveIncome");
const dataRateElement = document.getElementById("dataRate");

// variables
const fileSizeElement = document.getElementById("fileSize");
const storageUsedElement = document.getElementById("storageUsed");
const storageMaxElement = document.getElementById("storageMax");
const internetSpeedElement = document.getElementById("internetSpeed");
const cpuLoadElement = document.getElementById("cpuLoad");
const findFileTimeElement = document.getElementById("findFileTime");
const maxFoundFilesElement = document.getElementById("maxFoundFiles");
const nowFoundFiles = document.getElementById("nowFoundFiles");

// progress bars
const storageUsedProgressBar = document.getElementById(
  "storageUsedProgressBar",
);
const storageUsedProgressLabel = document.getElementById(
  "storageUsedProgressLabel",
);
const cpuLoadProgressBar = document.getElementById("cpuLoadProgressBar");

// buttons
const clearStorageButton = document.getElementById("clearStorageButton");
const prestigeButton = document.getElementById("prestigeButton");
const prestigeButtonLabel = document.getElementById("prestigeButtonLabel");

// basic upgrades
const fileSizeUpgradeElement = document.getElementById("fileSizeUpgrade");
const storageMaxUpgradeElement = document.getElementById("storageMaxUpgrade");
const internetSpeedUpgradeElement = document.getElementById(
  "internetSpeedUpgrade",
);
const cpuLoadUpgradeElement = document.getElementById("cpuLoadUpgrade");
const findFileTimeUpgradeElement = document.getElementById(
  "findFileTimeUpgrade",
);
const maxFoundFilesUpgradeElement = document.getElementById(
  "maxFoundFilesUpgrade",
);

// basic upgrade prices
const fileSizeUpgradePriceElement = document.getElementById(
  "fileSizeUpgradePrice",
);
const storageMaxUpgradePriceElement = document.getElementById(
  "storageMaxUpgradePrice",
);
const internetSpeedUpgradePriceElement = document.getElementById(
  "internetSpeedUpgradePrice",
);
const cpuLoadUpgradePriceElement = document.getElementById(
  "cpuLoadUpgradePrice",
);
const findFileTimeUpgradePriceElement = document.getElementById(
  "findFileTimeUpgradePrice",
);
const maxFoundFilesUpgradePriceElement = document.getElementById(
  "maxFoundFilesUpgradePrice",
);

// basic upgrade labels
const fileSizeUpgradeValueIncreaseElement = document.getElementById(
  "fileSizeUpgradeValueIncrease",
);
const storageMaxUpgradeValueIncreaseElement = document.getElementById(
  "storageMaxUpgradeValueIncrease",
);
const internetSpeedUpgradeValueIncreaseElement = document.getElementById(
  "internetSpeedUpgradeValueIncrease",
);
const cpuLoadUpgradeValueIncreaseElement = document.getElementById(
  "cpuLoadUpgradeValueIncrease",
);
const findFileTimeUpgradeValueIncreaseElement = document.getElementById(
  "findFileTimeUpgradeValueIncrease",
);
const maxFoundFilesUpgradeValueIncreaseElement = document.getElementById(
  "maxFoundFilesUpgradeValueIncrease",
);

// advanced upgrades
const advancedUpgradesListElement = document.getElementById(
  "advancedUpgradesList",
);
const archivedFilesToNextUnlock = document.getElementById(
  "archivedFilesToNextUnlock",
);
