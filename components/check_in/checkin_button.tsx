import { useState } from "react"


const CheckInButton = () => {
    const [status, setStatus] = useState(0)

    const _getStatus = () => {
        switch (status) {
            case 0:
                return "N/A"
            case 1:
                return "GOING"
            case 2:
                return "UNSURE"
            case -1:
                return "NOT GOING"
            default:
                return "-"
        }
    }

    const _getColor = () => {
        switch (status) {
            case 0:
                return "N/A"
            case 1:
                return "GOING"
            case 2:
                return "UNSURE"
            case -1:
                return "NOT GOING"
            default:
                return "-"
        }
    }

    const _onClick = () => {
        console.log("Hello world")
    }


    return <>
        <button onClick={_onClick}>
            <div className="bg-red-300 hover:opacity-50 transition-all px-5 py-1 rounded-md grid place-items-center">
                <span>{_getStatus()}</span>
            </div>
        </button>
    </>
}

export default CheckInButton