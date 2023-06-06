/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FullContainer, List } from "../components/containers";
import {DealCard} from "../components/dealCard";
import { TodoContext } from "../context";

export const Deals = () => {
    const {deals} = useContext(TodoContext);
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