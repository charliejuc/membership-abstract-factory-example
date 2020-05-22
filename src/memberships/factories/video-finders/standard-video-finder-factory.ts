import { IVideoFinderFactory } from '../../interfaces/video-finder-factory'
import { IVideoFinder } from '../../interfaces/video-finder'
import { StandardVideoFinder } from '../../implementations/video-finders/standard-video-finder'

export class StandardVideoFinderFactory implements IVideoFinderFactory {
  createVideoFinder(): IVideoFinder {
    return new StandardVideoFinder()
  }
}
