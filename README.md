# Notes Application

Notes tracker application made using Node.js

## Setup Steps

- Install the latest verion of Node.js on your system. You can find the installation guide at https://nodejs.org/en.

- Clone the repository and run `npm install` to install all the dependencies used in the project.

## Features

- Add notes
- Remove notes
- List all notes
- Read notes

## Available Scripts

### `node app.js add --title="note title" --body="note body"`

Adds your note with title and body provided to a JSON file.

Note: --title and --body arguments are required for adding the note !!

### `node app.js remove --title="note title"`

Removes the note from the JSON file matching with the title you provide.

Note: --title argument is required for removing the note !!

### `node app.js list`

Lists all the notes you created.

### `node app.js read --title="note title"`

Shows the note content matching with the title you provide.

Note: --title argument is required for reading the note !!
