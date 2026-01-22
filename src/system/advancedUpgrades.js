// Advanced upgrades UI (globals, no build step)

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

  if (minTrigger === Infinity) {
    archivedFilesToNextUnlock.innerText = "All upgrades unlocked!";
  } else {
    archivedFilesToNextUnlock.innerText = minTrigger - lifetimeArchivedFiles;
  }
}

function checkAdvancedUpgrades() {
  advancedUpgradesConfig.forEach((upgrade) => {
    const elementId = `adv_upg_${upgrade.id}`;
    let element = document.getElementById(elementId);

    // unlocked forever based on lifetime
    if (lifetimeArchivedFiles < upgrade.trigger) return;

    // create element
    if (!element) {
      element = document.createElement("div");
      element.id = elementId;
      element.className =
        "mb-6 text-center border p-2 cursor-pointer bg-slate-200";

      element.innerHTML = `
				<div class = "w-full font-bold">${upgrade.name}</div>
				<div class = "mt-1">
					<span>${upgrade.description}</span><br>
					<span class = "font-bold">Price: ${upgrade.price}</span>
				</div>
			`;

      element.onclick = () => {
        if (upgrade.purchased) return;
        if (fileCredits < upgrade.price) return;

        fileCredits -= upgrade.price;
        upgrade.purchased = true;
        upgrade.effect();
        if (typeof updateDisplay === "function") updateDisplay();
      };

      advancedUpgradesListElement.appendChild(element);
    }

    // purchased: remove from UI
    if (upgrade.purchased) {
      element.remove();
      return;
    }

    // affordability colors (always resync, important after prestige resets credits)
    if (fileCredits >= upgrade.price) {
      element.classList.add("bg-green-200");
      element.classList.remove("bg-slate-200");
    } else {
      element.classList.add("bg-slate-200");
      element.classList.remove("bg-green-200");
    }
  });
}
