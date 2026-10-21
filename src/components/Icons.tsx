export function Logo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="26" height="18" rx="3" stroke="#F2B33D" strokeWidth="2.4" />
      <path d="M8 17.5 12.5 11l3.5 4.4L19.5 11 24 17.5" stroke="#F2EFE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 27h6" stroke="#F2B33D" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function Check({ size, strokeWidth }: { size: number; strokeWidth: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 12.5 10 18 19.5 6.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
