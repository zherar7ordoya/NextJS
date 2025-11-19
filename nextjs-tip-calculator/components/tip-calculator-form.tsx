/**
 * Main form component (TSX with React and TypeScript)
 * This demonstrates .tsx files with full type safety
 */

"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { calculateTip, TIP_PRESETS, type TipCalculation } from "@/lib/tip-calculator"
import { TipResult } from "./tip-result"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function TipCalculatorForm() {
  const [billAmount, setBillAmount] = useState<string>("")
  const [tipPercentage, setTipPercentage] = useState<number>(15)
  const [customTip, setCustomTip] = useState<string>("")
  const [numberOfPeople, setNumberOfPeople] = useState<string>("1")
  const [calculation, setCalculation] = useState<TipCalculation | null>(null)
  const [error, setError] = useState<string>("")

  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBillAmount(e.target.value)
    setError("")
  }

  const handlePeopleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(e.target.value)
    setError("")
  }

  const handleCustomTipChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCustomTip(value)
    if (value) {
      setTipPercentage(Number.parseFloat(value) || 0)
    }
    setError("")
  }

  const handlePresetClick = (preset: number) => {
    setTipPercentage(preset)
    setCustomTip("")
    setError("")
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    const bill = Number.parseFloat(billAmount)
    const people = Number.parseInt(numberOfPeople)

    if (isNaN(bill) || bill <= 0) {
      setError("Por favor ingresa un monto válido")
      return
    }

    if (isNaN(people) || people < 1) {
      setError("El número de personas debe ser al menos 1")
      return
    }

    if (tipPercentage < 0) {
      setError("El porcentaje de propina no puede ser negativo")
      return
    }

    try {
      const result = calculateTip({
        billAmount: bill,
        tipPercentage,
        numberOfPeople: people,
      })
      setCalculation(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al calcular")
    }
  }

  const handleReset = () => {
    setBillAmount("")
    setTipPercentage(15)
    setCustomTip("")
    setNumberOfPeople("1")
    setCalculation(null)
    setError("")
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="bill">Monto de la Cuenta</Label>
          <Input
            id="bill"
            type="number"
            step="0.01"
            placeholder="0.00"
            value={billAmount}
            onChange={handleBillChange}
            className="text-lg"
          />
        </div>

        <div className="space-y-3">
          <Label>Porcentaje de Propina</Label>
          <div className="grid grid-cols-5 gap-2">
            {TIP_PRESETS.map((preset) => (
              <Button
                key={preset}
                type="button"
                variant={tipPercentage === preset && !customTip ? "default" : "outline"}
                onClick={() => handlePresetClick(preset)}
                className="w-full"
              >
                {preset}%
              </Button>
            ))}
          </div>
          <Input
            type="number"
            step="0.1"
            placeholder="Personalizado"
            value={customTip}
            onChange={handleCustomTipChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="people">Número de Personas</Label>
          <Input id="people" type="number" min="1" value={numberOfPeople} onChange={handlePeopleChange} />
        </div>

        {error && <div className="p-3 bg-destructive/10 text-destructive rounded-lg text-sm">{error}</div>}

        <div className="flex gap-3">
          <Button type="submit" className="flex-1">
            Calcular
          </Button>
          <Button type="button" variant="outline" onClick={handleReset}>
            Limpiar
          </Button>
        </div>
      </form>

      <TipResult calculation={calculation} />
    </div>
  )
}
