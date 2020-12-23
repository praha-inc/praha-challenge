const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const throwOccasionally = (): void => {
  if (getRandomInt(10) < 2) {
    throw new Error("fail!");
  }
};
