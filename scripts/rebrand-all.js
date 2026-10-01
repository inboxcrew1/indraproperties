const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

const targetDirs = [
  path.join(__dirname, '..', 'src', 'app'),
  path.join(__dirname, '..', 'src', 'components'),
];

let replacedFilesCount = 0;

targetDirs.forEach((targetDir) => {
  walkDir(targetDir, (filePath) => {
    if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx') && !filePath.endsWith('.json')) {
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    if (content.includes('GharDhundo') || content.includes('ghardhundo') || content.includes('ghardhundo.in')) {
      content = content
        .replace(/support@ghardhundo\.in/g, 'contact@indraproperties.com')
        .replace(/https:\/\/ghardhundo\.in/g, 'https://indraproperties.com')
        .replace(/ghardhundo\.in/g, 'indraproperties.com')
        .replace(/GharDhundo/g, 'Indra Properties & Enterprises')
        .replace(/ghardhundo_custom_properties/g, 'indra_custom_properties')
        .replace(/ghardhundo_enquiries/g, 'indra_enquiries')
        .replace(/ghardhundo_saved/g, 'indra_saved')
        .replace(/ghardhundo_compare/g, 'indra_compare');
      hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      replacedFilesCount++;
      console.log('Rebranded:', filePath);
    }
  });
});

console.log(`Successfully rebranded ${replacedFilesCount} files!`);
