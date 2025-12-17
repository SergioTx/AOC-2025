function importFn(day: `day${number}`) {
  return import(`./src/${day}/index.ts`).catch((err) => {
    console.warn(`Could not load ${day}, skipping...`, err);
    // do nothing
  });
}
console.log('Starting AOC 2025 solutions...');
if (Deno.args.length >= 1) {
  Deno.args.forEach(async (dayArg) => {
    const day = `day${parseInt(dayArg, 10)}` as const;
    console.log(`Running ${day}...`);
    await importFn(day);
  });
} else {
  for (let i = 1; i <= 12; i++) {
    await importFn(`day${i}`);
  }
}
console.log('Finished AOC 2025 solutions');
