/* eslint-disable react/prop-types */
// import { useState } from "react";
import { FullContainer, List } from "../components/containers";
import {DealCard} from "../components/dealCard";

export const Deals = ({deals, onEdit, onRemove}) => {
    return (
        <FullContainer>
            <List>
            {deals.map(deal => {
                return <DealCard 
                key={deal.id} 
                deal={deal} 
                onRemove={() => onRemove(deal.id)} 
                onEdit={(status) => {
                    onEdit({...deal, status})
                }}
                />;
            })}
            </List>
        </FullContainer>
    )
}