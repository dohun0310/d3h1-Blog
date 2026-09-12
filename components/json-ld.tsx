export interface JsonLdProps {
  data: object;
}

// JSON-LD는 script 태그 안에 직렬화된 JSON으로만 전달할 수 있다
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
