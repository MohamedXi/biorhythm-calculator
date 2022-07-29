import { calculationBiorhythms } from "./calculations";

it('calculates the physical biorhythm', () => {
  const { physical } = calculationBiorhythms('1995-01-01', '2020-02-18');
  expect(physical).toBeCloseTo(0.5196);
});

it('calculates the emotional biorhythm', () => {
  const { emotional } = calculationBiorhythms('1995-01-01', '2020-02-18');
  expect(emotional).toBeCloseTo(-0.9010);
});

it('calculates the intellectual biorhythm', () => {
  const { intellectual } = calculationBiorhythms('1995-01-01', '2020-02-18');
  expect(intellectual).toBeCloseTo(0.8146);
});
