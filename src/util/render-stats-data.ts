export const renderStatsData = {
  "get-district-list": 0,
  "get-filtered-suggestions": 0,
  "select-option": 0,
  "suggestion-element": 0,
};

const renderStatsEl = document.querySelector("#render-stats > ul")!;

export const increaseRenderCount = (
  key: keyof typeof renderStatsData,
): void => {
  renderStatsData[key] += 1;

  const keyEl = renderStatsEl.querySelector(`li.${key}`)!;

  if (!keyEl) {
    const newEl = document.createElement("li");
    newEl.classList.add(key);
    newEl.innerHTML = `<p class="key">${key}</p> <p class="value">${renderStatsData[key]}</p>`;
    renderStatsEl.appendChild(newEl);
    return;
  }

  renderStatsEl.querySelector(`li.${key} > .value`)!.textContent =
    renderStatsData[key].toString();
};
