

const initialState = {
  count:0
}

type InitialState = typeof initialState
export const TestReducer = (state : InitialState  = initialState, action:ActionType)=>{
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count+1}
    default:
      return state


  }
}

type ActionType = IncCount

export const incCount = () => ({type:'inc'}as const)

type IncCount = ReturnType<typeof incCount>
