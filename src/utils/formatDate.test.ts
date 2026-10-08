import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("formats an ISO date as a UK date", () => {
    expect(formatDate("2025-07-10")).toBe("10 July 2025");
  });
});
