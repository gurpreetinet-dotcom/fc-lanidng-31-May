import fs from 'fs';

async function fetchVideo(id: string, code: string) {
  try {
    const res = await fetch(`https://www.instagram.com/p/${code}/embed/`);
    const html = await res.text();
    const pattern = /\\"video_url\\":\\"([^\\"]+)\\"/;
    const match = html.match(pattern);
    if (match) {
      let url = match[1].split('\\/').join('/');
      // also handle extra backslashes if any
      url = url.split('\\\\/').join('/');
      url = url.split('\\u0026').join('&');
      
      const vRes = await fetch(url);
      const buffer = await vRes.arrayBuffer();
      fs.writeFileSync(`src/assets/images/reel${id}.mp4`, Buffer.from(buffer));
      console.log(`Saved reel ${id}`);
    } else {
      console.log(`No match for reel ${id}`);
    }
  } catch (err) {
    console.error(`Error for reel ${id}:`, err);
  }
}

async function run() {
  await fetchVideo('2', 'DYo02oZyqcP');
  await fetchVideo('3', 'DSjfYSskvhZ');
  await fetchVideo('4', 'DPYE7p4gKPG');
}
run();
