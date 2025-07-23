import React, { type JSX } from 'react';

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: (props: { error: Error }) => JSX.Element },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback({ error: this.state.error })
    }
    return this.props.children
  }
}

export function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="max-w-[400px] text-center mx-auto p-5 border rounded-md">
      <div className="text-danger">
        <h2 className="text-lg">Something went wrong 😢</h2>
        <p className="text-sm">{error.message}</p>
      </div>
    </div>
  )
}