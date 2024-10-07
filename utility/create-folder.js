// create-page-folder.js
import fs from "node:fs";
import path from "node:path";

// Get the type (page or component) and the folder name from the command line arguments
const type = process.argv[2]; // 'page' or 'component'
const folderName = process.argv[3]; // name of the folder

if (!type || !folderName) {
  console.error("Please provide both type (page/component) and folder name.");
  process.exit(1);
}

const validTypes = ["page", "component"];
if (!validTypes.includes(type)) {
  console.error(
    `Invalid type: ${type}. It must be either 'page' or 'component'.`,
  );
  process.exit(1);
}

// Determine the base path depending on the type
const basePath = type === "page" ? "src/pages" : "src/components";
const fullPath = path.join(basePath, folderName);

// Create the folder if it doesn't exist
if (!fs.existsSync(fullPath)) {
  fs.mkdirSync(fullPath, { recursive: true });
  console.log(
    `${type.charAt(0).toUpperCase() + type.slice(1)} folder "${folderName}" created successfully in ${basePath}.`,
  );
  let stylePath = path.join(basePath, folderName, "style.css");
  console.log(`Stylesheet created successfully`);
  fs.writeFileSync(stylePath, "".trim());
} else {
  console.error(`Folder "${folderName}" already exists in ${basePath}.`);
}
