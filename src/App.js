import React, {useState, useEffect} from "react"

export default function App(){

  const [quotes, setQuotes] = useState({
    anime: 'Loding.......',
    character: 'Loding.......',
    quote: 'Loding.......'
  })
  const [count, setCount] = useState(0)

  console.log(quotes)

  useEffect(()=>{
    console.log("effect ran")
    async function getQuote(){
      const response = await fetch('https://animechan.vercel.app/api/random')
      const quote = await response.json()
      setQuotes(quote)
    }
    getQuote()
    // fetch('https://animechan.vercel.app/api/random')
    // .then(response => response.json())
    // .then(quote => setQuotes(quote))
  }, [count])

  function generateQuote(){
    setCount(prevCount => prevCount + 1)
  }

  return <div className="wrapper min-h-screen w-full bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center p-5">
    <div className="quote-container text-center bg-gray-200 p-7 rounded-md max-w-xl w-full shadow-2xl">
          <h1 className="mb-4 text-4xl font-bold">{quotes.anime}</h1>
          <h2 className="mb-4 text-xl font-semibold text-purple-700">{quotes.character}</h2>
          <p className="mb-4 text-lg text-gray-600">{quotes.quote}</p>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4" onClick={generateQuote}>
            Generate</button>
          <div><strong>Quotes Generated : </strong> <span>{count}</span></div>
    </div>
  </div>
}