import { useReducer, createContext, Dispatch, ReactNode, useMemo } from 'react'
import {
  BudgetActions,
  BudgetState,
  budgetReducer,
  initialState,
} from '../reducers/budget-reducer'

type BudgetConextProps = {
  state: BudgetState
  dispatch: Dispatch<BudgetActions>
  totalExpenses: number
  remainBudget: number
}

type BudgetProviderProps = {
  children: ReactNode
}

export const BudgetConext = createContext<BudgetConextProps>(
  {} as BudgetConextProps
)

export const BudetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState)

  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses]
  )

  const remainBudget = state.budget - totalExpenses

  return (
    <BudgetConext.Provider
      value={{
        state,
        dispatch,
        totalExpenses,
        remainBudget,
      }}
    >
      {children}
    </BudgetConext.Provider>
  )
}
