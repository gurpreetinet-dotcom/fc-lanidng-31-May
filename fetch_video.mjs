import fs from "fs";

async function fetchVideo() {
  try {
    const res = await fetch("https://www.instagram.com/p/DZFDNR_y142/embed/?cr=1&v=14&wp=656&rd=https%3A%2F%2Fwww.instagram.com");
    const html = await res.text();
    // Look for video_url
    const match = html.match(/"video_url":"([^"]+)"/);
    if (match) {
        let url = match[1].replace(/\\u0026/g, "&");
        console.log("Found URL:", url.substring(0, 50));
        const vRes = await fetch(url);
        const buffer = await vRes.arrayBuffer();
        fs.writeFileSync("src/assets/images/reel1.mp4", Buffer.from(buffer));
        console.log("Saved video to src/assets/images/reel1.mp4");
    } else {
        console.log("No video URL found");
    }
  } catch (e) {
    console.error(e);
  }
}

fetchVideo();
