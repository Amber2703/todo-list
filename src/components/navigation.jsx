import { Link } from "react-router-dom";
import styled from 'styled-components';

const CustomLink = styled(Link)`
    margin: 0 20px;
`;

export const Navigation = () => {
    return (
        <div>
            <CustomLink to='/'>Deal List</CustomLink>
            <CustomLink to='/Form'>Add new Deal</CustomLink>
        </div>
    )
}