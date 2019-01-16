import React from 'react'
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
        <style jsx global>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            width: 100%;
            margin: 0;
            padding: 16px;
          }
          main {
            margin: auto;
            text-align: center;
          }
          img {
            max-width: 250px;
            height: auto;
            margin: 32px auto;
          }
          div {
            padding-bottom: 16px;
          }
          span {
            color: #666;
          }
          h3 {
            font-weight: 400;
          }
        `}</style>

        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(a,b,c){var d=a.history,e=document,f=navigator||{},g=localStorage,h=encodeURIComponent,i=d.pushState,k=function(){return Math.random().toString(36)}, l=function(){return g.cid||(g.cid=k()),g.cid},m=function(r){var s=[];for(var t in r) r.hasOwnProperty(t)&&void 0!==r[t]&&s.push(h(t)+"="+h(r[t]));return s.join("&")}, n=function(r,s,t,u,v,w,x){var z="https://www.google-analytics.com/collect", A=m({v:"1",ds:"web",aip:c.anonymizeIp?1:void 0,tid:b,cid:l(),t:r||"pageview", sd:c.colorDepth&&screen.colorDepth?screen.colorDepth+"-bits":void 0,dr:e.referrer|| void 0,dt:e.title,dl:e.location.origin+e.location.pathname+e.location.search,ul:c.language? (f.language||"").toLowerCase():void 0,de:c.characterSet?e.characterSet:void 0, sr:c.screenSize?(a.screen||{}).width+"x"+(a.screen||{}).height:void 0,vp:c.screenSize&& a.visualViewport?(a.visualViewport||{}).width+"x"+(a.visualViewport||{}).height:void 0, ec:s||void 0,ea:t||void 0,el:u||void 0,ev:v||void 0,exd:w||void 0,exf:"undefined"!=typeof x&& !1==!!x?0:void 0});if(f.sendBeacon)f.sendBeacon(z,A);else{var y=new XMLHttpRequest; y.open("POST",z,!0),y.send(A)}};d.pushState=function(r){return"function"==typeof d.onpushstate&& d.onpushstate({state:r}),setTimeout(n,c.delay||10),i.apply(d,arguments)},n(), a.ma={trackEvent:function o(r,s,t,u){return n("event",r,s,t,u)}, trackException:function q(r,s){return n("exception",null,null,null,null,r,s)}}}) (window,"UA-30525085-10",{anonymizeIp:true,colorDepth:true,characterSet:true,screenSize:true,language:true});'
          }}
        />
      </React.Fragment>
    )
  }
}
