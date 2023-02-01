import { challenge, findFirstCommand } from "./index";

describe("January challenge", () => {
  describe("Command detector (find first command in text)", () => {
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

  describe("Text transformer (solution): ", () => {
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

  describe("real data", () => {
    it("line 1", () => {
      const result = challenge(
        "the big red[CTRL+C] fox jumps over [CTRL+V] lazy dog."
      );

      expect(result).toBe("the big red fox jumps over the big red lazy dog.");
    });

    it("line 2", () => {
      const result = challenge(
        "[CTRL+V]the tall oak tree towers over the lush green meadow."
      );

      expect(result).toBe(
        "the tall oak tree towers over the lush green meadow."
      );
    });

    it("line 3", () => {
      const result = challenge(
        "the sun shines down[CTRL+C] on [CTRL+V][CTRL+C] the busy [CTRL+V]."
      );

      expect(result).toBe(
        "the sun shines down on the sun shines down the busy the sun shines down on the sun shines down."
      );
    });

    it("line 4", () => {
      const result = challenge(
        "[CTRL+V]the tall oak tree towers over the lush green meadow."
      );

      expect(result).toBe(
        "the tall oak tree towers over the lush green meadow."
      );
    });

    it("line 5", () => {
      const result = challenge(
        "a majestic lion[CTRL+C] searches for [CTRL+V] in the tall grass."
      );

      expect(result).toBe(
        "a majestic lion searches for a majestic lion in the tall grass."
      );
    });

    it("line 6", () => {
      const result = challenge(
        "the shimmering star[CTRL+X]Twinkling in the dark, [CTRL+V] shines bright."
      );

      expect(result).toBe(
        "Twinkling in the dark, the shimmering star shines bright."
      );
    });

    it("line 7", () => {
      const result = challenge(
        "[CTRL+X]a fluffy white cloud drifts [CTRL+V][CTRL+C] across the sky, [CTRL+V]"
      );

      expect(result).toBe(
        "a fluffy white cloud drifts  across the sky, a fluffy white cloud drifts "
      );
    });
  });
});
