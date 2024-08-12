import Category from "./components/Category"
import { resultData } from "./contant"

export const Summary = (props: any) => {
    return (
        <div id='summary'>
            <h4 id="result-summary"> Summary </h4>
            <div id="summary-data-container">
                {
                    resultData.map((data: any) => {
                        return <Category category={data.category} score={data.score} icon={data.icon} key={data.category} />
                    })
                }
            </div>
            <div id="continue-btn"><button>Continue</button></div>
        </div>
    )
}