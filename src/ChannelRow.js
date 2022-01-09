import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

function ChannelRow({
  image,
  channelname,
  verified,
  subscribers,
  numberofvideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar
        className="channelRow_logo"
        src={image}
        alt={channelname}
      ></Avatar>
      <div className="channelRow_name_text">
        <h4>
          {channelname}

          {verified && <CheckCircleOutlinedIcon></CheckCircleOutlinedIcon>}
        </h4>
      
      <p>
        {subscribers} subscribers . {numberofvideos} videos
      </p>
      
      <p>
        {description}
      </p>
      </div>

    </div>
  );
}

export default ChannelRow;
