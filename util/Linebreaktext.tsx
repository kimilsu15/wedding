// components/LineBreakText.tsx

interface LineBreakTextProps {
  text: string;
  className?: string;
  /** 줄 사이 간격 (기본값 "0.2em") */
  gap?: string;
}

/**
 * 문자열 내 "/br"을 줄바꿈으로 변환해 렌더링합니다.
 * gap prop으로 줄 간격을 자유롭게 조절할 수 있습니다.
 *
 * @example
 * <LineBreakText text="소나무같은 남편이/br되겠습니다." gap="0.1em" />
 */
export default function LineBreakText({ text, className, gap = "0.2em" }: LineBreakTextProps) {
  const lines = text.split("/br");

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            display: "block",
            marginBottom: i < lines.length - 1 ? gap : 0,
          }}
        >
          {line}
        </span>
      ))}
    </span>
  );
}