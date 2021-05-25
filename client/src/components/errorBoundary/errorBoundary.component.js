import React from "react";

import errorImg from "../../assets/astronaut-illust.png";

import "./errorBoundary.styles.scss";

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // console.log("🤡🤡", error);

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // console.log("🤡", error, errorInfo.componentStack);

    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <div className="errorBoundary__container">
            <h1>This Page is Lost in Space</h1>
            <h2>{this.state.error?.toString()}</h2>
            {/* <h3>{this.state.errorInfo?.componentStack}</h3> */}
            <img src={errorImg} alt="error" />
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
