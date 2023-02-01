import { challenge, findFirstCommand } from "./index";

describe("January challenge", () => {
  describe("Command detector", () => {
    it("single command", () => {
      const text = "ABC [CTRL+C] asd";

      expect(findFirstCommand(text)).toBe(4);
    });

    it("two commands", () => {
      const text = "ABCD [CTRL+V] asd [CTRL+C]";

      expect(findFirstCommand(text)).toBe(5);
    });

    it("three commands", () => {
      const text = "ABCD bla bla [CTRL+X] asd [CTRL+V] testing [CTRL+C]";

      expect(findFirstCommand(text)).toBe(13);
    });

    it("no commands", () => {
      const text = "ABCD bla bla asd testing";

      expect(findFirstCommand(text)).toBe(-1);
    });
  });

  describe("Text transformer: ", () => {
    it("one copy one paste", () => {
      const result = challenge(
        "the first[CTRL+C] Coding Challenge was [CTRL+V] string manipulation task"
      );
      expect(result).toBe(
        "the first Coding Challenge was the first string manipulation task"
      );
    });

    it("copy paste cut paste", () => {
      const result = challenge(
        "the first[CTRL+C] Coding Challenge was [CTRL+V] string manipulation task[CTRL+X]repeat: [CTRL+V]"
      );
      expect(result).toBe(
        "repeat: the first Coding Challenge was the first string manipulation task"
      );
    });

    it("no commands", () => {
      const result = challenge(
        "the first Coding Challenge was string manipulation task"
      );
      expect(result).toBe(
        "the first Coding Challenge was string manipulation task"
      );
    });
  });
});
