import xmlToJson from './utils/xmlToJson'

const request = () => {
  return window
    .fetch(
      'https://cors-anywhere.herokuapp.com/https://www.ivoox.com/podcast-wtfront_fg_f1647356_filtro_1.xml'
    )
    .then(res => res.text())
}

const map = rssText => {
  const rss = xmlToJson(rssText)
  console.log(rss)
  const {item: podcasts} = rss.channel

  return podcasts.map(podcast => {
    const {
      'itunes:episode': episode,
      'itunes:season': season,
      enclosure,
      title
    } = podcast

    const id = `S${season._text}E${episode._text}`

    return {
      id,
      title: title._cdata,
      url: enclosure._attributes.url
    }
  })
}

export const getPodcastsEpisodes = () => {
  request().then(map)
}
