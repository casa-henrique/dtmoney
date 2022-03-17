import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';


interface TransactionsProps {
    id: string;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
};

//Vamos pegar todos os tipos do transactionProps menos id e createadAt
type TransactionInput = Omit<TransactionsProps, 'id' | 'createdAt'> 
// ou type TransactionInput = Pick<TransactionsProps, 'title' | 'type' | 'category' | 'amount'> 

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: TransactionsProps[];
    createTransaction: (transactions: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData //Iremos forçar a tipagem para corrigir um erro
    );

export function TransactionsProvider({children} :TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

    useEffect(() => {
      api
        .get("transactions")
        .then((response) => setTransactions(response.data.transactions));
    }, []);

    function createTransaction(transaction:TransactionInput) {
          api.post("/transactions", transaction);
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
  
}