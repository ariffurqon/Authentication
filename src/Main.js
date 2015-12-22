var React = require('react-native');
var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Photos = require('./components/photos/photos');

var {
	StyleSheet,
	Navigator
} = React;

var ROUTES = {
	signin: Signin,
	signup: Signup,
	photos: Photos
};

module.exports = React.createClass({
	componentWillMount: function(){
		Parse.initialize("6BspoRFelBxDuMEdXbMKXgCaNQxK0Go8my4Cum0T", "xBuBVsxXhAvbzs57NeskR5rMjULFM8ZU7C7qqZeD");
	},
	renderScene: function(route, navigator) {
		var Component = ROUTES[route.name]; 
		return <Component route={route} navigator={navigator} />;
	},
	render: function() {
		return (
			<Navigator 
				style={styles.container}
				initialRoute={{name: 'signin'}}
				renderScene={this.renderScene}
				configureScene={() => {return Navigator.SceneConfigs.FloatFromRight; }} />
		)
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});