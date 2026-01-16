const advancedUpgradesConfig = [
  // --- Early Game (Trigger 5-50) ---
  {
    id: "optimizedProtocols",
    name: "Optimized Protocols",
    price: 50,
    trigger: 5,
    description: "+5.0 to Internet speed",
    purchased: false,
    effect: function () {
      internetSpeed += 5.0;
    },
  },
  {
    id: "extraStorage",
    name: "External HDD",
    price: 100,
    trigger: 15,
    description: "+100 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 100;
    },
  },
  {
    id: "optimizedProtocolsII",
    name: "Optimized Protocols II",
    price: 500,
    trigger: 20,
    description: "+10 to Internet speed",
    purchased: false,
    effect: function () {
      internetSpeed += 10;
    },
  },
  {
    id: "backgroundMiner",
    name: "Background Miner",
    price: 250,
    trigger: 25,
    description: "+5.0 Passive Income (credits/sec)",
    purchased: false,
    effect: function () {
      passiveIncome += 5.0;
    },
  },
  {
    id: "betterCompression",
    name: "Better Compression",
    price: 300,
    trigger: 30,
    description: "File size Upgrade gives +1.0 instead of +0.5",
    purchased: false,
    effect: function () {
      fileSizeUpgradeValueIncrease += 0.5;
    },
  },
  {
    id: "extraStorageSmall",
    name: "Expansion Card",
    price: 300,
    trigger: 30,
    description: "+200 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 200;
    },
  },
  {
    id: "turboSearch",
    name: "Turbo Search",
    price: 420,
    trigger: 40,
    description: "-0.1 sec to Time to find file (faster searching)",
    purchased: false,
    effect: function () {
      findFileTime = Math.max(0.01, findFileTime - 0.1);
    },
  },
  {
    id: "bulkDiscovery",
    name: "Bulk Discovery",
    price: 500,
    trigger: 50,
    description: "+1 to Max files can found",
    purchased: false,
    effect: function () {
      maxFoundFiles += 1;
    },
  },
  {
    id: "fiberOpticCables",
    name: "Fiber Optic Cables",
    price: 500,
    trigger: 50,
    description: "Internet speed Upgrade gives +1.0 instead of +0.5",
    purchased: false,
    effect: function () {
      internetSpeedUpgradeValueIncrease += 0.5;
    },
  },

  // --- Mid Game (Trigger 60-150) ---
  {
    id: "compactEncoding",
    name: "High-Density Encoding",
    price: 650,
    trigger: 60,
    description: "Increases base File size value: File size *= 1.1",
    purchased: false,
    effect: function () {
      fileSize *= 1.1;
    },
  },
  {
    id: "liquidCooling",
    name: "Liquid Cooling",
    price: 800,
    trigger: 75,
    description: "Processor load Upgrade reduces load by 15 instead of 10",
    purchased: false,
    effect: function () {
      cpuLoadUpgradeValueIncrease += 5;
    },
  },
  {
    id: "storageExpansionI",
    name: "Storage Expansion I",
    price: 700,
    trigger: 75,
    description: "+1000 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 1000;
    },
  },
  {
    id: "distributedComputing",
    name: "Distributed Computing",
    price: 850,
    trigger: 80,
    description: "+25.0 Passive Income (credits/sec)",
    purchased: false,
    effect: function () {
      passiveIncome += 25.0;
    },
  },
  {
    id: "smartCaching",
    name: "Smart Caching",
    price: 800,
    trigger: 90,
    description: "+1.5 to Internet speed",
    purchased: false,
    effect: function () {
      internetSpeed += 1.5;
    },
  },
  {
    id: "multiThreading",
    name: "Multi-Threading",
    price: 1200,
    trigger: 100,
    description: "+2 to Max files can found",
    purchased: false,
    effect: function () {
      maxFoundFiles += 2;
    },
  },
  {
    id: "fragmentHunter",
    name: "Fragment Hunter",
    price: 900,
    trigger: 110,
    description: "+1 to Max files can found",
    purchased: false,
    effect: function () {
      maxFoundFiles += 1;
    },
  },
  {
    id: "storageMicrochip",
    name: "Storage Microchip",
    price: 950,
    trigger: 120,
    description: "Max storage Upgrade efficiency increases",
    purchased: false,
    effect: function () {
      storageMaxUpgradeValueIncrease += 16;
    },
  },
  {
    id: "assemblyProtocol",
    name: "Assembly Protocol",
    price: 1100,
    trigger: 140,
    description: "Faster assembly: -0.02 sec to Time to find file",
    purchased: false,
    effect: function () {
      findFileTime = Math.max(0.01, findFileTime - 0.02);
    },
  },
  {
    id: "heuristicScan",
    name: "Heuristic Scan",
    price: 2000,
    trigger: 150,
    description:
      "Time to find file Upgrade reduces time by 0.02s instead of 0.01s",
    purchased: false,
    effect: function () {
      findFileTimeUpgradeValueIncrease += 0.01;
    },
  },

  // --- Late Game (Trigger 160-500) ---
  {
    id: "storageExpansionII",
    name: "Storage Expansion II",
    price: 1300,
    trigger: 160,
    description: "+2000 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 2000;
    },
  },
  {
    id: "parallelScanners",
    name: "Parallel Scanners",
    price: 1400,
    trigger: 180,
    description: "+2 to Max files can found",
    purchased: false,
    effect: function () {
      maxFoundFiles += 2;
    },
  },
  {
    id: "cloudServer",
    name: "Cloud Server Access",
    price: 5000,
    trigger: 200,
    description: "Max storage Upgrade gives +128 instead of +64",
    purchased: false,
    effect: function () {
      storageMaxUpgradeValueIncrease += 64;
    },
  },
  {
    id: "fileSizeBoost",
    name: "File Size Booster",
    price: 1500,
    trigger: 200,
    description: "File size *= 1.25 (Increased value per file)",
    purchased: false,
    effect: function () {
      fileSize *= 1.25;
    },
  },
  {
    id: "storageArray",
    name: "Storage Array",
    price: 1800,
    trigger: 230,
    description: "Max storage Upgrade efficiency increases",
    purchased: false,
    effect: function () {
      storageMaxUpgradeValueIncrease += 32;
    },
  },
  {
    id: "botnetControl",
    name: "Botnet Control",
    price: 3000,
    trigger: 250,
    description: "+100.0 Passive Income (credits/sec)",
    purchased: false,
    effect: function () {
      passiveIncome += 100.0;
    },
  },
  {
    id: "networkOverclock",
    name: "Network Overclock",
    price: 1900,
    trigger: 260,
    description: "+2.5 to Internet speed",
    purchased: false,
    effect: function () {
      internetSpeed += 2.5;
    },
  },
  {
    id: "quantumProcessor",
    name: "Quantum Processor",
    price: 10000,
    trigger: 300,
    description: "Instantly adds +50 to Base File size",
    purchased: false,
    effect: function () {
      fileSize += 50;
    },
  },
  {
    id: "compressionPipeline",
    name: "Compression Pipeline",
    price: 2100,
    trigger: 300,
    description: "Max storage Upgrade efficiency increases",
    purchased: false,
    effect: function () {
      storageMaxUpgradeValueIncrease += 16;
    },
  },
  {
    id: "storageExpansionIII",
    name: "Storage Expansion III",
    price: 2400,
    trigger: 340,
    description: "+4000 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 4000;
    },
  },
  {
    id: "priorityPipeline",
    name: "Priority Pipeline",
    price: 2600,
    trigger: 380,
    description: "Internet speed Upgrade efficiency increases",
    purchased: false,
    effect: function () {
      internetSpeedUpgradeValueIncrease += 0.25;
    },
  },
  {
    id: "cpuMicrocode",
    name: "CPU Microcode",
    price: 2800,
    trigger: 420,
    description: "Processor load Upgrade efficiency increases",
    purchased: false,
    effect: function () {
      cpuLoadUpgradeValueIncrease += 2;
    },
  },
  {
    id: "rapidFetch",
    name: "Rapid Fetch",
    price: 3000,
    trigger: 460,
    description: "Time to find file improvements are better",
    purchased: false,
    effect: function () {
      findFileTimeUpgradeValueIncrease = Math.max(
        0.0001,
        findFileTimeUpgradeValueIncrease + 0.002
      );
    },
  },
  {
    id: "aiManager",
    name: "AI Network Manager",
    price: 25000,
    trigger: 500,
    description: "Max files can found Upgrade adds +2 slots instead of +1",
    purchased: false,
    effect: function () {
      maxFoundFilesUpgradeValueIncrease += 1;
    },
  },

  // --- End Game (Trigger 500+) ---
  {
    id: "finderCluster",
    name: "Finder Cluster",
    price: 3300,
    trigger: 520,
    description: "Max files can found Upgrade efficiency increases",
    purchased: false,
    effect: function () {
      maxFoundFilesUpgradeValueIncrease += 1;
    },
  },
  {
    id: "storageCluster",
    name: "Storage Cluster",
    price: 3600,
    trigger: 600,
    description: "Max storage Upgrade efficiency increases",
    purchased: false,
    effect: function () {
      storageMaxUpgradeValueIncrease += 64;
    },
  },
  {
    id: "echoAmplifier",
    name: "Echo Amplifier",
    price: 4000,
    trigger: 720,
    description: "File size Upgrade efficiency increases",
    purchased: false,
    effect: function () {
      fileSizeUpgradeValueIncrease += 0.3;
    },
  },
  {
    id: "globalSyndicate",
    name: "Global Syndicate",
    price: 45000,
    trigger: 800,
    description: "+500.0 Passive Income (credits/sec)",
    purchased: false,
    effect: function () {
      passiveIncome += 500.0;
    },
  },
  {
    id: "storageExpansionIV",
    name: "Storage Expansion IV",
    price: 5000,
    trigger: 900,
    description: "+10,000 to Max storage",
    purchased: false,
    effect: function () {
      storageMax += 10000;
    },
  },
  {
    id: "storageVault",
    name: "The Vault",
    price: 7000,
    trigger: 1200,
    description: "Max storage Upgrade efficiency increases (Ultra long-term)",
    purchased: false,
    effect: function () {
      storageMaxUpgradeValueIncrease += 128;
    },
  },
];
