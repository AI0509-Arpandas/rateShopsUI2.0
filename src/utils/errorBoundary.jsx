import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, messsage: error };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // Render children
    return this.props.children;
  }
}

export default ErrorBoundary