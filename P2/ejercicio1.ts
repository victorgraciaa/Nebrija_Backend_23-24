export interface ResponseData {
  data: cuota[]  
}

type cuota = {
  quoteGenre:string
  quoteAuthor:string
  quoteText:string
}

const fetchData = async () => {
  try {

    const response = await fetch(
      "https://quote-garden.onrender.com/api/v3/quotes"
    );

    const data: ResponseData = await response.json();

    data.data.forEach(elem => {
        console.log("---------------------------------")
        console.log("\nGenero: "+elem.quoteGenre+" Autor: "+elem.quoteAuthor+" Quote: "+elem.quoteText+"\n")
      })
      
  } catch (error) {
    console.log(error);
  }
};

await fetchData();

