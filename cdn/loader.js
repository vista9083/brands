(function () {
  const base = "https://cdn.jsdelivr.net/gh/vista9083/brands@main/images/";

  document.querySelectorAll("img[class^='br-']").forEach((img) => {
    const className = img.className.split(" ").find(cls => cls.startsWith("br-"));
    if (!className) return;

    const brand = className.slice(3).toLowerCase();
    const pngUrl = `${base}${brand}.png`;
    const jpgUrl = `${base}${brand}.jpg`;

    console.log(`Trying to load ${brand}:`, pngUrl, "→ fallback", jpgUrl);

    const tryLoad = (url, fallback) => {
      const testImg = new Image();
      testImg.onload = () => {
        console.log(`Loaded ${url}`);
        img.src = url;
      };
      testImg.onerror = () => {
        console.warn(`Failed to load ${url}`);
        if (fallback) fallback();
      };
      testImg.src = url;
    };

    tryLoad(pngUrl, () => tryLoad(jpgUrl));
  });
})();
