import React from 'react';
import './VideoRow.css';    

function VideoRow({views,subscribers,description,timestamp,channel,title,videoimage}) {
    return (
        <div className='videoRow'>
            <img src={videoimage} alt=''></img>

            <div className='videoRow_text'>
                <h3>{title}</h3>
                <p className='videoRow_headline'>
                    {channel} . <span className='videoRow_subs'>
                        <span className='videoRow_subscribers'>{subscribers}</span>  Subscribers
                        </span>{"  "}
                        
                        {views} Views . {timestamp}
                </p>
                <p className='videoRow_description'>{description}</p>
            </div>
            
        </div>
    )
}

export default VideoRow
