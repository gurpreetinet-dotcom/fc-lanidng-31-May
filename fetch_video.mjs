import fs from "fs";

async function fetchVideo() {
  try {
    const res = await fetch("https://api.cobalt.tools/api/json", {
      method: "POST",
      headers: {
        "Accept": "application/json",
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: "https://www.instagram.com/reel/DYo02oZyqcP/",
        filenamePattern: "classic"
      })
    });
    const json = await res.json();
    console.log("Cobalt response: ", json);

    if (json.url) {
        console.log("Downloading from cobalt URL:", json.url);
        const vRes = await fetch(json.url);
        const buffer = await vRes.arrayBuffer();
        fs.writeFileSync("public/reel2.mp4", Buffer.from(buffer));
        console.log("Saved video to public/reel2.mp4");
    }
    
    // Also update thumbnail from the HTML
    const htmlRes = await fetch("https://www.instagram.com/p/DYo02oZyqcP/embed/?cr=1&v=14");
    const html = await htmlRes.text();
    const thumbMatch = html.match(/class=\\"FirstFrame\\"[^>]*src=\\"([^\\"]+)\\"/);
    if (thumbMatch) {
        let tUrl = thumbMatch[1].replace(/&amp;/g, "&");
        const tRes = await fetch(tUrl);
        fs.writeFileSync("public/reel2-thumb.jpg", Buffer.from(await tRes.arrayBuffer()));
        console.log("Saved thumbnail to public/reel2-thumb.jpg");
    } else {
        const m2 = html.match(/src=\\"(https:\/\/scontent[^\\"]+.(jpg|jpeg)[^\\"]*)\\"/);
         if (m2) {
             let url = m2[1].replace(/&amp;/g, "&");
             const r2 = await fetch(url);
             fs.writeFileSync("public/reel2-thumb.jpg", Buffer.from(await r2.arrayBuffer()));
             console.log("Saved pub/reel2-thumb.jpg");
         } else {
             console.log("no thumb match for DYo02oZyqcP");
         }
    }
  } catch (e) {
    console.error(e);
  }
}

fetchVideo();
