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

  const handleAddToStack = (tech) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech])
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

      <div className="container mx-auto px-4 py-8">
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
            {/* Left side: Card List */}
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
      <Footer />
    </>
  )
}

export default App