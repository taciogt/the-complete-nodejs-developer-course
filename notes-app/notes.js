const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep)
        console.log(chalk.black.bgGreen("Note removed!"))
    } else {
        console.log(chalk.black.bgRed("No note found!"))
    }
}

const listNotes = () => {
    console.log(chalk.yellow('Your notes:'))
    loadNotes().forEach((note) => {
        console.log('- ' + note.title)
    })
}

const readNote = (title) => {
    const note = loadNotes().find((note) => note.title === title)
    if (note !== undefined) {
        console.log(chalk.yellowBright(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Note '" + title + "' not found!"))
    }
}

const notesFilePath = 'notes.json'

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(notesFilePath, dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(notesFilePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}