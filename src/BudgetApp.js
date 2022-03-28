import AddTransaction from './components/AddTransaction';
import './Stylesheets/App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function BudgetApp() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
       <Balance />  
       <IncomeExpense/>
       <TransactionList/>
       <AddTransaction/>

     </div>
      </GlobalProvider>
  );
}

export default BudgetApp;