var React = require('react-native');
var Signin = require('./components/authentication/signin');

var {
	Text,
	View,
	StyleSheet
} = React;

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Signin />
			</View>
		)
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});