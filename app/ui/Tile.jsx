export default function Tile({
  label,
  value,
  helper,
  className = "",
  valueClassName = "",
  children,
}) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm ${className}`}
    >
      {label ? (
        <p className="text-xs uppercase tracking-widest text-slate-400">
          {label}
        </p>
      ) : null}

      {value !== undefined ? (
        <p
          className={`mt-2 text-3xl font-semibold text-slate-900 ${valueClassName}`}
        >
          {value}
        </p>
      ) : null}

      {helper ? (
        <p className="mt-2 text-sm text-slate-500">{helper}</p>
      ) : null}

      {children}
    </div>
  );
}

