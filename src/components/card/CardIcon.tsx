import Construct from '@/img/construct_icon.svg';
import Culture from '@/img/culture_icon.svg';
import Dancing from '@/img/dancing_icon.svg';
import Etc from '@/img/etc_icon.svg';
import Festival from '@/img/festival_icon.svg';
import Literature from '@/img/literature_icon.svg';
import Music from '@/img/music_icon.svg';
import Space from '@/img/space_icon.svg';
import Theater from '@/img/theater_icon.svg';
import Video from '@/img/video_icon.svg';
import { themeVar } from '@/lib/theme';
import styled from '@emotion/styled';
import React from 'react';

type IconType =
  | 'construct'
  | 'culture'
  | 'dancing'
  | 'etc'
  | 'festival'
  | 'literature'
  | 'music'
  | 'space'
  | 'theater'
  | 'video';

interface Props {
  type: IconType;
}

function CardIcon({ type }: Props) {
  const Icon: Record<IconType, any> = {
    construct: Construct,
    culture: Culture,
    dancing: Dancing,
    etc: Etc,
    festival: Festival,
    literature: Literature,
    music: Music,
    space: Space,
    theater: Theater,
    video: Video,
  };

  const IconEl = Icon[type];

  return (
    <Container>
      <IconEl />
    </Container>
  );
}

const Container = styled.span`
  color: ${themeVar.on_background};
`;

export default CardIcon;
