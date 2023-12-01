import axios from 'axios'
import { useState } from 'react'

export const useInstagram = async (access_token: string) => {
  const [mediaURLs, setMediaURLs] = useState([])
  const instaAPIVersion = 'v18.0'
  const selfEndPoint = '/me'
  const mediaIDFields = "media"
  const mediaURLFields = "media_url"
  const instaGraphBaseURL = `https://graph.instagram.com`
  const instaMediaIDURL = `${instaGraphBaseURL}/${instaAPIVersion}/${selfEndPoint}?fields=${mediaIDFields}&access_token=${access_token}`

  const mediaIDs = await axios.get(instaMediaIDURL)
    .then(res => {
      console.log(`===== MEDIA ID REQUEST ====`)
      console.log(JSON.stringify(res))
      if (res.data) return res.data.data
    })

  const getUrlFromIDs = async (id: string, index: number) => {
    const instaGraphMediaURL = `${instaGraphBaseURL}/${instaAPIVersion}/${id}?fields=${mediaURLFields}&access_token=${access_token}`
    return await axios.get(instaGraphMediaURL)
      .then(res => {
        console.log(JSON.stringify(res.data))
        return res.data.media_url
      })
  }
  setMediaURLs(mediaIDs.map(getUrlFromIDs))
  console.log(`MEDIA IDS ======`)
  console.log(JSON.stringify(mediaURLs))
  return mediaURLs
}