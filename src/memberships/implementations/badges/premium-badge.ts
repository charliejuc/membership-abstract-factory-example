import { IBadge } from '@/memberships/interfaces/badge'

export class PremiumBadge implements IBadge {
  color(): String {
    return 'gold'
  }

  backgroundColor(): String {
    return 'black'
  }
}
