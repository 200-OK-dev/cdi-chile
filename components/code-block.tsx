import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = "jsx", className }: CodeBlockProps) {
  return (
    <div className={cn("rounded-md bg-black overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800">
        <div className="flex space-x-1">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        {language && <div className="text-xs text-zinc-400">{language}</div>}
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-white">
        <code>{code}</code>
      </pre>
    </div>
  )
}
