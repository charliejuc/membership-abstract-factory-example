import { IVideoFinderFactory } from '../../interfaces/video-finder-factory'
import { IVideoFinder } from '../../interfaces/video-finder'
import { PremiumVideoFinder } from '../../implementations/video-finders/premium-video-finder'

export class PremiumVideoFinderFactory implements IVideoFinderFactory {
  createVideoFinder(): IVideoFinder {
    return new PremiumVideoFinder()
  }
}
