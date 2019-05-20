import React, { Component } from "react"

class API {
  static queryDB(query = "education") {
    return fetch("http://localhost:1337/api/censusDB?key=" + query).then(r =>
      r.json()
    )
  }
}

export default API
