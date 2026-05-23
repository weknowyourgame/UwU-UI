# Video Showcase

> A video showcase component.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Video Showcase Example](#video-showcase-example)
- [Understanding the component](#understanding-the-component)
- [Credits](#credits)
- [Props](#props)

Example:

```tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface VideoShowcaseProps {
	videoSrc: string;
	thumbnailSrc?: string;
	className?: string;
}

 const VideoShowcase = ({
	videoSrc,
	thumbnailSrc,
	className = "",
}: VideoShowcaseProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const modalVideoRef = useRef<HTMLVideoElement>(null);

	const handlePlayClick = () => {
		setIsModalOpen(true);
	};

	// Handle escape key to close modal
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsModalOpen(false);
			}
		};

		window.addEventListener("keydown", handleEsc);

		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, []);

	// Play video when modal opens
	useEffect(() => {
		if (isModalOpen && modalVideoRef.current) {
			modalVideoRef.current.play();
		}
	}, [isModalOpen]);

	// Ensure video autoplays when component mounts
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play().then(() => {
				setIsVideoPlaying(true);
			}).catch((error) => {
				console.log('Autoplay prevented:', error);
			});
		}
	}, []);

	// Handle video play events
	const handleVideoPlay = () => {
		setIsVideoPlaying(true);
	};

	const handleVideoPause = () => {
		setIsVideoPlaying(false);
	};

	return (
		<div className="py-14 sm:px-0 px-4">
			<div className="bg-muted/40 rounded-lg p-2 max-w-3xl mx-auto">
				<div className="flex flex-row justify-start items-center gap-2 p-2">
					<span className="relative flex h-4 w-4">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
					</span>
					<span className="relative flex h-4 w-4">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
					</span>
					<span className="relative flex h-4 w-4">
						<span className="absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
					</span>
				</div>
				<div
					className={`relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden ${className}`}
				>
					{/* Glitch effect container */}
					<div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
						{/* Autoplay video */}
						<video
							ref={videoRef}
							src={videoSrc}
							poster={thumbnailSrc}
							className="w-full h-full object-cover cursor-pointer"
							muted
							autoPlay
							loop
							playsInline
							preload="auto"
							onClick={handlePlayClick}
							onPlay={handleVideoPlay}
							onPause={handleVideoPause}
							aria-describedby="video-description"
						>
							<track
								kind="captions"
								label="No captions needed"
								srcLang="en"
								default
							/>
							Your browser does not support the video tag.
						</video>
						<span id="video-description" className="sr-only">
							Demonstration video showing how the waitlist works. No captions
							are necessary as this is primarily a visual demo with no speech.
						</span>

						{/* Click to expand overlay - only show when video is not playing */}
						{!isVideoPlaying && (
							<div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
								onClick={handlePlayClick}
							>
								{/* Expand icon */}
								<motion.div
									className="relative w-16 h-16 bg-[#e5ff00] rounded-full flex items-center justify-center mb-4 z-10"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									aria-label="Expand video to full screen"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="black"
										className="w-8 h-8"
										aria-hidden="true"
									>
										<title>Expand Icon</title>
										<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
									</svg>
								</motion.div>

								{/* Text below the expand button */}
								<p className="text-gray-300 text-sm">Click to expand</p>
							</div>
						)}

						{/* CRT scan lines effect */}
						<div
							className="absolute inset-0 pointer-events-none"
							style={{
								background:
									"linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 51%, transparent 52%)",
								backgroundSize: "100% 4px",
							}}
						/>

						{/* Chromatic aberration edges */}
						<div
							className="absolute inset-0 pointer-events-none opacity-70"
							style={{
								boxShadow:
									"inset 0 0 50px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(255, 0, 0, 0.3), inset 0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 20px rgba(0, 0, 255, 0.3)",
							}}
						/>
					</div>
				</div>

				{/* Video Modal */}
				<AnimatePresence>
					{isModalOpen && (
						<motion.div
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsModalOpen(false)}
						>
							<motion.div
								className="relative w-full max-w-5xl mx-4 rounded-lg overflow-hidden"
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.8, opacity: 0 }}
								transition={{ type: "spring", damping: 25 }}
								onClick={(e) => e.stopPropagation()}
							>
								{/* Close button */}
								<button
									className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
									onClick={() => setIsModalOpen(false)}
									aria-label="Close video"
									type="button"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<title>Close Icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>

								{/* Video player */}
								<div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
									<video
										ref={modalVideoRef}
										src={videoSrc}
										className="w-full h-full"
										controls
										playsInline
										muted
										onEnded={() => setIsModalOpen(false)}
									>
										<track
											kind="captions"
											label="No captions needed"
											srcLang="en"
											default
										/>
										Your browser does not support the video tag.
									</video>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default VideoShowcase;
```

## Installation

{/* Coming soon */}

## Usage

### Video Showcase Example

```tsx
import VideoShowcase from "@/components/video-showcase";

export default function Example() {
  return <VideoShowcase />;
}
```

## Understanding the component

The video showcase component is a component that displays a video and a thumbnail.

## Credits

By Sarthak Kapila.

## Props

| Prop | Type | Default | Description |
|----------|----------|----------|----------|
| className | `string` | - | Optional class name on the root container. |
| thumbnailSrc | `string` | - | Source of the thumbnail. |
| videoSrc | `string` | - | Source of the video. |

---

*This documentation is also available in [interactive format](https://uwuui.com/docs/components/components/card/video-showcase).*