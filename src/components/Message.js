import React from "react";
import { connect } from "react-redux";

const Message = ({ message }) => {
  return message ? <span className="message">{message}</span> : null;
};

const mapStateToProps = state => ({ message: state.message });
export default connect(mapStateToProps)(Message);
