const fs = require('fs');
const report = JSON.parse(fs.readFileSync('./eslint_report.json', 'utf8'));
let out = '';
report.forEach(f => {
  if (f.errorCount > 0 || f.warningCount > 0) {
    out += `FILE: ${f.filePath}\n`;
    f.messages.forEach(m => {
      out += `  Line ${m.line}:${m.column} [${m.severity === 2 ? 'ERROR' : 'WARN'}] ${m.message} (${m.ruleId})\n`;
    });
    out += '\n';
  }
});
fs.writeFileSync('./eslint_errors.txt', out);
