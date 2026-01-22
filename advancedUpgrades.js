const advancedUpgradesConfig = [
  // --- Early Game (Accessible starting from 15-20 archived files) ---
  {
    id: "optimizedProtocols",
    name: "Optimized Protocols",
    price: 45,
    trigger: 10,
    description: "+25.0 to Internet speed",
    purchased: false,
    effect: function () {
      internetSpeed += 25.0;
    },
  },
  {
    id: "extraStorage",
    name: "Standard HDD",
    price: 80,
    trigger: 20,
    description: "+1024 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 1024;
    },
  },
  {
    id: "backgroundMiner",
    name: "Background Miner",
    price: 120,
    trigger: 30,
    description: "+5.0 Passive Income (credits/sec)",
    purchased: false,
    effect: function () {
      passiveIncome += 5.0;
    },
  },
  {
    id: "betterCompression",
    name: "Better Compression",
    price: 150,
    trigger: 40,
    description: "File size Upgrade gives +1.5 instead of +0.5",
    purchased: false,
    effect: function () {
      fileSizeUpgradeValueIncrease += 1.0;
    },
  },
  {
    id: "extraStorageSmall",
    name: "SSD Cache",
    price: 200,
    trigger: 60,
    description: "+2048 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 2048;
    },
  },
  {
    id: "turboSearch",
    name: "Turbo Search",
    price: 250,
    trigger: 80,
    description:
      "Time to find file Upgrade reduces time by 0.02s instead of 0.01s",
    purchased: false,
    effect: function () {
      findFileTimeUpgradeValueIncrease += 0.01;
    },
  },
  {
    id: "fiberOpticCables",
    name: "Fiber Optic Cables",
    price: 350,
    trigger: 100,
    description: "Internet speed Upgrade gives +3.0 instead of +1.0",
    purchased: false,
    effect: function () {
      internetSpeedUpgradeValueIncrease += 2.0;
    },
  },

  // --- Mid Game ---
  {
    id: "compactEncoding",
    name: "High-Density Encoding",
    price: 600,
    trigger: 150,
    description: "Base File size value multiplier: File size *= 1.3",
    purchased: false,
    effect: function () {
      fileSize *= 1.3;
    },
  },
  {
    id: "storageExpansionI",
    name: "Network Storage I",
    price: 800,
    trigger: 200,
    description: "+5120 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 5120;
    },
  },
  {
    id: "distributedComputing",
    name: "Distributed Computing",
    price: 1200,
    trigger: 300,
    description: "+15.0 Passive Income (credits/sec)",
    purchased: false,
    effect: function () {
      passiveIncome += 15.0;
    },
  },
  {
    id: "multiThreading",
    name: "Multi-Threading",
    price: 2000,
    trigger: 400,
    description: "+3 to Max files can found",
    purchased: false,
    effect: function () {
      maxFoundFiles += 3;
    },
  },
  {
    id: "storageMicrochip",
    name: "Storage Nano-Cells",
    price: 2500,
    trigger: 500,
    description: "Max storage Upgrade gives +2048 instead of +1024",
    purchased: false,
    effect: function () {
      storageMaxUpgradeValueIncrease += 1024;
    },
  },

  // --- Late Game ---
  {
    id: "storageExpansionII",
    name: "Data Center Link",
    price: 10000,
    trigger: 1000,
    description: "+20480 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 20480;
    },
  },
  {
    id: "fileSizeBoost",
    name: "File Size Booster",
    price: 15000,
    trigger: 2000,
    description: "File size multiplier: File size *= 1.5",
    purchased: false,
    effect: function () {
      fileSize *= 1.5;
    },
  },
  {
    id: "botnetControl",
    name: "Botnet Control",
    price: 25000,
    trigger: 3000,
    description: "+100.0 Passive Income (credits/sec)",
    purchased: false,
    effect: function () {
      passiveIncome += 100.0;
    },
  },
  {
    id: "quantumProcessor",
    name: "Quantum Nano-Core",
    price: 100000,
    trigger: 10000,
    description: "Every Basic Upgrade becomes 50% more efficient",
    purchased: false,
    effect: function () {
      fileSizeUpgradeValueIncrease *= 1.5;
      storageMaxUpgradeValueIncrease *= 1.5;
      internetSpeedUpgradeValueIncrease *= 1.5;
      cpuLoadUpgradeValueIncrease *= 1.5;
      findFileTimeUpgradeValueIncrease *= 1.5;
      maxFoundFilesUpgradeValueIncrease *= 1.5;
    },
  },
];
