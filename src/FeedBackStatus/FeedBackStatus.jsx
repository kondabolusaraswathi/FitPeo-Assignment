export default function FeedBackStatus({title,description}){
    return(
        <>
        <div className="container">
            <span className="glyphicon glyphicon-copyright-mark"></span>
            <h1>{title}</h1>
        </div>
        <h3>
            {description}
        </h3>

        </>
    )
}