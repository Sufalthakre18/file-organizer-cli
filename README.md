# 📂 File Organizer CLI Tool

## 🧩 Problem 

Over time, folders like **Downloads** or **Documents** become cluttered with different types of files such as images, PDFs, videos, audio files, and code files.
Manually organizing these files into folders is repetitive and time-consuming.

I personally faced this issue on my system, so I built a **command-line utility** that automatically organizes files in a given directory into categorized folders based on file type.

---


## Demo video
[Demo](https://www.youtube.com/watch?v=kARk33K5XcU)


## 🚀 What This Tool Does

* Takes a folder path as input from the command line
* Scans all files in that folder
* Creates category folders such as:

  * Images
  * Documents
  * Videos
  * Audio
  * Archives
  * Code
  * Others
* Moves files into their respective folders
* Skips existing directories to avoid unwanted changes
* Works safely only on the provided folder

---

## 🛠️ Tech Stack

* **Node.js**
* **JavaScript (ES Modules)**
* Built-in Node modules only:

  * `fs`
  * `path`

---

## 📦 Project Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sufalthakre18/file-organizer-cli.git
cd file-organizer-cli
```

### 2️⃣ Install dependencies

No external dependencies are required, but initialize the Node environment:

```bash
npm install
```

---

## ▶️ How to Run the Program

### Using npm (recommended)

#### Windows

```bash
npm run start -- "D:\\test"
```

#### Linux / macOS

```bash
npm run start -- ~/Downloads
```

### Using Node directly

```bash
node organizer.js <folder-path>
```

Example:

```bash
node organizer.js ./Downloads
```

---

## 📌 Example Output

```
Organizing files in: D:\test
Moved: resume.pdf → Documents/
Moved: image1.png → Images/
Moved: song.mp3 → Audio/

Organization complete!
Total files moved: 3
```

---
* A **command-line interface** was chosen for simplicity, speed, and automation-friendly usage.
---
## Conclusion

This project demonstrates my understanding of:

* File system operations
* Command-line utilities
* Clean and safe coding practices
* Problem-solving using core JavaScript and Node.js
