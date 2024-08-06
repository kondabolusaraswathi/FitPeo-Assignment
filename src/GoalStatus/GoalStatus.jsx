import './GoalStatus.css'
export default function GoalStatus({title}){
    return(
        <>
            <span className="container">
                <span className="glyphicon glyphicon-cd"></span>
                <h1>{title}</h1>
                <span className='glyphicon glyphicon-circle-arrow-right arrow'></span>
            </span>
        </>
    )
}