interface AccentTextProps {
  /** Wrap the phrase to accent in asterisks, e.g. "Real users. *Live today.*" */
  text: string;
  accentClassName?: string;
}

export function AccentText({ text, accentClassName = '' }: AccentTextProps) {
  return (
    <>
      {text.split('*').map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={`accent-serif ${accentClassName}`}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
