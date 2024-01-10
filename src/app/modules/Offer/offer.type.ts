export interface IOffer {
  name: string
  type: "percentage" | "money"
  percentage: number
  money: number
  startDate: Date
  endDate: Date
}
