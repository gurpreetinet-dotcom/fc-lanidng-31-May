import youtubedl from 'youtube-dl-exec';

const reels = [
  { id: 2, url: 'https://www.instagram.com/reel/DYo02oZyqcP/' },
  { id: 3, url: 'https://www.instagram.com/reel/DSjfYSskvhZ/' },
  { id: 4, url: 'https://www.instagram.com/reel/DPYE7p4gKPG/' }
];

async function run() {
  for (const reel of reels) {
    try {
      console.log(`Downloading reel ${reel.id}...`);
      await youtubedl(reel.url, {
        output: `src/assets/images/reel${reel.id}.mp4`
      });
      console.log(`Done reel ${reel.id}`);
    } catch (e) {
      console.error(`Failed reel ${reel.id}:`, e.message);
    }
  }
}

run();
