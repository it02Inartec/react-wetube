import React from 'react';
import { Video } from './Video';

export const Results = ({ videos }) => {
    return (
        <div className="search-result">
            {
                videos.map( ( video ) => {
                    return (
                        <Video
                            key={ video.id.videoId }
                            title={ video.snippet.title }
                            dateAdded={ video.snippet.publishedAt }
                            channel={ video.snippet.channelTitle }
                            thumbnail={ video.snippet.thumbnails.medium.url }
                            description={ video.snippet.description }
                        />
                    )
                })
            }
        </div>
    )
}
