import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/stack/Hero'
import StackCard from './components/stack/StackCard'
import YourStackSidebar from './components/stack/YourStackSidebar'
import { useFetchData } from './components/stack/useFetchData'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  const { data: technologies, loading, error } = useFetchData()
  const [selectedStack, setSelectedStack] = useState([])

  const [toastMessage, setToastMessage] = useState('')

  const handleAddToStack = (tech) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech])

      setToastMessage(`${tech.name || 'Item'} added to stack!`)

      setTimeout(() => {
        setToastMessage('')
      }, 1000)
    }
  }

  const handleRemoveFromStack = (id) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id))
  }

  const handleRemoveAll = () => {
    setSelectedStack([])
  }

  return (
    <>
      <Navbar />
      <Hero />

      <div className="container mx-auto px-5 py-10 lg:py-16 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
        <h1 className="text-[36px] sm:text-[44px] lg:text-[58px] leading-[1.1] lg:leading-[1.05] tracking-[-1px] lg:tracking-[-2px] font-extrabold text-gray-900">
          Explore the{" "}
          <span className="text-[#e34aa0]">
            Technologies
          </span>
        </h1>
        <p className="text-gray-600 text-lg">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        {loading && (
          <div className="flex justify-center my-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 my-12 font-medium">
            Error loading data: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <StackCard
                  key={tech.id}
                  tech={tech}
                  onAdd={handleAddToStack}
                  isAdded={selectedStack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <YourStackSidebar
                selectedStack={selectedStack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </div>
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md text-slate-100 text-sm font-medium px-4 py-3 rounded-2xl border border-slate-800 shadow-xl shadow-black/20 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <span className="tracking-wide">{toastMessage}</span>
        </div>
      )}

      <Footer />
    </>
  )
}

export default App