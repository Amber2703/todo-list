import { FullContainer, List } from "../components/containers";
import {DealCard} from "../components/dealCard";
import { useSelector } from "react-redux";


export const Deals = () => {
    const deals = useSelector((state) => state.todoStore);
    return (
        <FullContainer>
            <List>
            {deals.map(deal => {
                return <DealCard 
                key={deal.id} 
                deal={deal} 
                />;
            })}
            </List>
        </FullContainer>
    )
}