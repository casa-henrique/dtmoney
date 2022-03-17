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

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsProps[]>([]);

export function TransactionsProvider({children} :TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

    useEffect(() => {
      api
        .get("transactions")
        .then((response) => setTransactions(response.data.transactions));
    }, []);

    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
  
}