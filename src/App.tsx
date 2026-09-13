
import MNIST from "./mnist"

function App() {
  return (
    <div className='container'>
      <div className='description'>
        <h1>React MNIST</h1>
        <text><a href="https://en.wikipedia.org/wiki/MNIST_database" target="_blank">MNIST</a> is a large database of handwritten digits from 0 to 9. It is commonly used for training purposes of various image preprocessing systems.</text>
        <text>To test the machine learning model trained with MNIST, <b>you can draw a digit on the black board.</b></text>
        <text style={{ color: "lightgray", fontSize: 10 }}>The model is trained and tested with ~87% accuracy. There is still a chance the prediction comes incorrect.</text>
      </div>
      <div className='board'>
        <MNIST />
      </div>
      <footer>
        <a target="_blank" href="https://xbdrc.github.io" title="Bruno Cruz"><img src="favicon.ico" width={32} /></a>
      </footer>
    </div>
  )
}

export default App
