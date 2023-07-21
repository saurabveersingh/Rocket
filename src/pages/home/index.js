import "./style.css"

const Home = () => {
  const launchRedirect = (e) => {
    e.preventDefault()
    let element = document.getElementById("prisoner")
    if (element.value) {
      window.location.href = "/launch"
    } else {
      alert("Prisinor Name Required!")
    }
  }

  return (
    <div className="App">
      <header className="App-header">If someone offends you. Send them to the gassious abyss of Jupiter</header>
      <form className="App-form">
        <label className="App-label">Enter the criminal's name!</label>
        <input id={"prisoner"} className="App-input" type={"text"} required />
        <button className="App-button" onClick={launchRedirect}>
          GO!
        </button>
      </form>
    </div>
  )
}

export default Home
