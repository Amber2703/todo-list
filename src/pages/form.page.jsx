import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FullContainer } from "../components/containers";
import {Form, TextArea} from "../components/forms";
import { useSelector, useDispatch } from "react-redux";
import { onAdd, onEdit } from "../store/actions";

export const FormDeal = () => {
    const { id = ''} = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState();
    const deals = useSelector((state) => state.todoStore);
    const dispatch = useDispatch();
    useEffect(() => {
        try {
          if (id) {
            const deal = deals.find((deal) => deal.id === id);
            if (deal) {
              setText(deal.text);
            } else {
              throw new Error(`Deal not found for id: ${id}`);
            }
          }
        } catch (error) {
          console.error(error);          
        }
      }, [deals, id]);
    const onSave = (e) => {
        e.preventDefault();
        console.log(text);
        dispatch(onAdd(text))
        navigate('/');
    };

    const onUpdate = () => {
      dispatch(onEdit({id, text}))
       navigate('/');
    };
    const onInput = (e) => {
        e.preventDefault();
        setText(e.target.value);
    };


    return (
        <FullContainer>
            <Form onSubmit={id ? onUpdate : onSave}>
                
                <TextArea value={text} onInput={onInput}/>
                <br />
                <button>Save</button>
            </Form>
        </FullContainer>
    )
}