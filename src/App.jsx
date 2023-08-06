import Hero from "./components/Hero"

function App() {

  return (
    <>
    <main className="h-full box-border m-0 p-0">
      <div className="contents">
        <div style={{minHeight:"100%", width:"auto"}}className="relative flex  flex-col flex-nowrap gap-6 justify-start overflow-hidden p-0 min-h-full h-min">
          <Hero/>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
//relative flex flex-col flex-nowrap w-auto overflow-hidden justify-start h-min	gap-6