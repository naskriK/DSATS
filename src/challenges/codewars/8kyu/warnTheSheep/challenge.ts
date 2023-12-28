export function warnTheSheep(queue: string[]): string {
  const QUEUE_LENGTH = queue.length - 1;

  const indexOfWolveInQueue = queue.indexOf("wolf");

  if (indexOfWolveInQueue === QUEUE_LENGTH) {
    return "Pls go away and stop eating my sheep";
  }

  return `Oi! Sheep number ${
    QUEUE_LENGTH - indexOfWolveInQueue
  }! You are about to be eaten by a wolf!`;
}
