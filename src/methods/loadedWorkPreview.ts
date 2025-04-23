import { Images } from "@/store/portfolio";

function loadedWorkPreview(images: Images[]): Promise<boolean> {
  if (images.length === 0) {
    return Promise.resolve(true);
  }

  return Promise.all(
    images.map((imageObj) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = imageObj.img;

        if (img.complete) {
          resolve(true);
          return;
        }

        img.onload = () => resolve(true);
        img.onerror = () => resolve(true);
      });
    })
  ).then(() => true);
}

export default loadedWorkPreview;
