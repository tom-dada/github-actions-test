import { sum } from "./sum";
 
describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
 
  it("adds 5 + 7 to equal 12", () => {
    expect(sum(5, 7)).toBe(12);
  });
 
  it("adds -1 + 2 to equal 1", () => {
    expect(sum(-1, 2)).toBe(1);
  });
 
  it("adds 0 + 0 to equal 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});