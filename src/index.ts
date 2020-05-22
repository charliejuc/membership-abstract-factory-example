import 'module-alias/register'
import { PremiumMembershipAbstractFactory } from './memberships/abstract-factories/premium-membership-abstract-factory'
import { StandardMembershipAbstractFactory } from './memberships/abstract-factories/standard-membership-abstract-factory'
import { IMembershipAbstractFactory } from './memberships/interfaces/membership-abstract-factory'

function createAndShowMembership(
  membershipAbstractFactory: IMembershipAbstractFactory
): void {
  console.log(membershipAbstractFactory.createVideoFinder().all())

  const badge = membershipAbstractFactory.createBadge()
  console.log(badge.color())
  console.log(badge.backgroundColor())
}

const premiumMembershipAbstractFactory = new PremiumMembershipAbstractFactory()
const standardMembershipAbstractFactory = new StandardMembershipAbstractFactory()

createAndShowMembership(premiumMembershipAbstractFactory)
createAndShowMembership(standardMembershipAbstractFactory)
