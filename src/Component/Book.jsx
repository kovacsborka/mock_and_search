import React, { useState } from 'react'
import Button from '@mui/material/Button';



function Book({title, author, year}) {
    const [details, setDetails] = useState(false)


  return (
    <div>
        <h2>{title}</h2>
        { details &&
        <>
        <h3>{author}</h3>
        <h4>{year}</h4>
        </> 
        }   

        <Button variant="outlined" onClick={ () => { 
            setDetails(!details)
        }}>{details ? "Hide details" : "Show Details"}</Button>
    </div>
  )
}
{/* <button >{details ? "Hide details" : "Show Details"}</button> */}

export default Book