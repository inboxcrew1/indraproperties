const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.next') files = files.concat(walk(full));
    } else if (f === 'page.tsx' || f === 'layout.tsx') {
      files.push(full);
    }
  }
  return files;
}

const files = walk('./src/app');
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/title:\s*['"]([^'"]+)['"]/);
  if (m) {
    console.log(f, '=>', m[1]);
  }
});
