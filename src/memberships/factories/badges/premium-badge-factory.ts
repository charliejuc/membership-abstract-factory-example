import { IBadgeFactory } from '../../interfaces/badge-factory'
import { IBadge } from '../../interfaces/badge'
import { PremiumBadge } from '../../implementations/badges/premium-badge'

export class PremiumBadgeFactory implements IBadgeFactory {
  createBadge(): IBadge {
    return new PremiumBadge()
  }
}
