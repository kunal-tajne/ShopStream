const importAll = (r) => r.keys().map(r);

const imagesContext = require.context("./Banner", false, /\.(jpg|jpeg|png|svg|webp)$/);

const images = importAll(imagesContext);

export const banner= {
    Banner1 : images[0],
    Banner2 : images[1],
    Banner3 : images[2],
    Banner4 : images[3]
}