import styled from "styled-components";

const StyledTabs = styled.nav`
    color: #007bff;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	border-bottom: 1px solid #dee2e6;

	a {
		display: block;
		padding: 0.5rem 1rem;
		margin-bottom: -1px;
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
	}
`;

const StyledTabsChild = styled.div`
    display: block;
`

export { StyledTabs };
