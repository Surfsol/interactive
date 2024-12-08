'use client'

interface VideoPlayerProps {
  src: string | undefined; // Video source URL
  poster?: string; // Thumbnail image
  className?: string; // Optional CSS classes for styling
}


const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className,
}) => {
  return (
    <div className={className}>
      <iframe
        width="100%"
        height="400px"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
