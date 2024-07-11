export async function fetchParams(item) {
  const API_KEY = '44790874-b72b714502b79af1442269c5d';
  const response = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${item}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;

  //   return fetch(
  //     `https://pixabay.com/api/?key=${API_KEY}&q=${item}&image_type=photo&orientation=horizontal&safesearch=true`
  //   ).then(res => {
  //     if (!res.ok) {
  //       throw new Error(res.status);
  //     }
  //     return res.json();
  //   });
}
