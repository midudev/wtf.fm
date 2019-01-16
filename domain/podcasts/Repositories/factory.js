import PodcastsMappersFactory from '../Mappers/factory'

import RSSPodcastsRepository from './RSSPodcastsRepository'

export default class PodcastsRepositoriesFactory {
  static rssPodcastsRepository = ({config}) =>
    new RSSPodcastsRepository({
      config,
      mapper: PodcastsMappersFactory.fromRSSTextToListOfPodcastsValueObject({
        config
      })
    })
}
