import { useEffect, useState } from "react";
import LoadingMask from "./Component/LoadingMask"
import Book from "./Component/Book"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function App() {

  const [loading, setLoading] = useState(false)
  
  const [books, setBooks] = useState([])

  const [input, setInput] = useState("")

  const [sort, setSort] = useState("desc")
  
  async function fetchBooks() {

    const response = await fetch("https://www.testdomain.com/v1/api/books")

    const responseJSON = await response.json()

    console.log(responseJSON);

    setBooks(responseJSON)
    setLoading(false)

    // console.log(books);


  }

  const sortBooks = () => {
    setBooks([...books.sort((a, b) => sort === "desc" ? b.year - a.year : a.year - b.year)])
    setSort(sort === "desc" ? "asc" : "desc")
  }

  
  useEffect( () => {
    setLoading(true)
    fetchBooks()
  },
  []
  )

  // books.map(book => <div>{book.title}, {book.author}, {book.year}   

  return (
    <div className="App">
      {loading ? < LoadingMask /> : 
      <>
        <Button variant="contained" onClick={sortBooks}>Contained</Button>
        <TextField id="outlined-basic" label="Search..." variant="outlined" value={input} onChange={ ({target}) => setInput(target.value)} />

        {books.map( ({title, author, year}) => (title.toLowerCase().includes(input.toLowerCase())) && < Book key={year} title={title} author={author} year={year} /> )}
      </>
      }
    </div>
  );
}
{/* <input placeholder="Search..." value={input} onChange={ ({target}) => setInput(target.value)} /> */}

export default App;
