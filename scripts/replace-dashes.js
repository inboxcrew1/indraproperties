const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        files = files.concat(walk(full));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json') || file.endsWith('.md')) {
      files.push(full);
    }
  });
  return files;
}

const allFiles = walk('./src');

let count = 0;
allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace em-dash in titles specifically
  content = content.replace(/GharDhundo\s*—\s*/g, 'GharDhundo | ');
  content = content.replace(/GharDhundo\s*–\s*/g, 'GharDhundo | ');
  
  // Replace remaining em dash \u2014 with " - "
  content = content.replace(/—/g, ' - ');
  
  // Replace en dash \u2013 with "-"
  content = content.replace(/–/g, '-');

  // Clean up double spaces if any
  content = content.replace(/  - /g, ' - ');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Cleaned dashes in:', file);
    count++;
  }
});

console.log(`Finished replacing dashes in ${count} files.`);
