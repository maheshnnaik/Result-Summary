export const Result = () => {
    return (
        <div id='result'>
            <h4 id='result-header'> Your Result</h4>
            <div id='result-score-container'>
                <div id='result-score'>
                    <span id='result-score-text'> 76</span>
                    <span id='result-score-total'>of 100</span>
                </div>
                <span id='result-message'> Great </span>
            </div>
            <p id='result-desc'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}