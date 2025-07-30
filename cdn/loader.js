(function () {
  const base = "https://vista9083.github.io/brands/images/";

  document.querySelectorAll("img[id]").forEach((img) => {
    const originalId = img.id.trim();
    const id = originalId.toLowerCase();

    const urls = [
      `${base}${id}.png`,
      `${base}${id}.jpg`,
      `${base}${originalId}.png`,
      `${base}${originalId}.jpg`
    ];

    const tryUrls = (index = 0) => {
      if (index >= urls.length) {
        console.warn(`No image found for id="${originalId}"`);
        return;
      }

      const url = urls[index];
      const testImg = new Image();
      testImg.onload = () => {
        img.src = url;
        console.log(`Loaded: ${url}`);
      };
      testImg.onerror = () => {
        tryUrls(index + 1);
      };
      testImg.src = url;
    };

    tryUrls();
  });
})();
