export function groupAndPaginate<T>(
  items: T[],
  groupBy: keyof T,
  visibleCount: number
) {
  const groups: Record<string, T[]> = {};

  items.forEach((item) => {
    const keyValue = String(item[groupBy]);
    if (!groups[keyValue]) groups[keyValue] = [];
    groups[keyValue].push(item);
  });

  const sortedKeys = Object.keys(groups).sort((a, b) => {
    const na = Number(a);
    const nb = Number(b);
    return !isNaN(na) && !isNaN(nb) ? nb - na : b.localeCompare(a);
  });

  let count = 0;
  const visibleGroups: Record<string, T[]> = {};

  for (const key of sortedKeys) {
    const arr = groups[key];
    const remaining = visibleCount - count;

    if (remaining <= 0) break;

    if (arr.length <= remaining) {
      visibleGroups[key] = arr;
      count += arr.length;
    } else {
      visibleGroups[key] = arr.slice(0, remaining);
      break;
    }
  }

  return {
    visibleGroups,
    sortedKeys: Object.keys(visibleGroups).sort((a, b) => {
      const na = Number(a);
      const nb = Number(b);
      return !isNaN(na) && !isNaN(nb) ? nb - na : b.localeCompare(a);
    }),
  };
}
