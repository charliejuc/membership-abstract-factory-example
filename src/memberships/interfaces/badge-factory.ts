import { IBadge } from './badge'

export interface IBadgeFactory {
  createBadge(): IBadge
}
