interface SectionHeadingProps {
  label: string;
  title: string;
  italic?: string;
  light?: boolean;
}

export default function SectionHeading({ label, title, italic, light }: SectionHeadingProps) {
  return (
    <div>
      <span className="section-label">{label}</span>
      <h2
        className="section-title"
        style={{ color: light ? "var(--white)" : "var(--navy)" }}
      >
        {title}
        {italic && (
          <>
            <br />
            <em>{italic}</em>
          </>
        )}
      </h2>
    </div>
  );
}
