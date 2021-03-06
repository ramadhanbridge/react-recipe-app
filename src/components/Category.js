import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Category() {
    return (
        <List>
            <NLink to='/cuisine/Italian'>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NLink>
            <NLink to='/cuisine/American'>
                <FaHamburger />
                <h4>American</h4>
            </NLink>
            <NLink to='/cuisine/Thai'>
                <GiNoodles />
                <h4>Thai</h4>
            </NLink>
            <NLink to='/cuisine/french'>
                <GiChopsticks />
                <h4>French</h4>
            </NLink>

        </List>
    )
}

const List = styled.div`
 display: flex;
 justify-content: center;
 margin: 2rem 0rem;
`;

const NLink = styled(NavLink)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   margin-right: 2rem;
   text-decoration: none;
   background:linear-gradient(35deg, #494949,#313131);
   width: 6rem;
   height: 6rem;
   transform: scale(0.9);
   cursor: pointer;
   h4{
       color: white;
       font-size: 0.8rem;
   }
   svg{
       color: white;
       font-size: 1.5rem;
   }
   &.active{
       background: linear-gradient(to right,#f27121,#e94057);
   }
   &:hover{
   transform: scale(0.8);
   }
`;
