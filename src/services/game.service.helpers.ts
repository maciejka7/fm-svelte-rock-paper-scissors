export function getRandomNuberBetween({
  start,
  end,
}: {
  start: number;
  end: number;
}) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}
