import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  name: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    return (
      <div>
        {this.state.hasError ?
          <>{console.log("Failed loading " + this.props.name)}</> :
          this.props.children
        }
      </div>
    )
  }
}

export default ErrorBoundary;