(function () {
  const repo = "https://cdn.jsdelivr.net/gh/YOUR_USERNAME/brand-icons-cdn@main/images/";

  document.querySelectorAll("img[class^='br-']").forEach((img) => {
    const brand = img.className.split(" ").find(cls => cls.startsWith("br-"))?.slice(3);
    
    if (brand) {
      const url = `${repo}${brand.toLowerCase()}.png`;
      img.src = url;
    }
  });
})();