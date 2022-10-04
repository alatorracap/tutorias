import { useDispatch, useSelector } from "react-redux"
import { modeToggle } from './store'

function ModeSelector() {
  const mode = useSelector(s => s.mode)
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(modeToggle())}>
      {mode}
    </button>
  )
}

export default ModeSelector
