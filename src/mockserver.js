import { createServer } from "miragejs";

// import React from 'react'

function mockServer() {

  let server = createServer(
      {
          routes(){
                this.urlPrefix = "https://www.testdomain.com";
                this.namespace = "/v1/api"
                this.timing = 5000

                this.get("/books", () => {
                    return [
                        {title: "L'Écume des jours", author: "Boris Vian", year: 1947},
                        {title: "Utas és holdvilág", author: "Szerb Antal", year: 1937},
                        {title: "Megyek utánad", author: "Grecsó Krisztián", year: 2014}


                    ]
                })
          }
      }
  )

  return server

}

export default mockServer