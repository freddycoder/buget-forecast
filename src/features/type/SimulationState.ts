import { PaymentInfo } from "./PaiementInfo"
import { SimulationStep } from "./SimulationStep"

export interface SimulationState {
  // Mortgage information
  costOfProperty: number
  cashDown: number
  cashDownPercentage: number
  interestRate: number
  term: number
  paymentAmount: number
  insuranceSCHL: number
  paymentTable: Array<PaymentInfo>

  totalCapital: number
  totalInterest: number

  // income information
  initialValue: number
  income: number

  // expenses information
  expenses: number
  houseInsurance: number
  houseInsuranceTaxes: number

  // final information
  simulationTable: Array<SimulationStep>
}