const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const strFY = dataBuffer.toString();

    return JSON.parse(strFY);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const strFy = JSON.stringify(notes);
  fs.writeFileSync("notes.json", strFy);
};

const addNotes = (title, body) => {
  const notesData = loadNotes();
  const duplicateNotes = notesData?.find((item) => item?.title === title);

  if (!duplicateNotes) {
    notesData.push({
      title: title,
      body: body,
    });

    saveNotes(notesData);
    console.log(chalk.green.bold("New note added :)"));
  } else {
    console.log(chalk.red.bold("Note's title already taken :("));
  }
};

const removeNotes = (title) => {
  const notesData = loadNotes();
  const filterNotes = notesData?.filter((item) => item?.title !== title);

  if (notesData.length > filterNotes.length) {
    console.log(chalk.bgGreen("Note removed successfully :)"));
    saveNotes(filterNotes);
  } else {
    console.log(chalk.bgRed("No note found with this title :("));
  }
};

const listNotes = () => {
  const notesData = loadNotes();

  if (notesData?.length > 0) {
    console.log(chalk.yellow.bold("Your notes..."));
    notesData.forEach((note) => console.log(chalk.green(note?.title)));
  } else {
    console.log(chalk.bgRed.bold("No notes found :("));
  }
};

const readNotes = (title) => {
  const notesData = loadNotes();
  const note = notesData?.find((item) => item?.title === title);

  if (note) {
    console.log(
      chalk.green.bold(note?.title) + " -> " + chalk.blue(note?.body)
    );
  } else {
    console.log(chalk.red.bold("No note found with this title :("));
  }
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
