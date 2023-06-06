/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { CardContainer } from "./containers"
import { TodoContext } from "../context";

export const DealCard = ({deal}) => {
    const {onEdit, onRemove} = useContext(TodoContext);
    const navigate = useNavigate();
    return (
        <CardContainer>

<input
  type="checkbox"
  defaultChecked={deal.status}
  onChange={(e) => onEdit({...deal, status: e.target.checked})}
/>
            <span>{deal.text}</span>
            <button onClick={() => onRemove(deal.id)}>Remove</button>
            <button onClick={() => navigate(`/form/${deal.id}`)}>Go to Edit</button>
        </CardContainer>
    )
}