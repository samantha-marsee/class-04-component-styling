import Gallery from './components/Gallery'

export default function Home() {
  return(
  <main>
    <Gallery>

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
      </Gallery>
  </main>
  )
}
