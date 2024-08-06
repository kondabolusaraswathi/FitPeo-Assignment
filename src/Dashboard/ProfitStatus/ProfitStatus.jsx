import './ProfitStatus.css'
export default function ProfitStatus(){
    return(
        <>
            <div className='profit'>
                <h1 className="card-title ">Net Profit</h1>
                <p className="description">$678762.6 </p>
                <p className="glyphicon glyphicon-triangle-top greenc ">3%</p>
                <span class="glyphicon glyphicon-cd"></span>
            </div>

            <div class="row d-flex justify-content-center mt-100 status">

               <div className="progress blue">
                 <span className="progress-left">
                                   <span class="progress-bar"></span>
                 </span>
                 <span className="progress-right">
                                   <span class="progress-bar"></span>
                 </span>
                 <div className="progress-value">70%</div>
               </div>
            </div>
        </>
    )
}