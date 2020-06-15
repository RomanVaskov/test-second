import React from 'react';
import { Col, Row } from 'reactstrap';
import GotService from "../../services/gotService";
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from "../errorMessage";

export default class CharacterPage extends React.Component {

	gotService = new GotService();

	state = {
		selectedChar: null,
		error: false
	}

	componentDidCatch() {
		this.setState({ error: true })
	}

	onCharSelected = (id) => {
		this.setState(() => {
			return {
				selectedChar: id
			}
		});
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}
		return (
			<Row>
				<Col md='6'>
					<ItemList
						onCharSelected={this.onCharSelected}
						getData={this.gotService.getAllCharacters}
						renderItem={(item) => item.name}
					/>
				</Col>
				<Col md='6'>
					<CharDetails
						charId={this.state.selectedChar}
					/>
				</Col>
			</Row>
		)
	}
}