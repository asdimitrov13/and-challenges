export const challenge = (startText) => {
  let text = startText;
  let clipboard = "";
  let commandIndex = findFirstCommand(text);
  while (commandIndex !== -1) {
    const commandType = text.charAt(commandIndex + 6);

    text = text.replace(text.substring(commandIndex, commandIndex + 8), "");

    if (commandType === "C") {
      clipboard = text.substring(0, commandIndex);
      console.log("copying");
      console.log(clipboard);
    } else if (commandType === "X") {
      clipboard = text.substring(0, commandIndex);
      text = text.substring(commandIndex);
    } else {
      text = `${text.slice(0, commandIndex)}${clipboard}${text.slice(
        commandIndex
      )}`;
    }

    commandIndex = findFirstCommand(text);
  }

  return text;
};

export const findFirstCommand = (text) => {
  const copyCommand = "[CTRL+C]";
  const cutCommand = "[CTRL+X]";
  const pasteCommand = "[CTRL+V]";

  const copyIndex = text.search(
    copyCommand.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  );
  const cutIndex = text.search(
    cutCommand.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  );
  const pasteIndex = text.search(
    pasteCommand.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  );
  const found = [copyIndex, cutIndex, pasteIndex].filter((val) => val >= 0);
  return !found.length ? -1 : Math.min(...found);
};
