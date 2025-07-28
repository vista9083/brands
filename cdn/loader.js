console.log("still working: 2");

(function () {
  const base = "https://vista9083.github.io/brands/images/";

  document.querySelectorAll("img[id]").forEach((img) => {
    const id = img.id.trim().toLowerCase();
    if (!id) return;

    const pngUrl = `${base}${id}.png`;
    const jpgUrl = `${base}${id}.jpg`;

    const tryLoad = (url, fallbackUrl) => {
      const testImg = new Image();
      testImg.onload = () => {
        console.log(`Loaded: ${url}`);
        img.src = url;
      };
      testImg.onerror = () => {
        if (fallbackUrl) {
          const fallbackImg = new Image();
          fallbackImg.onload = () => {
            console.log(`Fallback loaded: ${fallbackUrl}`);
            img.src = fallbackUrl;
          };
          fallbackImg.onerror = () => {
            console.warn(`Failed to load both ${url} and fallback`);
          };
          fallbackImg.src = fallbackUrl;
        }
      };
      testImg.src = url;
    };

    tryLoad(pngUrl, jpgUrl);
  });
})();
