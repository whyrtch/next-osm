import { LatLngExpression } from 'leaflet'

export type wsLocation = {
  name: string
  loc: LatLngExpression
}

// Scheduler Type
export type DropStationScheduler = {
  today: string
  tomorrow: string
}

export type ProgramPromptType = {
  prompt: string
  icon: string
}

export type DropStationType = {
  id: number
  uuid: string
  name: string
  longitude: number
  latitude: number
  status: string
  address: string
  highlightAddress?: string
  rt: string
  rw: string
  postalCode: string
  operationalTime: string
  scheduler: DropStationScheduler
  distance: string
  password: boolean
  companyName: string
  logo?: string
  todayTime: string
  breakTime: string
  tomorrow: string
  program: string
  url: string
  banner: string
  description: string
  programPrompt: ProgramPromptType[]
}
