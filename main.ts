function importFn(day: `day${number}`) {
  return import(`./src/${day}/index.ts`).catch(() => {
    // do nothing
  });
}

for (let i = 1; i <= 12; i++) {
  importFn(`day${i}`);
}
