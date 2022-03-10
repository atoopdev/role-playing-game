const adData = {
    facebook: {
        site: 'Facebook',
        adViews: 23400,
        clicks: 210,
        conversions: 5,
    },
    twitter: {
        site: 'Twitter',
        adViews: 23400,
        clicks: 192,
        conversions: 9,
    },
    instagram: {
        site: 'Instagram',
        adViews: 23400,
        clicks: 200,
        conversions: 2,
    }
}

class AdvertisingChannel{
    constructor(data){
        Object.assign(this, data)
        this.conversionRate = (this.conversions/this.clicks * 100).toFixed(1)
    }

    getAdvertisingChannelHTML(){
        const {site, adViews, clicks, conversions, conversionRate} = this
        return `<div class="site-name"> ${site} </div>
        <div>Views: ${adViews} </div>
        <div>Clicks: ${clicks} </div>
        <div>Conversions: ${conversions} </div>
        <div>Conv. Rate: <span class="highlight"> ${conversionRate} %</span></div>`

    }
}
const advertFacebook = new AdvertisingChannel(adData.facebook)
const advertTwitter = new AdvertisingChannel(adData.twitter)
const advertInstagram = new AdvertisingChannel(adData.instagram)

document.getElementById('fb').innerHTML = advertFacebook.getAdvertisingChannelHTML()
document.getElementById('twit').innerHTML = advertTwitter.getAdvertisingChannelHTML()
document.getElementById('insta').innerHTML = advertInstagram.getAdvertisingChannelHTML()
