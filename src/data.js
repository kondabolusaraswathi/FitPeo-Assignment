import totalCancelled from './assets/totalCancelled.jpg';
import totalDelivered from './assets/totalDelivered.png';
import totalOrders from './assets/totalOrders.png';
import totalRevenue from './assets/totalRevenue.png';

export const CORE_CONCEPTS = [
  
  {
    id:0,
    image: totalOrders,
    title: 'Total Orders',
    description:'75 ',
    increase:'3'
  },
  {
    id:1,
    image: totalDelivered,
    title: 'Total Delivered',
    description:'70',
    decrease:'3'
  },
  {
    id:2,
    image: totalCancelled,
    title: 'Total Cancelled',
    description:'05',
    increase:'3'
  },
  {
    id:3,
    image: totalRevenue,
    title: 'Total Revenue',
    description:'$12K',
    decrease:'3'
  },
];
export const GOALS=[
  {
    title:'Goals',
    img:''
  },
  {
    title:'Popular Dishes',
    img:''
  },
  {
    title:'Menus',
    img:''
  }
]
export const FEEDBACK=[
  {
    id:0,
    title:'Jenny Wilson',
    description:'The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, '

  },
  {
    id:1,
    title:'Dianne Russel',
    description:'“I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. '
  },
  {
    id:2,
    title:'Devon Lane',
    description:'Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.'
  }

]
export const RECENT_ORDERS=[
  {
    id:0,
    title:'Wade Warden',
    orderNo:'3233',
    amount:'$231',
    status:'Delivered'
  }, 
  {
    id:1,
    title:'Jane Corper',
    orderNo:'3311',
    amount:'$122',
    status:'Cancelled'
  },
  {
    id:2,
    title:'Guy Hawkin',
    orderNo:'6767',
    amount:'$211',
    status:'Pending'
  },
  {
    id:3,
    title:'Kevin',
    orderNo:'8735',
    amount:'$908',
    status:'Delivered'
  }, 
  {
    id:4,
    title:'James',
    orderNo:'1467',
    amount:'$829',
    status:'Cancelled'
  },
   {
    id:5,
    title:'Sam Jeo',
    orderNo:'2167',
    amount:'$109',
    status:'Delivered'
  } 
  ,{
    id:6,
    title:'John',
    orderNo:'1098',
    amount:'$761',
    status:'Cancelled'
  } ,
  // {
  //   id:7,
  //   title:'Jim Darton',
  //   orderNo:'1207',
  //   amount:'$269',
  //   status:'Delivered'
  // }

]
export const ACTIVITY=
{
  "weekly": [
    { "day": "Monday", "value": 10 },
    { "day": "Tuesday", "value": 20 },
    { "day": "Wednesday", "value": 15 },
    { "day": "Thursday", "value": 30 },
    { "day": "Friday", "value": 25 }
  ],
  "monthly": [
    { "month": "January", "value": 200 },
    { "month": "February", "value": 180 },
    { "month": "March", "value": 220 }
  ],
  "yearly": [
    { "year": "2022", "value": 2500 },
    { "year": "2023", "value": 2700 }
  ]
}
