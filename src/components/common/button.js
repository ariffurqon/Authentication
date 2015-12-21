var React = require('react-native')

var {
	Text,
	StyleSheet,
	TouchableHighlihgt
} = React;

module.exports = React.createClass({
	render: function(){
		<TouchableHighlihgt 
			style={styles.button}
			underlayColor: {'gray'}
			onPress={this.props.onPress}
			>
			<Text style={styles.buttonText}>
				{this.props.text}
			</Text>
		</TouchableHighlihgt>
	}
});

var styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		borderColor: Black,
		marginTop: 10
	},
	buttonText: {
		flex: 1,
		alignSelf: 'center',
		fontSize: 20
	}
});