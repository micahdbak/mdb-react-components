import React, { useState, useEffect } from 'react';

import { Button } from '../../Button';
import * as Flex from '../../Flex';
import * as Icon from '../../Icon';
import { classList } from '../../helpers';

import './Slideshow.css';

/**
 * Gallery of photos as a slideshow.
 * @param {object} props
 * @param {array} props.photos - File paths to full-resolution photos
 * @param {array} props.thumbnails - File paths to photo thumbnails
 * @param {boolean} props.showControls - Whether to show or not show controls
 * @param {boolean} props.showCounter - Whether to show or not show the counter
 * @param {boolean} props.noSlide
 *  - Whether to not slide through photos automatically
 * @param {integer} props.pace - Pace to slide through photos (ms)
 * @param {object} props.className - Additional classes
 * @param {object} props.style - Additional styles
 */
export function Slideshow(props) {
  const {
    photos,
    thumbnails,
    showControls,
    showCounter,
    noSlide,
    pace,
    className,
    style
  } = props;

  const [selected, setSelected] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [playing, setPlaying] = useState(true);

  function slide() {
    setPlaying(prevPlaying => {
      // only slide if playing
      if (prevPlaying) {
        setSelected(prevSelected => {
          let newSelected = prevSelected + 1;

          if (newSelected >= photos.length)
            newSelected = 0;

          return newSelected;
        });
      }

      // don't update playing
      return prevPlaying;
    });
  }

  function togglePlaying() {
    setPlaying(!noSlide && !playing ? true : false);
  }

  useEffect(() => {
    setPhoto(thumbnails[selected]);

    // wait for the full resolution photo to load before updating photo
    const fullResPhoto = new Image();
    fullResPhoto.src = photos[selected];
    fullResPhoto.onload = () => setPhoto(photos[selected]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    let intervalId = null;

    if (!noSlide)
      intervalId = setInterval(slide, pace || 5000);

    return () => {
      if (intervalId !== null)
        clearInterval(intervalId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const controls = (
    <Flex.Container
      flow='row nowrap'
      alignItems='center'
      gap='4px'
      className='controls'
    >
      {showControls && !noSlide ? (
        <Button
          className='small transparent icon'
          style={{ padding: '6px' }}
          onClick={togglePlaying}
        >
          {playing ? <Icon.Pause /> : <Icon.Play />}
        </Button>
      ) : []}
      {showControls ? (
        <Button
          className={
            classList(['small transparent icon', playing ? 'disabled' : ''])
          }
          style={{ padding: '6px' }}
          onClick={() => {
            if (playing)
              return;

            setSelected(selected > 0 ? selected - 1 : selected);
          }}
        >
          <Icon.Arrow style={{ transform: 'rotate(90deg)' }} />
        </Button>
      ) : []}
      {showCounter ? (
        <p style={{ margin: '0 8px', fontSize: '10pt' }}>
          {selected + 1} / {photos.length}
        </p>
      ) : []}
      {showControls ? (
        <Button
          className={
            classList(['small transparent icon', playing ? 'disabled' : ''])
          }
          style={{ padding: '6px' }}
          onClick={() => {
            if (playing)
              return;

            setSelected(selected < photos.length - 1 ? selected + 1 : selected);
          }}
        >
          <Icon.Arrow style={{ transform: 'rotate(-90deg)' }} />
        </Button>
      ) : []}
    </Flex.Container>
  );

  return (
    <div
      className={classList(['mdb-gallery-slideshow', className])}
      style={style}
    >
      <img src={photo} alt={selected} />
      {showControls || showCounter ? controls : []}
    </div>
  );
}
