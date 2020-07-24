import React, { Component } from "react"

class People extends Component {
  render() {
    /* console.log(this.props) */
    const { age, name } = this.props
    console.log(age, name)
    return (
      <div style={styles}>
        <h2>{name}</h2>
        <p>Age : {age}</p>
      </div>
    )
  }
}
const styles = {
  border: "1px solid #eee",
  width: "200px",
  marginLeft: "10px",
  boxShadow: "1px 1px 3px grey",
  padding: "20px",

  marginTop: "15px",
}
export default People
