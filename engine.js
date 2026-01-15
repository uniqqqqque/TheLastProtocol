// dynamic game variables
let archivedFiles = 0;
let storageUsed = 0;
let fileCredits = 0;
let cpuLoad = 0;
let dataRate = 0;
let fileCreditsLastSecond = 0;
let finding = false;
let downloading = false;

//  static game values, adjust for balance
let fileSize = 1;
let storageMax = 1024;
let internetSpeed = 1;
let findFileTime = 1;
let maxFoundFiles = 2;
let fileSizeUpgradePrice = 10;
let storageMaxUpgradePrice = 10;
let internetSpeedUpgradePrice = 10;
let cpuLoadUpgradePrice = 10;
let findFileTimeUpgradePrice = 10;
let maxFoundFilesUpgradePrice = 10;

/// consts
const findProgressElement = document.getElementById("findProgress");
const fileSizeUpgradeElement = document.getElementById("fileSizeUpgrade");
const fileSizeUpgradePriceElement = document.getElementById(
  "fileSizeUpgradePrice"
);
const storageMaxUpgradeElement = document.getElementById("storageMaxUpgrade");
const storageMaxUpgradePriceElement = document.getElementById(
  "storageMaxUpgradePrice"
);
const internetSpeedUpgradeElement = document.getElementById(
  "internetSpeedUpgrade"
);
const internetSpeedUpgradePriceElement = document.getElementById(
  "internetSpeedUpgradePrice"
);
const cpuLoadUpgradeElement = document.getElementById("cpuLoadUpgrade");
const cpuLoadUpgradePriceElement = document.getElementById(
  "cpuLoadUpgradePrice"
);
const findFileTimeUpgradeElement = document.getElementById(
  "findFileTimeUpgrade"
);
const findFileTimeUpgradePriceElement = document.getElementById(
  "findFileTimeUpgradePrice"
);
const maxFoundFilesUpgradeElement = document.getElementById(
  "maxFoundFilesUpgrade"
);
const maxFoundFilesUpgradePriceElement = document.getElementById(
  "maxFoundFilesUpgradePrice"
);

const foundFilesElement = document.getElementById("foundFiles");
const fileSizeElement = document.getElementById("fileSize");
const archivedFilesElement = document.getElementById("archivedFiles");
const storageUsedElement = document.getElementById("storageUsed");
const storageMaxElement = document.getElementById("storageMax");
const internetSpeedElement = document.getElementById("internetSpeed");
const cpuLoadElement = document.getElementById("cpuLoad");
const dataRateElement = document.getElementById("dataRate");
const fileCreditsElement = document.getElementById("fileCredits");
const findFileTimeElement = document.getElementById("findFileTime");
const maxFoundFilesElement = document.getElementById("maxFoundFiles");

function updateDisplay() {
  /// stats
  archivedFilesElement.innerText = archivedFiles;
  fileCreditsElement.innerText = fileCredits.toFixed(2);
  dataRateElement.innerText = dataRate.toFixed(2);
  /// variables
  fileSizeElement.innerText = fileSize.toFixed(2);
  storageUsedElement.innerText = storageUsed.toFixed(2);
  storageMaxElement.innerText = storageMax;
  internetSpeedElement.innerText = internetSpeed.toFixed(2);
  cpuLoadElement.innerText = cpuLoad;
  findFileTimeElement.innerText = findFileTime.toFixed(2);
  maxFoundFilesElement.innerText = maxFoundFiles;
  /// upgrade prices
  fileSizeUpgradePriceElement.innerText = fileSizeUpgradePrice;
  storageMaxUpgradePriceElement.innerText = storageMaxUpgradePrice;
  internetSpeedUpgradePriceElement.innerText = internetSpeedUpgradePrice;
  cpuLoadUpgradePriceElement.innerText = cpuLoadUpgradePrice;
  findFileTimeUpgradePriceElement.innerText = findFileTimeUpgradePrice;
  maxFoundFilesUpgradePriceElement.innerText = maxFoundFilesUpgradePrice;
}
/// dataRate calc
setInterval(() => {
  dataRate = fileCreditsLastSecond;
  fileCreditsLastSecond = 0;
  updateDisplay();
}, 1000);

/// findFile
findProgressElement.onmouseover = () => {
  if (finding) return;
  if (foundFilesElement.childElementCount >= maxFoundFiles) {
    return;
  }
  finding = true;

  findProgressElement.style.pointerEvents = "none";
  findProgressElement.value = 0;

  const findStartTime = Date.now();
  const findDuration = findFileTime * 1000;

  const findInterval = setInterval(() => {
    const elapsed = Date.now() - findStartTime;
    const percent = Math.min((elapsed / findDuration) * 100, 100);
    findProgressElement.value = percent;
  }, 10);

  setTimeout(() => {
    clearInterval(findInterval);
    const downloadBar = document.createElement("progress");
    downloadBar.value = 0;
    downloadBar.max = 100;
    downloadBar.className = "w-full mt-6 h-12 cursor-pointer";
    foundFilesElement.appendChild(downloadBar);

    finding = false;
    findProgressElement.style.pointerEvents = "auto";

    findProgressElement.value = 0;

    downloadBar.onmouseover = () => {
      if (downloading) return;
      downloading = true;
      downloadBar.style.pointerEvents = "none";

      const downloadTime = (fileSize / internetSpeed) * 1000;
      const downloadStartTime = Date.now();

      const downloadInterval = setInterval(() => {
        const elapsed = Date.now() - downloadStartTime;
        const percent = Math.min((elapsed / downloadTime) * 100, 100);
        downloadBar.value = percent;
      }, 10);

      setTimeout(() => {
        clearInterval(downloadInterval);

        archivedFiles++;
        fileCreditsLastSecond += fileSize;
        fileCredits += fileSize;
        storageUsed += fileSize;
        downloading = false;
        downloadBar.remove();

        updateDisplay();
      }, downloadTime);
    };
  }, findDuration);
};

/// fileSize upgrade
fileSizeUpgradeElement.onclick = () => {
  if (fileCredits >= fileSizeUpgradePrice) {
    fileCredits -= fileSizeUpgradePrice;
    fileSize = fileSize * 2;
    fileSizeUpgradePrice = Math.floor(fileSizeUpgradePrice * 1.1);
    updateDisplay();
  }
};

/// storageMax upgrade
storageMaxUpgradeElement.onclick = () => {
  if (fileCredits >= storageMaxUpgradePrice) {
    fileCredits -= storageMaxUpgradePrice;
    storageMax = storageMax * 2;
    storageMaxUpgradePrice = Math.floor(storageMaxUpgradePrice * 1.1);
    updateDisplay();
  }
};

/// internetSpeed upgrade
internetSpeedUpgradeElement.onclick = () => {
  if (fileCredits >= internetSpeedUpgradePrice) {
    fileCredits -= internetSpeedUpgradePrice;
    internetSpeed = internetSpeed * 2;
    internetSpeedUpgradePrice = Math.floor(internetSpeedUpgradePrice * 1.1);
    updateDisplay();
  }
};

/// cpuLoad upgrade
cpuLoadUpgradeElement.onclick = () => {
  if (fileCredits >= cpuLoadUpgradePrice) {
    fileCredits -= cpuLoadUpgradePrice;
    cpuLoad = cpuLoad * 2; ///change
    cpuLoadUpgradePrice = Math.floor(cpuLoadUpgradePrice * 1.1); ///change
    updateDisplay();
  }
};

/// findFileTime upgrade
findFileTimeUpgradeElement.onclick = () => {
  if (fileCredits >= findFileTimeUpgradePrice) {
    fileCredits -= findFileTimeUpgradePrice;
    findFileTime = findFileTime * 0.9;
    findFileTimeUpgradePrice = Math.floor(findFileTimeUpgradePrice * 1.1);
    updateDisplay();
  }
};

/// maxFoundFiles upgrade
maxFoundFilesUpgradeElement.onclick = () => {
  if (fileCredits >= maxFoundFilesUpgradePrice) {
    fileCredits -= maxFoundFilesUpgradePrice;
    maxFoundFiles = maxFoundFiles + 1;
    maxFoundFilesUpgradePrice = Math.floor(maxFoundFilesUpgradePrice * 1.1);
    updateDisplay();
  }
};
updateDisplay();
