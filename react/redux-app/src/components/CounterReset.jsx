import { useDispatch } from "react-redux"
import { reset } from "../store/counterSlice"

export default function CounterReset() {
    const dispatch = useDispatch();
    function handleClick(){
        dispatch(reset());
    }
    return (
        <div>
            <button
                onClick={() => {
                    handleClick();
                }}
            >
                Reset
            </button>
        </div>
    )
}
