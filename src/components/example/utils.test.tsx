import { fullNameReversed, yearsSince } from "./utils";


describe("yearsSince", () => {
    it("should return the correct age", () => {
        const date = new Date("1990-01-01");
        const age = yearsSince(date);
        expect(age).toBe(32);
    });
});


describe("fullNameReversed", () => {
    it("should return the correct name", () => {
        const name = fullNameReversed("John", "Doe");
        expect(name).toBe("eoD nhoJ");
    });
});