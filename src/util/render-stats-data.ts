export const renderStatsData = {
  'city-select': 0,
  'city-option': 0,
};

const renderStatsEl = document.querySelector('#render-stats > ul')!;

export const increaseRenderCount = (key: keyof typeof renderStatsData): void => {
  renderStatsData[key] += 1;

  const keyEl = renderStatsEl.querySelector(`li.${key}`)!;

  if (!keyEl) {
    const newEl = document.createElement('li');
    newEl.classList.add(key);
    newEl.textContent = `${key}: ${renderStatsData[key]}`;
    renderStatsEl.appendChild(newEl);
    return;
  }

  renderStatsEl.querySelector(`li.${key}`)!.textContent = `${key}: ${renderStatsData[key]}`;
}
