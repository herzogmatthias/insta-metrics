import React, { Component } from "react";
import { connect } from "react-redux";

export class UserDetails extends Component {
  render() {
    return <div>Hello</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
