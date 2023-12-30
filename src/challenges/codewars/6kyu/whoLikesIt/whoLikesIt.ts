export const likes = (a: string[]): string => {
  const friendsLength = a.length;

  if (friendsLength === 0) return "no one likes this";
  if (friendsLength === 1) return `${a[0]} likes this`;
  if (friendsLength === 2) return `${a[0]} and ${a[1]} like this`;
  if (friendsLength === 3) return `${a[0]}, ${a[1]} and ${a[2]} like this`;

  return `${a.slice(0, 2).join(", ")} and ${
    a.slice(2).length
  } others like this`;
};
