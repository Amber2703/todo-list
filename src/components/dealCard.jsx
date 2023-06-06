/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { CardContainer } from "./containers"
import { onEdit, onRemove } from "../store/actions";
import { useDispatch } from "react-redux";

export const DealCard = ({deal}) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <CardContainer>

<input
  type="checkbox"
  defaultChecked={deal.status}
  onChange={(e) => dispatch(onEdit({...deal, status: e.target.checked}))}
/>
            <span>{deal.text}</span>
            <button onClick={() => dispatch(onRemove(deal.id))}>Remove</button>
            <button onClick={() => navigate(`/form/${deal.id}`)}>Go to Edit</button>
        </CardContainer>
    )
}