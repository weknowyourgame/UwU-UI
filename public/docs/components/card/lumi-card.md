# Lumi Card

> A lumi card with a lumi effect.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Lumi Card Example](#lumi-card-example)
- [Understanding the component](#understanding-the-component)
- [Credits](#credits)
- [Props](#props)

Example:

```tsx
import React from 'react';
import styled from 'styled-components';

type CardProps = {
  title?: string;
  subtitle?: string;
  footerLabel?: string;
  className?: string;
  imageUrl?: string;
  videoUrl?: string;
};

const LumiCard: React.FC<CardProps> = ({
  title,
  subtitle,
  footerLabel,
  className,
  imageUrl,
  videoUrl,
}) => {
  return (
    <StyledWrapper className={className}>
      <div className="main-container">
        <div className="border">
          <div className="card">
            <div className="shadow">
              <div className="content">
                {imageUrl || videoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="bg-image" src={imageUrl} alt={title ?? "project"} />
                ) : null}
                {videoUrl ? (
                  <video className="bg-image" src={videoUrl} autoPlay loop muted playsInline />
                ) : null}
                <div className="overlay" data-footer={footerLabel}>
                  <div className="overlay-inner">
                    <p className="ov-title">{title}</p>
                    <p className="ov-sub">{subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .main-container {
    font-family: "Trebuchet MS", sans-serif;
    position: relative;
    height: 203px;
    aspect-ratio: 1.579;
    border-radius: 1em;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms ease-in;
  }
  .main-container:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 24px 60px rgba(0,0,0,0.45);
  }

  .border {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    background: linear-gradient(
      115deg,
      rgba(0, 0, 0, 0.33) 12%,
      rgba(255, 255, 255, 0.33) 27%,
      rgba(255, 255, 255, 0.33) 31%,
      rgba(0, 0, 0, 0.33) 52%
    );
  }

  .border:hover:after {
    position: absolute;
    content: " ";
    height: 50em;
    aspect-ratio: 1.58;
    border-radius: 1em;
    background: linear-gradient(
      115deg,
      rgba(0, 0, 0, 1) 42%,
      rgba(255, 255, 255, 1) 47%,
      rgba(255, 255, 255, 1) 51%,
      rgba(0, 0, 0, 1) 52%
    );
    animation: rotate 4s linear infinite;
    z-index: 1;
    opacity: 0.05;
  }

  .card {
    height: 12.5em;
    aspect-ratio: 1.586;
    border-radius: 1em;
    background: transparent;
    opacity: 1;
  }

  .shadow {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.85em;
    border: 1px solid #bbb;
    background:
      radial-gradient(
          circle at 100% 100%,
          #ffffff 0,
          #ffffff 8px,
          transparent 8px
        )
        0% 0%/13px 13px no-repeat,
      radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 8px, transparent 8px)
        100% 0%/13px 13px no-repeat,
      radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 8px, transparent 8px)
        0% 100%/13px 13px no-repeat,
      radial-gradient(circle at 0 0, #ffffff 0, #ffffff 8px, transparent 8px) 100%
        100%/13px 13px no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 10px)
        calc(100% - 26px) no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 26px)
        calc(100% - 10px) no-repeat,
      linear-gradient(
        135deg,
        rgba(3, 3, 3, 0.5) 0%,
        transparent 22%,
        transparent 47%,
        transparent 73%,
        rgba(0, 0, 0, 0.5) 100%
      );
    box-sizing: border-box;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 0.6em;
    border: 1px solid rgba(255,255,255,0.15);
    box-shadow: 0 1px 12px rgba(0,0,0,0.35) inset;
    transform: translate(-50%, -50%);
    height: 12em;
    aspect-ratio: 1.604;
    background: transparent;
  }

  .bg-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.55em;
    filter: brightness(0.7) contrast(1.05) saturate(1.05);
    z-index: 0;
  }

  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.65em 0.8em 0.8em 0.8em;
    background: linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(2,6,23,0.55) 30%, rgba(2,6,23,0.85) 100%);
    transform: translateY(35%);
    opacity: 0;
    transition: transform 300ms ease, opacity 300ms ease, background 300ms ease;
    z-index: 2;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    pointer-events: none;
  }

  .card:hover .overlay,
  .content:hover .overlay,
  .main-container:hover .overlay {
    transform: translateY(0%);
    opacity: 1;
  }

  .overlay-inner {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }

  .ov-title {
    margin: 0;
    color: #f8fafc;
    font-size: 1.05em;
    line-height: 1.25;
    text-shadow: 0 1px 2px rgba(0,0,0,0.45);
  }

  .ov-sub {
    margin: 0;
    color: rgba(226,232,240,0.85);
    font-size: 0.72em;
    line-height: 1.25;
  }

  .chip {
    display: none;
  }

  @keyframes rotate {
    0% {
      transform: translate(-25em, -15em);
    }
    20% {
      transform: translate(25em, 15em);
    }
    100% {
      transform: translate(25em, 15em);
    }
  }
`;

export default LumiCard;
```

## Installation

{/* Coming soon */}

## Usage

### Lumi Card Example

```tsx
import LumiCard from "@/components/lumi-card";

export default function Example() {
  return (
    <LumiCard
          title={"UwU UI"}
          subtitle={"Cool UI components"}
          footerLabel={"github"}
          imageUrl={"/logo.png"}
          videoUrl={"/demo-vid.mp4"}
        />
  )
}
```

## Understanding the component

The card uses a subtle elevation shadow that collapses on press, creating a tactile feel. Motion is powered by a spring animation for a responsive interaction.

## Credits

By Sarthak Kapila.

## Props

| Prop | Type | Default | Description |
|----------|----------|----------|----------|
| title | `string` | - | Title of the card. |
| subtitle | `string` | - | Subtitle of the card. |
| footerLabel | `string` | - | Footer label of the card. |
| imageUrl | `string` | - | Image URL of the card. |
| videoUrl | `string` | - | Video URL of the card. |

---

*This documentation is also available in [interactive format](https://uwuui.com/docs/components/components/card/lumi-card).*