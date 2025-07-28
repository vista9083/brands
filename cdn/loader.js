console.log("working");

(function () {
  const base = "https://vista9083.github.io/brands/images/";

  document.querySelectorAll("img[class^='br-']").forEach((img) => {
    const className = img.className.split(" ").find(cls => cls.startsWith("br-"));
    if (!className) return;

    const brand = className.slice(3).toLowerCase();
    const pngUrl = `${base}${brand}.png`;
    const jpgUrl = `${base}${brand}.jpg`;

    const tryLoad = (url, fallbackUrl) => {
      const testImg = new Image();
      testImg.onload = () => {
        console.log(`Loaded ${url}`);
        img.src = url;
      };
      testImg.onerror = () => {
        console.warn(`Failed: ${url}`);
        if (fallbackUrl) {
          const fallbackImg = new Image();
          fallbackImg.onload = () => {
            console.log(`Fallback loaded: ${fallbackUrl}`);
            img.src = fallbackUrl;
          };
          fallbackImg.onerror = () => {
            console.error(`Both ${url} and fallback failed`);
          };
          fallbackImg.src = fallbackUrl;
        }
      };
      testImg.src = url;
    };

    tryLoad(pngUrl, jpgUrl);
  });
})();
