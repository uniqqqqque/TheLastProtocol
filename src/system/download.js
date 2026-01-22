// Finding + downloads (globals, no build step)

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

// helper used by downloads
function recalcDownloads() {
  activeDownloads = activeDownloadsList.length;
  const now = Date.now();
  activeDownloadsList.forEach((d) => (d.lastUpdate = now));
}

// findFile, first bar
findProgressElement.onmouseover = () => {
  if (finding) return;
  if (foundFilesElement.childElementCount >= maxFoundFiles) return;

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

    // rarity logic
    const roll = Math.random();
    let rarityMult = 1;
    let rarityColorClass = "";

    if (roll < chanceLegendary) {
      rarityMult = multLegendary;
      rarityColorClass = "legendary";
    } else if (roll < chanceEpic) {
      rarityMult = multEpic;
      rarityColorClass = "epic";
    } else if (roll < chanceRare) {
      rarityMult = multRare;
      rarityColorClass = "rare";
    }

    const randomFactor = 1 + (Math.random() * 1.0 - 0.5);
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

    if (typeof updateDisplay === "function") updateDisplay();
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
      if (typeof updateDisplay === "function") updateDisplay();

      function updateDownload() {
        if (download.finished) return;

        const now = Date.now();
        const delta = (now - download.lastUpdate) / 1000;
        download.lastUpdate = now;

        const speed = internetSpeed / activeDownloadsList.length;
        download.downloaded += speed * delta;

        const percent = Math.min(
          (download.downloaded / download.fileSize) * 100,
          100,
        );
        download.bar.value = percent;

        if (download.downloaded >= download.fileSize) {
          finishDownload(download);
        }
      }

      download.interval = setInterval(updateDownload, 10);

      function finishDownload(d) {
        if (d.finished) return;
        clearInterval(d.interval);
        d.finished = true;

        archivedFiles++;
        lifetimeArchivedFiles++;
        fileCreditsLastSecond += d.fileSize;
        fileCredits += d.fileSize;
        storageUsed += d.fileSize;

        downloadContainer.remove();
        activeDownloadsList = activeDownloadsList.filter((x) => x !== d);
        recalcDownloads();
        if (typeof updateDisplay === "function") updateDisplay();

        if (isMouseOverFind) {
          findProgressElement.onmouseover();
        }
      }
    };
  }, findFileTime * 1000);
};
