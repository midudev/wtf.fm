import React from 'react'
import Head from 'next/head'

import domain from '../domain'

export default class extends React.Component {
  static async getInitialProps() {
    const {podcasts} = await domain.get('list_podcasts_use_case').execute()
    return {podcasts}
  }

  render() {
    const {podcasts} = this.props

    return (
      <React.Fragment>
        <Head>
          <title>WTFront! Podcast de frontend y desarrollo web</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <main>
          <section>
            <img src="https://res.cloudinary.com/midudev/image/upload/v1547288127/logo_wtf.png" />

            {podcasts.map(podcast => (
              <div key={podcast.id}>
                <h3>
                  <span>{podcast.id}: </span>
                  {podcast.title}
                </h3>
                <audio controls src={podcast.url} />
              </div>
            ))}
          </section>
        </main>
      </React.Fragment>
    )
  }
}
