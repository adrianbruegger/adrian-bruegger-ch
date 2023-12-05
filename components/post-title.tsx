export default function PostTitle({ children }) {
  return (
    <h1
      className="text-5xl md:text-6xl xl:text-7xl font-syne font-bold tracking-tighter leading-tight md:leading-none text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
