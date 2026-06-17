interface LoadingSpinnerProps {
  label: string;
  className?: string;
}

export function LoadingSpinner({ label, className = "" }: LoadingSpinnerProps) {
  return (
    <div
      className={`inline-block h-5 w-5 animate-spin rounded-full border-2 border-[color:var(--border)] border-t-[color:var(--accent)] ${className}`}
      role="status"
      aria-label={label}
    />
  );
}
