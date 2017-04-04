
const args = [ 'server.js' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('node', args, opts);
