import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkbox from './components/checkbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='bg-teal-600 w-full h-20 flex items-center justify-center mb-10'>
      <h1>Bem vindo a farofada do bigode, escolha o que vai levar</h1>
      
    </header>
    <section className='flex justify-center'>
      <div className='w-3/4'>
        <form>
          <div className='grid grid-cols-5'>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
             <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
             <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
             <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
             <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            <Checkbox id='item-1' name='check' text='1kg de Carne'/>
            <Checkbox id='item-2' name='check' text='1kg de Carne'/>
            <Checkbox id='item-3' name='check' text='1kg de Carne'/>
            <Checkbox id='item-4' name='check' text='1kg de Carne'/>
            <Checkbox id='item-5' name='check' text='1kg de Carne'/>
            </div>
            
            <input type='text' name='nome' />
            <button className='bg-teal-600 w-3/4 h-10 font-mono mt-5'>Enviar</button>
         </form>
        </div>
      </section>

    </>
  )
}

export default App
