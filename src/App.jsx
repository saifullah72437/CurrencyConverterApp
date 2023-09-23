import { useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div className='main w-screen h-screen bg-slate-500 flex justify-center items-center text-white'>
      <div className='box h-[70%] w-[60%] flex flex-col items-center justify-center'>
        <InputBox 
         label="From"
         amount={amount}
         currencyOptions={options}
         onCurrencyChange={(currency) => setFrom(currency)} 
         selectCurrency={from}
         onAmountChange={(amount) => setAmount(amount)}

        />
        <button onClick={swap} className='bg-blue-600 text-white py-3 px-4 text-xl font-medium rounded-md absolute top-[34%] border-2 border-white'>Swap</button>
        <div className='h-5'></div>
        <InputBox 
         label="To"
         amount={convertedAmount}
         currencyOptions={options}
         onCurrencyChange={(currency) => setTo(currency)} 
         selectCurrency={to} 
         amountDisable
        />
        <button className='w-[90%] bg-blue-600 py-3 px-4 font-medium text-xl rounded-md my-5' onClick={convert}>Convert {from} to {to}</button>
      </div>
    </div>
    )
}

export default App
