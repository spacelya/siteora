import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml'};
http.createServer(async (req,res) => { try { const url = new URL(req.url,'http://localhost'); let name = decodeURIComponent(url.pathname); if(name.endsWith('/')) name += 'index.html'; const file = path.resolve(root,'.'+name); if(!file.startsWith(root+path.sep)) throw Error('Invalid path'); const data = await fs.readFile(file); res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'}); res.end(data); } catch { res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'}); res.end(await fs.readFile(path.join(root,'404.html'))); } }).listen(4173,'127.0.0.1',()=>console.log('Local: http://localhost:4173'));
