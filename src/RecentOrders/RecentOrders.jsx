import {RECENT_ORDERS} from '../data';
import './RecentOrders.css'
export default function RecentOrders(){
    return(
        <>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Customer</th>
                    <th>Order No</th>
                    <th>Amount</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {RECENT_ORDERS.map((item) => (
                    <tr key={item.id}>
                        <td >{item.title}</td>
                        <td>{item.orderNo}</td>
                        <td>{item.amount}</td>
                        <td>{item.status=='Delivered' ? <p className='greenstatus'>{item.status}</p> : item.status=='Pending'?<p className='redstatus'>{item.status}</p>:<p className='pend'>{item.status}</p>}</td>
                    </tr>
                    ))}
                </tbody>
             </table>
        </>
    )
}