import { IBadgeFactory } from '../../interfaces/badge-factory'
import { IBadge } from '../../interfaces/badge'
import { StandardBadge } from '../../implementations/badges/standard-badge'

export class StandardBadgeFactory implements IBadgeFactory {
  createBadge(): IBadge {
    return new StandardBadge()
  }
}
