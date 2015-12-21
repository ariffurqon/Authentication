var React = require('react-native');
var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');


var {
	Text,
	View,
	StyleSheet
} = React;

module.exports = React.createClass({
	componentWillMount: function(){
		Parse.initialize("6BspoRFelBxDuMEdXbMKXgCaNQxK0Go8my4Cum0T", "xBuBVsxXhAvbzs57NeskR5rMjULFM8ZU7C7qqZeD");
	},
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