// dynamic game values
let archivedFiles = 0;
let storageUsed = 0;
let fileCredits = 0;
let cpuLoad = 0;
let dataRate = 0;
let fileCreditsLastSecond = 0;
let activeDownloads = 0;
let finding = false;

//  static game values, adjust for balance
// start
let fileSize = 1;
let storageMax = 1024;
let internetSpeed = 1;
let findFileTime = 1;
let maxFoundFiles = 1;

// default prices
let fileSizeUpgradePrice = 10;
let storageMaxUpgradePrice = 10;
let internetSpeedUpgradePrice = 10;
let cpuLoadUpgradePrice = 10;
let findFileTimeUpgradePrice = 10;
let maxFoundFilesUpgradePrice = 10;

// price increases
let fileSizeUpgradePriceIncrease = 1.1;
let storageMaxUpgradePriceIncrease = 1.1;
let internetSpeedUpgradePriceIncrease = 1.1;
let cpuLoadUpgradePriceIncrease = 1.1;
let findFileTimeUpgradePriceIncrease = 1.1;
let maxFoundFilesUpgradePriceIncrease = 1.1;

// value increases
let fileSizeUpgradeValueIncrease = 2;
let storageMaxUpgradeValueIncrease = 2;
let internetSpeedUpgradeValueIncrease = 2;
let cpuLoadUpgradeValueIncrease = 0.9; //decrease
let findFileTimeUpgradeValueIncrease = 0.9; //decrease
let maxFoundFilesUpgradeValueIncrease = 1; //plus

// consts for dom cache
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
const storageUsedProgressBar = document.getElementById(
  "storageUsedProgressBar"
);
const storageUsedProgressLabel = document.getElementById(
  "storageUsedProgressLabel"
);
const internetSpeedElement = document.getElementById("internetSpeed");
const cpuLoadElement = document.getElementById("cpuLoad");
const dataRateElement = document.getElementById("dataRate");
const fileCreditsElement = document.getElementById("fileCredits");
const findFileTimeElement = document.getElementById("findFileTime");
const maxFoundFilesElement = document.getElementById("maxFoundFiles");
const nowFoundFiles = document.getElementById("nowFoundFiles");

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
  // unique
  nowFoundFiles.innerText = foundFilesElement.childElementCount;
  // storageUsedProgressBar
  storageUsedProgressBar.max = storageMax;
  storageUsedProgressBar.value = storageUsed;
  const storageUsedProgressLabelPercent =
    storageMax === 0 ? 0 : (storageUsed / storageMax) * 100;
  storageUsedProgressLabel.innerText = `${storageUsedProgressLabelPercent.toFixed(
    1
  )} %`;
  storageUsedProgressLabel.className =
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white";
  // cpuLoadProgressBar
  cpuLoadProgressBar.max = 100;
  cpuLoadProgressBar.value = cpuLoad;
}
/// dataRate calc
setInterval(() => {
  dataRate = fileCreditsLastSecond;
  fileCreditsLastSecond = 0;
  updateDisplay();
}, 1000);

/// array for downloads
let activeDownloadsList = [];

// for smooth finding with mouse
let isMouseOverFind = false;
findProgressElement.addEventListener(
  "mouseenter",
  () => (isMouseOverFind = true)
);
findProgressElement.addEventListener(
  "mouseleave",
  () => (isMouseOverFind = false)
);

/// findFile, first bar
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

  // download progress bar
  setTimeout(() => {
    clearInterval(findInterval);
    const randomFactor = 1 + (Math.random() * 1.0 - 0.5); // +-10%
    const thisFileSize = fileSize * randomFactor;
    const downloadBar = document.createElement("progress");
    downloadBar.value = 0;
    downloadBar.max = 100;
    downloadBar.className = "w-full h-12 cursor-pointer";

    // file size label
    const fileSizeLabel = document.createElement("span");
    fileSizeLabel.innerHTML = `${thisFileSize.toFixed(2)} b`;
    fileSizeLabel.className =
      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white";
    const downloadContainer = document.createElement("div");
    downloadContainer.className = "relative flex mt-6 h-6 items-center w-full";
    downloadContainer.appendChild(downloadBar);
    downloadContainer.appendChild(fileSizeLabel);
    foundFilesElement.appendChild(downloadContainer);
    updateDisplay();
    finding = false;
    findProgressElement.style.pointerEvents = "auto";
    findProgressElement.value = 0;

    if (isMouseOverFind) {
      findProgressElement.onmouseover();
    }

    // second bar
    downloadBar.onmouseover = () => {
      if (storageUsed + thisFileSize > storageMax) {
        alert("Not enough free space!");
        return;
      }
      downloadBar.style.pointerEvents = "none";

      const download = {
        bar: downloadBar,
        fileSize: thisFileSize,
        downloaded: 0,
        startTime: Date.now(),
        lastUpdate: Date.now(),
        interval: null,
        finished: false,
      };

      activeDownloadsList.push(download);
      recalcDownloads();
      updateDisplay();

      function updateDownload() {
        if (download.finished) return;
        const now = Date.now();
        const delta = (now - download.lastUpdate) / 1000; //in sec
        download.lastUpdate = now;
        //speed
        const speed = internetSpeed / activeDownloadsList.length;
        download.downloaded += speed * delta;
        let percent = Math.min(
          (download.downloaded / download.fileSize) * 100,
          100
        );
        download.bar.value = percent;
        if (download.downloaded >= download.fileSize) {
          finishDownload(download);
        }
      }

      download.interval = setInterval(updateDownload, 10);

      // finish download
      function finishDownload(download) {
        if (download.finished) return;
        clearInterval(download.interval);
        download.finished = true;
        archivedFiles++;
        fileCreditsLastSecond += download.fileSize;
        fileCredits += download.fileSize;
        storageUsed += download.fileSize;
        downloadContainer.remove();
        activeDownloadsList = activeDownloadsList.filter((d) => d !== download);
        recalcDownloads();
        updateDisplay();

        if (isMouseOverFind) {
          findProgressElement.onmouseover();
        }
      }

      // recalc  downloads
      function recalcDownloads() {
        activeDownloads = activeDownloadsList.length;
        const now = Date.now();
        activeDownloadsList.forEach((d) => (d.lastUpdate = now));
      }
    };
  }, findFileTime * 1000);
};

/// fileSize upgrade ----------------------------------------------------------
fileSizeUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    alert("Not enough cpu power!");
    return;
  }
  if (fileCredits >= fileSizeUpgradePrice) {
    fileCredits -= fileSizeUpgradePrice;
    fileSize = fileSize * fileSizeUpgradeValueIncrease;
    fileSizeUpgradePrice = Math.floor(
      fileSizeUpgradePrice * fileSizeUpgradePriceIncrease
    );
    cpuLoad++;
    updateDisplay();
  }
};

/// storageMax upgrade
storageMaxUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    alert("Not enough cpu power!");
    return;
  }
  if (fileCredits >= storageMaxUpgradePrice) {
    fileCredits -= storageMaxUpgradePrice;
    storageMax = storageMax * storageMaxUpgradeValueIncrease;
    storageMaxUpgradePrice = Math.floor(
      storageMaxUpgradePrice * storageMaxUpgradePriceIncrease
    );
    cpuLoad++;
    updateDisplay();
  }
};

/// internetSpeed upgrade
internetSpeedUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    alert("Not enough cpu power!");
    return;
  }
  if (fileCredits >= internetSpeedUpgradePrice) {
    fileCredits -= internetSpeedUpgradePrice;
    internetSpeed = internetSpeed * internetSpeedUpgradeValueIncrease;
    internetSpeedUpgradePrice = Math.floor(
      internetSpeedUpgradePrice * internetSpeedUpgradePriceIncrease
    );
    cpuLoad++;
    updateDisplay();
  }
};

/// cpuLoad upgrade
cpuLoadUpgradeElement.onclick = () => {
  if (fileCredits >= cpuLoadUpgradePrice) {
    fileCredits -= cpuLoadUpgradePrice;
    cpuLoad = cpuLoad * cpuLoadUpgradeValueIncrease; ///change
    cpuLoadUpgradePrice = Math.floor(
      cpuLoadUpgradePrice * cpuLoadUpgradePriceIncrease
    );
    cpuLoad++;
    updateDisplay();
  }
};

/// findFileTime upgrade
findFileTimeUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    alert("Not enough cpu power!");
    return;
  }
  if (fileCredits >= findFileTimeUpgradePrice) {
    fileCredits -= findFileTimeUpgradePrice;
    findFileTime = findFileTime * findFileTimeUpgradeValueIncrease;
    findFileTimeUpgradePrice = Math.floor(
      findFileTimeUpgradePrice * findFileTimeUpgradePriceIncrease
    );
    cpuLoad++;
    updateDisplay();
  }
};

/// maxFoundFiles upgrade
maxFoundFilesUpgradeElement.onclick = () => {
  if (cpuLoad >= 100) {
    return;
  }
  if (fileCredits >= maxFoundFilesUpgradePrice) {
    fileCredits -= maxFoundFilesUpgradePrice;
    maxFoundFiles = maxFoundFiles + maxFoundFilesUpgradeValueIncrease;
    maxFoundFilesUpgradePrice = Math.floor(
      maxFoundFilesUpgradePrice * maxFoundFilesUpgradePriceIncrease
    );
    cpuLoad++;
    updateDisplay();
  }
};
