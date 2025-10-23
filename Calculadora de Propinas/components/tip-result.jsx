/**
 * Result display component (JSX without TypeScript)
 * This demonstrates .jsx files working in the project
 */

import { formatCurrency } from "../utils/format"

export function TipResult({ calculation }) {
  if (!calculation) {
    return null
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResultCard
          label="Propina"
          value={formatCurrency(calculation.tipAmount)}
          className="bg-primary text-primary-foreground"
        />
        <ResultCard
          label="Total"
          value={formatCurrency(calculation.totalAmount)}
          className="bg-secondary text-secondary-foreground"
        />
        <ResultCard
          label="Por Persona"
          value={formatCurrency(calculation.amountPerPerson)}
          className="bg-accent text-accent-foreground"
        />
      </div>

      <div className="p-4 bg-muted rounded-lg text-sm text-muted-foreground">
        <p>
          Cuenta: {formatCurrency(calculation.billAmount)} + Propina {calculation.tipPercentage}% = Total{" "}
          {formatCurrency(calculation.totalAmount)}
        </p>
        {calculation.numberOfPeople > 1 && <p className="mt-1">Dividido entre {calculation.numberOfPeople} personas</p>}
      </div>
    </div>
  )
}

function ResultCard({ label, value, className }) {
  return (
    <div className={`p-6 rounded-lg ${className}`}>
      <p className="text-sm font-medium opacity-90">{label}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  )
}
