const path = require("path");
const readcode = require("./utils/readCode");
const planets = require("./exoplanetsData");

let code;
beforeAll(async () => {
  code = await readcode(path.resolve(__dirname, "../src/index.js"));
});

function getStudentCode(code, testData, testStar = { spectralClass: "M" }) {
  return code
    .replace(
      /const\s*?planet\s*?=\s*?require\(('|")\.\/data\/(exoplanetData|exoplanetData\.js)('|")\);/,
      "const planet = " + JSON.stringify(testData)
    )
    .replace(
      /const\s*?star\s*?=\s*?require\(('|")\.\/data\/(starData|starData\.js)('|")\);/,
      "const star =" + JSON.stringify(testStar)
    );
}

describe("#canHabitateLife", () => {
  it("should be defined", () => {
    const testData = planets.planetB;

    const testStudentCode = getStudentCode(code, testData);

    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(canHabitateLife).toBeDefined();
  });

  it("should be a Boolean", () => {
    const testData = planets.planetB;

    const testStudentCode = getStudentCode(code, testData);

    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(typeof canHabitateLife).toBe("boolean");
  });

  it("should return false for stars with spectral class O, B, A, F, G. ", () => {
    const planet = {
      mass: 1,
      radius: 1,
      rotationStability: true,
      habitalZone: true,
    };
    const stars = [
      { spectralClass: "A" },
      { spectralClass: "B" },
      { spectralClass: "F" },
      { spectralClass: "G" },
      { spectralClass: "O" },
    ];

    return stars.forEach((star) => {
      const testStudentCode = getStudentCode(code, planet, star);
      const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");
      expect(canHabitateLife).toBe(false);
    });
  });

  it("should return true for suitable planets and stars with spectral class K, M", () => {
    const planet = {
      mass: 1,
      radius: 1,
      rotationStability: true,
      habitalZone: true,
    };
    const stars = [{ spectralClass: "K" }, { spectralClass: "M" }];

    return stars.forEach((star) => {
      const testStudentCode = getStudentCode(code, planet, star);
      const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");
      expect(canHabitateLife).toBe(true);
    });
  });
});

describe("Planets' criteria with star of spectral classes K and M", () => {
  it("should return true for an Earth like planet", () => {
    const testData = {
      mass: 1,
      radius: 1,
      rotationStability: true,
      habitalZone: true,
    };
    const testStudentCode = getStudentCode(code, testData);
    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(canHabitateLife).toBe(true);
  });

  it("should return false a planet outside an habitable zone", () => {
    const testData = {
      mass: 1,
      radius: 1,
      rotationStability: true,
      habitalZone: false,
    };
    const testStudentCode = getStudentCode(code, testData);
    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(canHabitateLife).toBe(false);
  });

  it("should return false for a planet without a stable rotation", () => {
    const testData = {
      mass: 1,
      radius: 1,
      rotationStability: false,
      habitalZone: true,
    };
    const testStudentCode = getStudentCode(code, testData);
    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(canHabitateLife).toBe(false);
  });

  it("should return false for a planet with a radius <= 0.5", () => {
    const testData = {
      mass: 1,
      radius: 0.4,
      rotationStability: true,
      habitalZone: true,
    };
    const testStudentCode = getStudentCode(code, testData);
    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(canHabitateLife).toBe(false);
  });

  it("should return false for a planet with a radius >= 2.5", () => {
    const testData = {
      mass: 1,
      radius: 2.6,
      rotationStability: true,
      habitalZone: true,
    };
    const testStudentCode = getStudentCode(code, testData);
    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(canHabitateLife).toBe(false);
  });

  it("should return false for a planet with a mass >= 3", () => {
    const testData = {
      mass: 3.01,
      radius: 0.4,
      rotationStability: true,
      habitalZone: true,
    };
    const testStudentCode = getStudentCode(code, testData);
    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(canHabitateLife).toBe(false);
  });

  it("should return false for a planet with a mass < 0.5 and a radius < 1", () => {
    const testData = {
      mass: 0.4,
      radius: 0.6,
      rotationStability: true,
      habitalZone: true,
    };
    const testStudentCode = getStudentCode(code, testData);
    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(canHabitateLife).toBe(false);
  });

  it("should return true for a planet with a mass < 0.5 and a radius > 1", () => {
    const testData = {
      mass: 0.4,
      radius: 1.5,
      rotationStability: true,
      habitalZone: true,
    };
    const testStudentCode = getStudentCode(code, testData);
    const canHabitateLife = eval(testStudentCode + "; canHabitateLife;");

    expect(canHabitateLife).toBe(true);
  });
});
