import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'qg2n6pht',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skbJR2ZISlcOIrZU9kRoid0epoLAnYpEs3J49me01hwVYY0hn5OWW4I0at3LyTi7bkTDcKgeuxOrJ5fbtYwf4eegmffaSVIOn1DQSMjzJsoYtvdfaf1iOt5WxACWNn8K3zqCsIMEuLjRZ7BphnIaFqvpAH3UzXw0uQApEle53Zy9uwPsTFDk',
  useCdn: false,
})