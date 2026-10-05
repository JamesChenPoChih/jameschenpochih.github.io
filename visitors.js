(() => {
  const counters = [
    { element: document.getElementById('today-visitors'), key: 'today' },
    { element: document.getElementById('total-visitors'), key: 'total-visitors' },
  ];
  if (counters.some(counter => !counter.element)) return;

  // Local previews must not contribute to the public visitor counts.
  if (!['http:', 'https:'].includes(location.protocol) ||
      ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) {
    counters.forEach(({ element }) => { element.title = 'Available on the published website'; });
    return;
  }

  const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Boise', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const date = ['year', 'month', 'day'].map(type => dateParts.find(part => part.type === type).value).join('-');

  counters.forEach(({ element, key }) => {
    const counterKey = key === 'today' ? `visitors-${date}` : key;
    const url = new URL(`https://counterapi.com/api/${location.hostname}/view/${counterKey}`);
    url.searchParams.set('unique', 'true');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    fetch(url, {
      cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer', signal: controller.signal,
    })
      .then(response => {
        if (!response.ok) throw new Error('Visitor service unavailable');
        return response.json();
      })
      .then(data => {
        const raw = data.value;
        const count = typeof raw === 'number' ? raw : /^\d+$/.test(raw) ? Number(raw) : NaN;
        if (!Number.isSafeInteger(count) || count < 0) {
          element.title = 'Visitor count temporarily unavailable';
          return;
        }
        element.textContent = count.toLocaleString('en-US');
      })
      .catch(() => { element.title = 'Visitor count temporarily unavailable'; })
      .finally(() => clearTimeout(timeout));
  });
})();
