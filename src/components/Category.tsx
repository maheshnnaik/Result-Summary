import './category.css';

export const Category = (props: any) => {

    const { category, score, icon } = props;
    return (
        <div className='summary-data' id={`${category.toLowerCase()}`}>
            <div className='icon-text'>
                <img src={icon} alt='icon' />
                <div id={`${category.toLowerCase()}-text`}>{category}</div>
            </div>
            <div className="summary-score"><strong>{score}</strong> <span>/ 100</span></div>
        </div>
    )
}