import "babel-core/polyfill";
import React  from "react";
import ReactAutolinkMixin from "../src/react-autolink";

let App = React.createClass({
  getDefaultProps: function () {
    return {
      text: "foo bar baz http://yahoo.co.jp  bar",
    };
  },

  mixins: [
    ReactAutolinkMixin
  ],

    // return <div>{ this.autolink(this.props.text) }</div>;
  render() {
console.log(ReactAutolinkMixin);
    return <div>{ this.autolink(this.props.text, { target: "_blank", rel: "nofollow" }) }</div>;
  }
});

React.render(<App />, document.getElementById('app'));