import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
}

export function FeatureCard({ icon, title }: FeatureCardProps) {
  return (
    <Card className="bg-gray-100 border-none">
      <CardContent className="p-4 flex flex-col items-center justify-center">
        <div className="mb-2">{icon}</div>
        <div className="text-sm font-medium">{title}</div>
      </CardContent>
    </Card>
  )
}
