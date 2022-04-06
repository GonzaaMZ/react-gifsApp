export const getGifs = async (category) => {

    const url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=nPo9YDMk0PqUTK9kzUlVi2HbHF16ZozW`;

    const resp = await fetch(url);

    const {data} = await resp.json();

     const gifs = data.map(img => {
         return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
         }
     })

     return gifs;
}