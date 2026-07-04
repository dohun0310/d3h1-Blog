export function toPlainText(source: string): string {
  return source
    .replace(/```[\s\S]*?```/g, " ")                        // 펜스 코드 블록
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")                  // 이미지
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")                // 링크 → 텍스트
    .replace(/`([^`]*)`/g, "$1")                            // 인라인 코드
    .replace(/^#{1,6}\s+/gm, "")                            // 헤딩 마커
    .replace(/^>\s?/gm, "")                                 // 인용 마커
    .replace(/(\*\*|__)(.*?)\1/g, "$2")                     // 굵게
    .replace(/(\*|_)(.*?)\1/g, "$2")                        // 기울임
    .replace(/~~(.*?)~~/g, "$1")                            // 취소선
    .replace(/<[^>]+>/g, " ")                               // HTML/JSX 태그
    .replace(/^\s*[-*+]\s+/gm, "")                          // 리스트 마커
    .replace(/^\s*\d+\.\s+/gm, "")                          // 번호 리스트 마커
    .replace(/^\s*\|?[\s|:-]+\|?\s*$/gm, " ")               // 표 구분선(---, :---: 행)
    .replace(/\|/g, " ")                                    // 표 파이프
    .replace(/^import\s[^\n]*$/gm, "")                      // 티저 import
    .replace(/^export const meta = \{[\s\S]*?^\};$/m, "")   // 메타데이터 export
    .replace(/\s+/g, " ")
    .trim();
}

export function toExcerpt(plainText: string, maxLength = 200): string {
  if (plainText.length <= maxLength) {
    return plainText;
  }
  return `${plainText.slice(0, maxLength).trimEnd()}…`;
}