const TYPE_STYLES = {
  pdf: {
    label: "PDF",
    className: "bg-rose-100 text-rose-700 ring-rose-200",
  },
  word: {
    label: "Word",
    className: "bg-blue-100 text-blue-700 ring-blue-200",
  },
  image: {
    label: "Image",
    className: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  },
  text: {
    label: "Text",
    className: "bg-amber-100 text-amber-700 ring-amber-200",
  },
};

export default function DocumentTypeBadge({ type }) {
  const fallback = {
    label: type?.toUpperCase() ?? "FILE",
    className: "bg-slate-100 text-slate-700 ring-slate-200",
  };

  const { label, className } = TYPE_STYLES[type] ?? fallback;

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${className}`}
    >
      {label}
    </span>
  );
}

