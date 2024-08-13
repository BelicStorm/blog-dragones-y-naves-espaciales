import { useEffect, useState } from "react";
import { Buffer } from 'buffer';
import { SpotifyIcon } from "./Icons";

const NOW_PLAYING_ENDPOINT = '';
const TOKEN_ENDPOINT = '';

const client_id = '';
const client_secret = '';
const refresh_token = ""


const getAccessToken = async (client_id: string, client_secret: string, refresh_token: string) => {
  //Creates a base64 code of client_id:client_secret as required by the API
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const paramsObj = {
    grant_type: 'refresh_token',
    refresh_token,
  };
  const searchParams = new URLSearchParams(paramsObj);
  //The response will contain the access token
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: searchParams.toString(),
  });

  return response.json();
};

const getNowPlaying = async () => {
  try {
    //Generating an access token
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

    //Fetching the response
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    // console.log(response);


    //If response status > 400 means there was some error while fetching the required information
    if (response.status > 400) {
      throw new Error('Unable to Fetch Song');
    } else if (response.status === 204) { //The response was fetched but there was no content
      throw new Error('Currently Not Playing')
    }

    //Extracting the required data from the response into seperate variables
    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((artist: any) => artist.name).join(', ');
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

    //Returning the song details
    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl
    };
  } catch (error: any) {
    // console.error('Error fetching currently playing song: ', error);
    return { error: true, msg: "Currently not playing any song" }
  }
};


const NowPlaying = () => {
  //Hold information about the currently playing song
  const [nowPlaying, setNowPlaying] = useState<any>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data)
    };

    //The spotify API does not support web sockets, so inorder to keep updating the currently playing song and time elapsed - we call the API every second
    setInterval(() => {
      fetchNowPlaying();
    }, 1000);
  }, []);

  let title, artists, albumImageUrl, artist, playerState = ""



  if (nowPlaying != null && nowPlaying.title) {
    //Converting the playback duration from seconds to minutes and seconds
    albumImageUrl = nowPlaying.albumImageUrl
    title = nowPlaying.title
    artist = nowPlaying.artist
  }
  else if (nowPlaying === 'Currently Not Playing' || nowPlaying?.error) { //If the response returns this error message then we print the following text in the widget
    playerState = 'OFFLINE'
    title = 'User is'
    artist = 'currently Offline'
  }
  else { //If the response wasn't able to fetch anything then we display this
    title = 'Failed to'
    artist = 'fetch song'
  }

 
  return (
    // <></>
    <div className="currentlyPlaying">
      <div className="title" style={{display:"flex", gap:"8px", alignItems:"center"}}><SpotifyIcon/>Currently playing:</div>
      <a className="spotifySpy" style={{ textDecoration: 'none' }} href={nowPlaying?.songUrl ?? ''}>
        <div><img src={albumImageUrl}></img></div>
        <div className="info">
          <p>{title}</p>
          <p>{artist}</p>
        </div>
      </a>
    </div>
  )
}

export default NowPlaying