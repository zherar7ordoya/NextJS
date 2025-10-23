/**
 * Main page that brings everything together
 */

import { TipCalculatorForm } from "@/components/tip-calculator-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">Calculadora de Propinas</h1>
          <p className="text-muted-foreground text-lg">Demostración de JS, TS, JSX y TSX trabajando juntos</p>
        </header>

        <TipCalculatorForm />

        <footer className="mt-16 pt-8 border-t border-border">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p className="font-semibold">Tipos de archivos utilizados:</p>
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              <FileTypeBadge type=".js" description="Utilidades de formateo" />
              <FileTypeBadge type=".ts" description="Lógica con tipos" />
              <FileTypeBadge type=".jsx" description="Componente de resultado" />
              <FileTypeBadge type=".tsx" description="Formulario principal" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

function FileTypeBadge({ type, description }: { type: string; description: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md">
      <code className="font-mono font-semibold text-primary">{type}</code>
      <span className="text-xs">{description}</span>
    </div>
  )
}
