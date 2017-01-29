import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    this.props.getSunData();
  }

  getLocalInfo() {
    this.props.getLocalInfo()
  }

  render() {
    const { sunData } = this.props;
    return (
      <section className="App">
        <header>
          <p>Sunrise: { sunData ? sunData.sunrise : 'Loading...' } </p>
          <p>Sunset: { sunData ? sunData.sunset : 'Loading...' } </p>
        </header>

        <button onClick={() => this.getLocalInfo()}>Click Me</button>
      </section>
    )
  }
}

export default App;
