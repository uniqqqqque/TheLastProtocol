// Entry point (globals, no build step)

// --- dynamic game values
let archivedFiles = 0;
let storageUsed = 0;
let fileCredits = 0;
let cpuLoad = 0;
let dataRate = 0;
let fileCreditsLastSecond = 0;
let activeDownloads = 0;
let passiveIncome = 0;
let finding = false;
let prestigeLevel = 0;
let prestigeMultiplier = 1;
let lifetimeArchivedFiles = 0;

// --- static game values, adjust for balance
let fileSize = 1;
let storageMax = 1024;
let internetSpeed = 1;
let findFileTime = 1;
let maxFoundFiles = 1;

// --- default prices
let fileSizeUpgradePrice = 5;
let storageMaxUpgradePrice = 100;
let internetSpeedUpgradePrice = 5;
let cpuLoadUpgradePrice = 10;
let findFileTimeUpgradePrice = 20;
let maxFoundFilesUpgradePrice = 20;

// --- price increases
let fileSizeUpgradePriceIncrease = 1.1;
let storageMaxUpgradePriceIncrease = 1.1;
let internetSpeedUpgradePriceIncrease = 1.1;
let cpuLoadUpgradePriceIncrease = 1.1;
let findFileTimeUpgradePriceIncrease = 1.1;
let maxFoundFilesUpgradePriceIncrease = 1.1;

// --- value increases
let fileSizeUpgradeValueIncrease = 0.5; // plus
let storageMaxUpgradeValueIncrease = 1024; // plus
let internetSpeedUpgradeValueIncrease = 1; // plus
let cpuLoadUpgradeValueIncrease = 10; // minus
let findFileTimeUpgradeValueIncrease = 0.01; // minus in sec
let maxFoundFilesUpgradeValueIncrease = 1; // plus

// --- file rarity
let chanceRare = 0.15; // 15%
let chanceEpic = 0.05;
let chanceLegendary = 0.01;

// --- file multipliers
let multRare = 5; // 5x fileSize
let multEpic = 10;
let multLegendary = 100;

// --- runtime lists
let activeDownloadsList = [];

// init UI
if (typeof updateDisplay === "function") {
  updateDisplay();
}
if (typeof checkAdvancedUpgrades === "function") {
  checkAdvancedUpgrades();
}
if (typeof updateArchivedFilesToNextUnlock === "function") {
  updateArchivedFilesToNextUnlock();
}
