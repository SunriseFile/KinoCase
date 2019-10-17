import React, { Component, useState, useEffect } from 'react';
import { View, Panel, Root, PanelHeader, FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends Component {
	render() {
		return(
			<Root activeView="view">
			<View id="view" activePanel="panel">
				<Panel id="panel">
					<PanelHeader>KinoCase</PanelHeader>
					<FormLayout>
					<FormLayoutGroup top="Фамилия">
						<Input type="text" defaultValue="Петров" />
						<Input type="text" defaultValue="Иванов" alignment="center" />
						<Input type="text" defaultValue="Сидоров" alignment="right" />
					</FormLayoutGroup>
					</FormLayout>
				</Panel>
			</View>
			</Root>
		)
	}
}

export default App;

