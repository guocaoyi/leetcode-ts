import { rgb2hex } from "./rgb2hex";

describe("rgb2hex", () => {
  it("rgb(255,255,255) > #ffffff", () => {
    expect(rgb2hex("rgb(255,255,255)")).toMatch("#ffffff");
  });

  it("rgb(1,1,1) > #010101", () => {
    expect(rgb2hex("rgb(1,1,1)")).toMatch("#010101");
  });

  it("rgb(1,255,1) > #01ff01", () => {
    expect(rgb2hex("rgb(1,255,1)")).toMatch("#01ff01");
  });

  it("rgb(17,17,17) > #111111", () => {
    expect(rgb2hex("rgb(17,17,17)")).toMatch("#111111");
  });

  it("rgb(12,12,12) > #ccc", () => {
    expect(rgb2hex("rgb(12,12,12)")).toMatch("#ccc");
  });
});
