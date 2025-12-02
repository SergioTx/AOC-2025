const file = Deno.readTextFileSync('src/day2/input2.txt');
const input = file.split(',').map((report) => report.split('-')) as IdRange[];

type IdRange = [from: string, to: string];

function isInvalidIdHalf(id: string): boolean {
  if (id.length % 2 !== 0) {
    return false;
  }

  return id.substring(0, id.length / 2) === id.substring(id.length / 2);
}

function sumInvalidIdsHalf(ids: IdRange[]): number {
  let sum = 0;
  ids.forEach(([from, to]) => {
    const fromNum = parseInt(from, 10);
    const toNum = parseInt(to, 10);
    let count = 0;

    for (let id = fromNum; id <= toNum; id++) {
      const isInvalid = isInvalidIdHalf(String(id));
      if (isInvalid) {
        sum += id;
        count++;
      }
    }
  });
  return sum;
}

function isInvalidId(id: string): boolean {
  const halfLength = Math.floor(id.length / 2);
  for (let i = 1; i <= halfLength; i++) {
    const repeatedId = id.substring(0, i).repeat(id.length / i);

    if (repeatedId === id) {
      return true;
    }
  }
  return false;
}

function sumInvalidIds(ids: IdRange[]): number {
  let sum = 0;
  ids.forEach(([from, to]) => {
    const fromNum = parseInt(from, 10);
    const toNum = parseInt(to, 10);
    let count = 0;

    for (let id = fromNum; id <= toNum; id++) {
      const isInvalid = isInvalidId(String(id));
      if (isInvalid) {
        sum += id;
        count++;
      }
    }
  });
  return sum;
}

const result2A = sumInvalidIdsHalf(input);
const result2B = sumInvalidIds(input);

console.log('2A: ', result2A);
console.log('2B: ', result2B);
