import { log } from 'console';
import fs from 'fs'
import path from 'path'

// take folder

const targetFolder = process.argv[2] // node organizer.js folder

if (!targetFolder) {
    console.log("please enter folder in command");
    console.log("Comand should be : node start -- <folder name>");
    process.exit(1)
}

// path to absolute path
const absoluteFolder = path.resolve(targetFolder)

if (!fs.existsSync(absoluteFolder)) {
    console.log("The folder is not exist. Please provide exist folder");
    process.exit(1)
}

const fileType = {
    Images: [".jpg", ".jpeg", ".png", ".gif"],
    Documents: [".pdf", ".docx", ".txt"],
    Videos: [".mp4", ".mkv"],
    Audio: [".mp3", ".wav"],
    Archives: [".zip", ".rar"],
    Code: [".js", ".html", ".css"]
}

// get category name
function getCategoryName(extension){
    for(const category in fileType){
        if(fileType[category].includes(extension)) return category;
    }
    return "Others";
}


// read all items from the folder
const allfilesFromFolder=fs.readdirSync(absoluteFolder)
let moveFileCount=0;

allfilesFromFolder.forEach((file)=>{
    const filePath=path.join(absoluteFolder,file)
    if(fs.lstatSync(filePath).isDirectory()) return;

    const extensionName= path.extname(file).toLowerCase();
    const categoryName= getCategoryName(extensionName)

    const categoryFolderPath=path.join(absoluteFolder,categoryName)
    if(!fs.existsSync(categoryFolderPath)){
        fs.mkdirSync(categoryFolderPath);
    }

    const destinationPath=path.join(categoryFolderPath,file)

    // move file from old path to new path
    try {
        fs.renameSync(filePath,destinationPath)
        moveFileCount++
        console.log(`Moved: ${file} → ${categoryName}/`);
    } catch (error) {
        console.log(error.message);
        console.log(`Could not move file: ${file}`);
    }

})


console.log("\n Organization complete!");
console.log(`Total files moved: ${movedCount}`);