// Image Fetching Function
// We have a function that retrieves an image and returns a blob.
// Using Promise.any(), we fetch multiple images and display the first one
// that becomes available (i.e., the promise that resolves first).

async function fetchImageAndDecode(url, description) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`failed! status: ${res.status}`);
  }
  const data = await res.blob();
  return [data, description];
}

const coffee = fetchImageAndDecode("glass.png", "Glass");
const tea = fetchImageAndDecode("flower.png", "Flower");

Promise.any([glass, flower])
  .then(([blob, description]) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    image.alt = description;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.error(e);
  });
