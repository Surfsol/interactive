'use client'

interface VideoPlayerProps {
  src: string; // Video source URL
  poster?: string; // Thumbnail image
  controls?: boolean; // Whether to show video controls
  autoPlay?: boolean; // Whether the video starts playing automatically
  loop?: boolean; // Whether the video loops
  muted?: boolean; // Whether the video is muted by default
  className?: string; // Optional CSS classes for styling
}


const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
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
