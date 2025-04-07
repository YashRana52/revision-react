import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) {
      str += "0123456789"
    }
    if (char) {
      str += "#$%&'()*+"
    }

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, number, char])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])

  const copyPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.select()
      navigator.clipboard.writeText(password)
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
        <div className="w-full max-w-md bg-gray-700 shadow-lg rounded-xl px-6 py-8 text-orange-500">
          <h1 className="text-2xl text-center text-white font-bold mb-6">
            🔐 Password Generator
          </h1>

          <div className="flex shadow-inner rounded-lg overflow-hidden mb-5">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              className="outline-none w-full py-2 px-3 text-sm bg-gray-100 text-gray-800"
              placeholder="Generated password"
              readOnly
            />
            <Button
              onClick={copyPassword}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 font-semibold rounded-none"
            >
              Copy
            </Button>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <label className="text-white font-medium">Length: {length}</label>
              <input
                type="range"
                min={6}
                max={40}
                value={length}
                className="cursor-pointer w-1/2"
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-white font-medium">Include Numbers</label>
              <input
                type="checkbox"
                checked={number}
                className="cursor-pointer scale-125"
                onChange={() => setNumber((prev) => !prev)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-white font-medium">Include Special Characters</label>
              <input
                type="checkbox"
                checked={char}
                className="cursor-pointer scale-125"
                onChange={() => setChar((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

