import React from 'react';
import './SearchPage.css';
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
            <TuneOutLinedIcon></TuneOutLinedIcon>
            <h2>Filter</h2>
            </div>
            <hr></hr>
            <ChannelRow
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g0IIQXN2z9T6t1q1CUcxq9pqPkA8re9_Qw&usqp=CAU"
            channelname="Skoolyana Channel"
            verified
            subscribers="786K"
            numberofvideos="202"
            description="This is the channel of Sunil Kulyana"            
            ></ChannelRow>           

        <hr></hr>
        
        <VideoRow
        views="440K"
        subscribers="659K"
        description="Priyanka Dancing to Bolloywood Tunes"
        timestamp="3 minutes ago"
        channel="Skoolyana"
        title="Priyanka Dance"
        videoimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEw3h8DfqkwGbA2EIhnUZQGAvR-jdPotZqAg&usqp=CAU">

        </VideoRow>
        
        <VideoRow
        views="430K"
        subscribers="759K"
        description="Esha Hot"
        timestamp="31 minutes ago"
        channel="Skoolyana"
        title="Esha Hot"
        videoimage="https://images.mid-day.com/images/images/2021/sep/esha-twenty-six-sept_d.jpg">
            
        </VideoRow>

        <VideoRow
        views="530K"
        subscribers="759K"
        description="Bipasha in Raaz"
        timestamp="51 minutes ago"
        channel="BestBollywood"
        title="Bipasha"
        videoimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv567Omz1Tp_1CSbDEhL-PVetn1EdeTQ7kFA&usqp=CAU">
            
        </VideoRow>

        <VideoRow
        views="40K"
        subscribers="79K"
        description="Lara Dutta in Bollywood"
        timestamp="31 minutes ago"
        channel="Skoolyana"
        title="Lara Dutta Bollywood"
        videoimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWJ66tFbli4fWj9fcI4v7_pq5PCRUBAg2mA&usqp=CAU">
            
        </VideoRow>

        <VideoRow
        views="430K"
        subscribers="759K"
        description="Dashing Raveena "
        timestamp="31 minutes ago"
        channel="Skoolyana"
        title="Dashing  Raveena"
        videoimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JTusNSAe6L7DiCsrF_MRPmXFxtESmphA3w&usqp=CAU">
            
        </VideoRow>
            





        </div>
    )
}

export default SearchPage
