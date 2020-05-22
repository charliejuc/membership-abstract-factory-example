import { IBadge } from '@/memberships/interfaces/badge'

export class StandardBadge implements IBadge {
  color(): String {
    return 'brown'
  }

  backgroundColor(): String {
    return 'white'
  }
}
