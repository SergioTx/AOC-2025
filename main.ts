function importFn(day: `day${number}`) {
  return import(`./src/${day}/index.ts`).catch((err) => {
    console.warn(`Could not load ${day}, skipping...`, err);
    // do nothing
  });
}

const customArgs = Deno.args.filter((arg) => !arg.startsWith('--'));
console.log('Starting AOC 2025 solutions...');
if (customArgs.length >= 1) {
  customArgs.forEach(async (dayArg) => {
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
