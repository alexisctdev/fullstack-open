import ReactDOM from 'react-dom/client'
import reducer from './reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer })

function App () {
  return (
    <div>
      <button onClick={() => store.dispatch({ type: 'GOOD' })}>good</button>
      <button onClick={() => store.dispatch({ type: 'OK' })}>ok</button>
      <button onClick={() => store.dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={() => store.dispatch({ type: 'ZERO' })}>reset stats</button>

      <div>good: {store.getState().good}</div>
      <div>ok: {store.getState().ok}</div>
      <div>bad: {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()

store.subscribe(renderApp)
