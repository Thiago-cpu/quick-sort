import libraryseedrandom from "seedrandom";

const seedrandom = (seed: string, optional?: string | number) => {
  return libraryseedrandom(`${seed}-${optional}`)();
};
