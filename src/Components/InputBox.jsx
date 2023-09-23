import React, {useId} from 'react'

function InputBox(
    {  label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,

         }
    ) {
        const amountInputId = useId()
        return (
    <div className=' w-[90%] text-slate-600 p-[20px] bg-white rounded-lg'>
      <div className='flex items-center justify-between text-lg font-medium'>
        <label className='text-2xl font-medium' htmlFor={amountInputId}>{label}</label>
        <label className='text-2xl font-medium' htmlFor="">Currency Type</label>
      </div>
      <div className='flex items-center justify-between text-lg font-medium mt-[30px]'>
        <input className='text-xl font-medium outline-none border-none' type="number"
        id={amountInputId}

        placeholder="Amount"
        disabled={amountDisable}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        <select name="" id="" className='outline-none bg-slate-200 w-40 rounded-md p-2 text-xl font-medium'
       value={selectCurrency}
       onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
       disabled={currencyDisable}
        // disabled={currencyDisabled}
        >
               {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
            
        </select>
      </div>
    </div>
  )
}

export default InputBox
