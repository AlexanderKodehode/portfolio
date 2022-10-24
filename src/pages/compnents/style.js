import { NavLink } from "react-router-dom";
import styled from "styled-components";

// The navbar
export const Nav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Nav_Content = styled.div`
	position: fixed;
	height: 5rem;
	display: flex;
	gap: 1rem;
	width: 100vw;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--color-white);
	z-index: 1;
`;

export const Nav_Links = styled.div`
    flex: display;
    gap: 1rem;
`;

export const Styled_NavLink = styled(NavLink)`
    color: var(--color-white);
	transition: var(--transition);

    &:hover {
		color: var(--color-primary);
	}

	&.active {
		color: var(--color-primary);
		border-bottom: 1px solid var(--color-primary);
	}
`;