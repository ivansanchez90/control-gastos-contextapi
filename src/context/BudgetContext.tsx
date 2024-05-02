import { useReducer, createContext, Dispatch, ReactNode } from 'react'
import {
  BudgetActions,
  BudgetState,
  budgetReducer,
  initialState,
} from '../reducers/budget-reducer'

type BudgetConextProps = {
  state: BudgetState
  dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
  children: ReactNode
}

export const BudgetConext = createContext<BudgetConextProps>(
  {} as BudgetConextProps
)

export const BudetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState)

  return (
    <BudgetConext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BudgetConext.Provider>
  )
}
