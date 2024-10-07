import fs from "fs";
import path from "path";

// Get arguments from the command line
const [type, folderName, fileName, compName] = process.argv.slice(2);

// Validate input
if (!type || !folderName || !fileName) {
  console.error(
    "Usage: node create-react-file.js <type> <folderName> <fileName>",
  );
  process.exit(1);
}

// Determine if type is "page" or "component"
const folderType = type === "page" ? "pages" : "components";

// Construct the folder path
const folderPath = path.join(process.cwd(), "src", folderType, folderName);

// Create the folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log(`Folder ${folderPath} created.`);
} else {
  console.log(`Folder ${folderPath} already exists.`);
}

// Construct the file path
const filePath = path.join(folderPath, `${fileName}.tsx`);

// Create the file if it doesn't exist
let name = compName ? compName : fileName;
if (!fs.existsSync(filePath)) {
  const fileContent = `
import React from 'react';
import './style.css';

const ${name.charAt(0).toUpperCase() + name.slice(1)} = () => {
    return (
        <div>
            ${name.charAt(0).toUpperCase() + name.slice(1)} component
        </div>
    );
};

export default ${name.charAt(0).toUpperCase() + name.slice(1)};
    `.trim();
  fs.writeFileSync(filePath, fileContent);
  console.log(`File ${filePath} created.`);
} else {
  console.log(`File ${filePath} already exists.`);
}
