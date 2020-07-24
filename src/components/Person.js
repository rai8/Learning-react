import React from "react"

const Person = (props) => {
  return (
    <div style={styles}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  )
}
const styles = {
  border: "1px solid #eee",
  width: "200px",
  marginLeft: "10px",
  boxShadow: "1px 1px 3px grey",
  padding: "20px",

  marginTop: "15px",
}
export default Person
