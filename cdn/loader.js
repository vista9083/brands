(function () {
  const base = "https://vista9083.github.io/brands/images/";

  document.querySelectorAll("img[id]").forEach((img) => {
    const idRaw = img.id.trim();
    const id = idRaw.toLowerCase(); // Convert to lowercase

    const pngUrl = `${base}${id}.png`;
    const jpgUrl = `${base}${id}.jpg`;

    const tryLoad = (url, fallbackUrl) => {
      const testImg = new Image();
      testImg.onload = () => {
        img.src = url;
        console.log(`Loaded: ${url}`);
      };
      testImg.onerror = () => {
        if (fallbackUrl) {
          const fallbackImg = new Image();
          fallbackImg.onload = () => {
            img.src = fallbackUrl;
            console.log(`Fallback loaded: ${fallbackUrl}`);
          };
          fallbackImg.onerror = () => {
            console.warn(`Failed to load both: ${url} and fallback`);
          };
          fallbackImg.src = fallbackUrl;
        }
      };
      testImg.src = url;
    };

    tryLoad(pngUrl, jpgUrl);
  });
})();
