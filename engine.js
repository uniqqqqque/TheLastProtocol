// dynamic game values
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

// static game values, adjust for balance
// start
let fileSize = 1;
let storageMax = 1024;
let internetSpeed = 1;
let findFileTime = 1;
let maxFoundFiles = 1;

// default prices
let fileSizeUpgradePrice = 5;
let storageMaxUpgradePrice = 100;
let internetSpeedUpgradePrice = 5;
let cpuLoadUpgradePrice = 10;
let findFileTimeUpgradePrice = 20;
let maxFoundFilesUpgradePrice = 20;

// price increases
let fileSizeUpgradePriceIncrease = 1.1;
let storageMaxUpgradePriceIncrease = 1.1;
let internetSpeedUpgradePriceIncrease = 1.1;
let cpuLoadUpgradePriceIncrease = 1.1;
let findFileTimeUpgradePriceIncrease = 1.1;
let maxFoundFilesUpgradePriceIncrease = 1.1;

// value increases
let fileSizeUpgradeValueIncrease = 0.5; //plus
let storageMaxUpgradeValueIncrease = 1024; //plus
let internetSpeedUpgradeValueIncrease = 1; //plus
let cpuLoadUpgradeValueIncrease = 10; // minus
let findFileTimeUpgradeValueIncrease = 0.01; // minus in sec
let maxFoundFilesUpgradeValueIncrease = 1; //plus

// file rarity
let chanceRare = 0.15; //15%
let chanceEpic = 0.05;
let chanceLegendary = 0.01;

// file mult
let multRare = 5; //5x fileSize
let multEpic = 10;
let multLegendary = 100;

// consts for dom cache
const findProgressElement = document.getElementById("findProgress");
const fileSizeUpgradeElement = document.getElementById("fileSizeUpgrade");
const fileSizeUpgradePriceElement = document.getElementById(
  "fileSizeUpgradePrice",
);
const storageMaxUpgradeElement = document.getElementById("storageMaxUpgrade");
const storageMaxUpgradePriceElement = document.getElementById(
  "storageMaxUpgradePrice",
);
const internetSpeedUpgradeElement = document.getElementById(
  "internetSpeedUpgrade",
);
const internetSpeedUpgradePriceElement = document.getElementById(
  "internetSpeedUpgradePrice",
);
const cpuLoadUpgradeElement = document.getElementById("cpuLoadUpgrade");
const cpuLoadUpgradePriceElement = document.getElementById(
  "cpuLoadUpgradePrice",
);
const findFileTimeUpgradeElement = document.getElementById(
  "findFileTimeUpgrade",
);
const findFileTimeUpgradePriceElement = document.getElementById(
  "findFileTimeUpgradePrice",
);
const maxFoundFilesUpgradeElement = document.getElementById(
  "maxFoundFilesUpgrade",
);
const maxFoundFilesUpgradePriceElement = document.getElementById(
  "maxFoundFilesUpgradePrice",
);

const foundFilesElement = document.getElementById("foundFiles");
const fileSizeElement = document.getElementById("fileSize");
const archivedFilesElement = document.getElementById("archivedFiles");
const lifetimeArchivedFilesElement = document.getElementById(
  "lifetimeArchivedFiles",
);
const storageUsedElement = document.getElementById("storageUsed");
const storageMaxElement = document.getElementById("storageMax");
const storageUsedProgressBar = document.getElementById(
  "storageUsedProgressBar",
);
const storageUsedProgressLabel = document.getElementById(
  "storageUsedProgressLabel",
);
const internetSpeedElement = document.getElementById("internetSpeed");
const cpuLoadElement = document.getElementById("cpuLoad");
const dataRateElement = document.getElementById("dataRate");
const fileCreditsElement = document.getElementById("fileCredits");
const findFileTimeElement = document.getElementById("findFileTime");
const maxFoundFilesElement = document.getElementById("maxFoundFiles");
const nowFoundFiles = document.getElementById("nowFoundFiles");

const clearStorageButton = document.getElementById("clearStorageButton");
const prestigeButton = document.getElementById("prestigeButton");
const prestigeButtonLabel = document.getElementById("prestigeButtonLabel");

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
// advanced upgrads
const advancedUpgradesListElement = document.getElementById(
  "advancedUpgradesList",
);
const archivedFilesToNextUnlock = document.getElementById(
  "archivedFilesToNextUnlock",
);
const passiveIncomeElement = document.getElementById("passiveIncome");
const cpuLoadProgressBar = document.getElementById("cpuLoadProgressBar");

// update display start -----------------------------------------------------------------------------
updateDisplay();
function updateDisplay() {
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
  checkAdvancedUpgrades();
  updateArchivedFilesToNextUnlock();

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

  // prestige

  if (prestigeButton) {
    const canPrestige = archivedFiles >= 100;
    prestigeButton.disabled = !canPrestige;
    prestigeButton.className =
      "border p-2 " + (canPrestige ? "bg-purple-200" : "bg-slate-200");

    if (prestigeButtonLabel) {
      // shows current multiplier and what next prestige gives
      const nextMultiplier = prestigeMultiplier * 2;
      prestigeButtonLabel.innerText = `Prestige (x${prestigeMultiplier} → x${nextMultiplier})`;
    }
  }
}
// updateDisplay end --------------------------------------------------------------------------------

// prestige
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

  fileSize = 1;
  storageMax = 1024;
  internetSpeed = 1;
  findFileTime = 1;
  maxFoundFiles = 1;

  fileSizeUpgradePrice = 5;
  storageMaxUpgradePrice = 100;
  internetSpeedUpgradePrice = 5;
  cpuLoadUpgradePrice = 10;
  findFileTimeUpgradePrice = 20;
  maxFoundFilesUpgradePrice = 20;
  cpuLoad = 0;

  updateDisplay();
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
clearStorageButton.onclick = () => {
  if (storageUsed === 0) return;
  if (
    confirm(
      "Format drive? This will free up all storage space, but divides File credits and Total archived files by 2",
    )
  ) {
    storageUsed = 0;
    fileCredits = +(fileCredits / 2).toFixed(2);
    archivedFiles = +(archivedFiles / 2).toFixed(2);
    updateDisplay();
  }
};
/// dataRate calc
setInterval(() => {
  fileCredits += passiveIncome;
  dataRate = fileCreditsLastSecond + passiveIncome;
  fileCreditsLastSecond = 0;
  updateDisplay();
}, 1000);

/// array for downloads
let activeDownloadsList = [];

// for smooth finding with mouse
let isMouseOverFind = false;
findProgressElement.addEventListener(
  "mouseenter",
  () => (isMouseOverFind = true),
);
findProgressElement.addEventListener(
  "mouseleave",
  () => (isMouseOverFind = false),
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

    //rarity logic
    const roll = Math.random();
    let rarityMult = 1;
    let rarityColorClass = "";

    //check luck
    if (roll < chanceLegendary) {
      rarityMult = multLegendary;
      rarityColorClass = "legendary";
    } else if (roll < chanceEpic) {
      rarityMult = multEpic;
      rarityColorClass = "epic";
    } else if (roll < chanceRare) {
      rarityMult = multRare;
      rarityColorClass = "rare";
    } else {
      rarityColorClass = "";
    }

    const randomFactor = 1 + (Math.random() * 1.0 - 0.5); // +-10%
    const thisFileSize = fileSize * randomFactor * rarityMult;
    const downloadBar = document.createElement("progress");
    downloadBar.value = 0;
    downloadBar.max = 100;
    downloadBar.className = `w-full h-12 cursor-pointer download-progress ${rarityColorClass}`;

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
          100,
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
        lifetimeArchivedFiles++;
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

// regular upgrades ----------------------------------------------------------------------
/// fileSize upgrade
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
    storageMax =
      storageMax + storageMaxUpgradeValueIncrease * prestigeMultiplier;
    storageMaxUpgradePrice = Math.ceil(
      storageMaxUpgradePrice * storageMaxUpgradePriceIncrease,
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
    internetSpeed =
      internetSpeed + internetSpeedUpgradeValueIncrease * prestigeMultiplier;
    internetSpeedUpgradePrice = Math.ceil(
      internetSpeedUpgradePrice * internetSpeedUpgradePriceIncrease,
    );
    cpuLoad++;
    updateDisplay();
  }
};

/// cpuLoad upgrade
cpuLoadUpgradeElement.onclick = () => {
  if (cpuLoad <= 10) {
    return;
  }
  if (fileCredits >= cpuLoadUpgradePrice) {
    fileCredits -= cpuLoadUpgradePrice;
    cpuLoad = cpuLoad - cpuLoadUpgradeValueIncrease * prestigeMultiplier; ///change
    cpuLoadUpgradePrice = Math.ceil(
      cpuLoadUpgradePrice * cpuLoadUpgradePriceIncrease,
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
    findFileTime = Math.max(
      0.01,
      findFileTime - findFileTimeUpgradeValueIncrease * prestigeMultiplier,
    );
    findFileTimeUpgradePrice = Math.ceil(
      findFileTimeUpgradePrice * findFileTimeUpgradePriceIncrease,
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
    maxFoundFiles =
      maxFoundFiles + maxFoundFilesUpgradeValueIncrease * prestigeMultiplier;
    maxFoundFilesUpgradePrice = Math.ceil(
      maxFoundFilesUpgradePrice * maxFoundFilesUpgradePriceIncrease,
    );
    cpuLoad++;
    updateDisplay();
  }
};

// advanced upgrades ----------------------------------------------------------
checkAdvancedUpgrades();
updateArchivedFilesToNextUnlock();
function updateArchivedFilesToNextUnlock() {
  let minTrigger = Infinity;
  advancedUpgradesConfig.forEach((upgrade) => {
    if (
      !upgrade.purchased &&
      upgrade.trigger > lifetimeArchivedFiles &&
      upgrade.trigger < minTrigger
    ) {
      minTrigger = upgrade.trigger;
    }
  });

  if (minTrigger == Infinity) {
    archivedFilesToNextUnlock.innerText = "All upgrades unlocked!";
  } else {
    const left = minTrigger - lifetimeArchivedFiles;
    archivedFilesToNextUnlock.innerText = left;
  }
}

function checkAdvancedUpgrades() {
  advancedUpgradesConfig.forEach((upgrade) => {
    const elementId = `adv_upg_${upgrade.id}`;
    let element = document.getElementById(elementId);

    // if can unlock
    if (lifetimeArchivedFiles >= upgrade.trigger) {
      // create element
      if (!element) {
        element = document.createElement("div");
        element.id = elementId;
        element.className =
          "mb-6 text-center border p-2 cursor-pointer bg-slate-200";
        // button
        element.innerHTML = `
        <div class = "w-full font-bold">${upgrade.name}</div>
        <div class = "mt-1">
          <span>${upgrade.description}</span><br>
          <span class = "font-bold">Price: ${upgrade.price}</span>
        </div>
        `;
        element.onclick = () => {
          if (!upgrade.purchased && fileCredits >= upgrade.price) {
            fileCredits -= upgrade.price;
            upgrade.purchased = true;
            upgrade.effect();
            updateDisplay();
          }
        };
        advancedUpgradesListElement.appendChild(element);
      }
      // state
      if (upgrade.purchased) {
        element.remove();
        return;
      }
      // colors
      if (fileCredits >= upgrade.price) {
        element.classList.add("bg-green-200");
        element.classList.remove("bg-slate-200");
      } else {
        element.classList.add("bg-slate-200");
        element.classList.remove("bg-green-200");
      }
    }
  });
}
