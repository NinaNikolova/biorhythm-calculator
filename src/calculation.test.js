import { calculateBiorhythms } from "./calculation";

describe("calculateBiorhythms", () => {
  it("should calculate biorhythms correctly", () => {
    const birthDate = new Date("1995-01-01");
    const targetDate = new Date("2020-02-18");
    const result = calculateBiorhythms(birthDate, targetDate);
    // Test each property individually with toBeCloseTo
    expect(result.physical).toBeCloseTo(0.5196, 4);
    expect(result.emotional).toBeCloseTo(-0.9010, 4);
    expect(result.intellectual).toBeCloseTo(0.8146, 4);
  });
});
