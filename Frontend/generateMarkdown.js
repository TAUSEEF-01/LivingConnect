const fs = require('fs');
const path = require('path');

const imageDir = './assets/project_images';
const outputMarkdown = './README_Image_Section.md';

// Ensure the directory exists
if (fs.existsSync(imageDir)) {
  const imageFiles = fs.readdirSync(imageDir).filter(file =>
    ['.png', '.jpg', '.jpeg', '.gif', '.svg'].includes(path.extname(file))
  );

  let markdownContent = '### **Project Images 📸**\n\n';
  
  imageFiles.forEach(image => {
    markdownContent += `![${path.basename(image, path.extname(image))}](assets/project_images/${image})\n\n`;
  });

  // Write the Markdown content to a file
  fs.writeFileSync(outputMarkdown, markdownContent);
  console.log(`Markdown content generated in ${outputMarkdown}`);
} else {
  console.error(`Directory ${imageDir} does not exist.`);
}
