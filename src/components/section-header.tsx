interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, className = "", centered = true }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">{title}</h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
