import { Button, Link } from '@heroui/react';
import React, { type JSX } from 'react';
import { useLocation } from 'react-router';

type Props = {
  children: React.ReactNode
  fallback: (props: { error: Error }) => JSX.Element
  resetKeys?: unknown[]
}

type State = {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.resetKeys && prevProps.resetKeys) {
      const changed = !areEqual(this.props.resetKeys, prevProps.resetKeys)
      if (changed && this.state.hasError) {
        this.setState({ hasError: false, error: null })
      }
    }
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback({ error: this.state.error })
    }
    return this.props.children
  }
}

function areEqual(arr1: unknown[], arr2: unknown[]): boolean {
  if (arr1.length !== arr2.length) return false
  return arr1.every((item, index) => item === arr2[index])
}

export function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="max-w-[400px] text-center mx-auto p-5 border rounded-md">
      <div className="text-danger">
        <h2 className="text-lg">Something went wrong 😢</h2>
        <p className="text-sm mb-4">{error.message}</p>
        <Button
          as={Link}
          color="primary"
          href={'/'}
          variant="solid"
        >
          Go home
        </Button>
      </div>
    </div>
  )
}

export function AppErrorBoundary({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <ErrorBoundary
      fallback={ErrorFallback}
      resetKeys={[location.pathname]}
    >
      {children}
    </ErrorBoundary>
  )
}