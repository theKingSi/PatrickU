interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
          {subtitle}
        </p>
      )}
    </div>
  )
}
