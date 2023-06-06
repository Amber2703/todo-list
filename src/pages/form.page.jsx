/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FullContainer } from "../components/containers";
import {Form, TextArea} from "../components/forms";

export const FormDeal = ({onAddDeal, deals, onEdit}) => {
    const { id = ''} = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState();
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
        onAddDeal(text);
        navigate('/');
    };

    const onUpdate = () => {
       onEdit({id, text});
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