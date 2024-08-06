import React from 'react';
import styled from "styled-components";
import DashBoard from './Dashboard/DashBoard';
import ProfitStatus from './Dashboard/ProfitStatus/ProfitStatus';
import GoalStatus from './GoalStatus/GoalStatus';
import FeedBackStatus from './FeedBackStatus/FeedBackStatus';
import { CORE_CONCEPTS, GOALS, FEEDBACK } from './data';
import TopNav from './TopNav/TopNav';
import RecentOrders from './RecentOrders/RecentOrders';
import ActivityStatus from './ActivityStatus/ActivityStatus'
import Side from './Side/Side';
const Contain = styled.div`
background-color: rgb(27, 27, 27);


  display: grid;
  height: 100vh;
  width:100vh
  color: white;
  grid-template-rows: 0.1fr 0.2fr 0.3fr 0.4fr;
   grid-template-columns: 0.05fr 0.15fr 0.15fr 0.15fr 0.15fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav nav nav"
    "sidebar dash dash dash dash profit"
    "sidebar activity activity activity activity goal"
    "sidebar order order order order  feedback";
  text-align: center;
  grid-gap: 0.25rem;
`;
const NavBar = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
  border-radius: 20px
`;
const Dash = styled.main`
 display: flex; 
  grid-area: dash;
  padding: 0.25rem;
  border-radius: 20px
`;
const Profit = styled.div`
  background: #3a3a55;
  color: red;
  grid-area: profit;
  border-radius: 20px
`;
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
`;
const Activity = styled.div`
  background: #1f2128;
  color: white;
  grid-area:activity;
  border-radius: 20px
`;
const Goal = styled.div`
  background: #9aaab7;
  color: white;
  grid-area:goal;
  border-radius: 20px
`;
const Order = styled.div`
  background: #9aaab7;
  grid-area:order;
  border-radius: 20px
`;const FeedBack = styled.div`
background: #9aaab7;
grid-area:feedback;
border-radius: 20px
`;

  export default function Container(){
      return (
          <Contain>
            <NavBar>
              <TopNav/>
            </NavBar>
            <Dash>
                {CORE_CONCEPTS.map((i)=>
                <DashBoard key={i.id}
                    title={i.title}
                    image={i.image}
                    description={i.description}
                    inordec={i.increase}
                
                ></DashBoard>
                )}
            </Dash>
            <Profit>
                <ProfitStatus/>
            </Profit>
            <SideBar>
              <Side/>
            </SideBar>
            <Activity>
              <ActivityStatus/>
            </Activity>
            <Goal>
              {GOALS.map((i)=>
                <GoalStatus title={i.title}></GoalStatus>
              )}
            </Goal>
            <Order>
                <RecentOrders/>
            </Order>
            <FeedBack>
              <h1>Customer's Feedback</h1>
              {
                FEEDBACK.map((i)=>
                  <FeedBackStatus title={i.title} description={i.description}></FeedBackStatus>
                )
              }
            </FeedBack>
          </Contain>
        );
  }
  

