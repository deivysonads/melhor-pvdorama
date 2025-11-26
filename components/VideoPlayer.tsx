import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lite-video-player': any;
    }
  }
}

const VideoPlayer: React.FC = () => {
  return (
    <div className="w-full max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,44,158,0.3)] border border-white/10">
      {/* @ts-ignore */}
      <lite-video-player 
        video-id="7355bd3c-7736-4da4-8745-0719cc748e33" 
        aspect-ratio="9:16" 
        base-url="https://app.litevideo.net" 
        params="aspectRatio=9%3A16&coverColor=%23470b22&progressSpeed=fast&progressBarHeight=8&showCover=true&coverStyle=gradient&playIconStyle=square&playIconSize=xlarge&showTitle=true&showControls=false&showProgressBar=true&iconColor=%23ee00ff&progressBarColor=%23c42180&controlsStyle=default&controlsPosition=bottom&controlsColor=%23ffffff&controlsBackground=gradient&hoverEffect=fade&autoPlay=true&loop=false&liveSimulatorEnabled=false&liveSimulatorViewersMin=10&liveSimulatorViewersMax=50&liveSimulatorGrowthRate=moderate&domainLockEnabled=true&domainLockDomains=zap1.123entrou.com%2Czap2.123entrou.com%2Cdireto.123entrou.com%2Cpv.cinefytv.site%2Cemily%2Ccinefytv.site%2Cthayna.cinefytv.site&showComments=false"
      />
    </div>
  );
};

export default VideoPlayer;