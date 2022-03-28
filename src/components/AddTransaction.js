import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Swal from 'sweetalert2'


const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount,setAmount ] = useState(0);

    const {addTransaction}   = useContext(GlobalContext);
    const onSubmit = e =>{
      e.preventDefault();
      
      setText("");
    setAmount("");
    Swal.fire(
      'Good job!',
      'Your transaction has been added successfully!',
      'success'
    )

      const newTransaction ={
        id:  Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction);
    }
  return (
    <div>
        <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction