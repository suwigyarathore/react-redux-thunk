import React from "react";

export default function Message({ message }) {
  return message ? <span className="message">{message}</span> : null;
}
