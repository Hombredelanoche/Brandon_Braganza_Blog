import Alert from "@/web/components/ui/Alert"

const ErrorMessage = ({ error, ...otherProps }) =>
  error ? (
    <Alert variant="danger" {...otherProps}>
      <p>{error instanceof Error ? error.message : error}</p>
    </Alert>
  ) : null

export default ErrorMessage
