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
import { themeVar } from '@/utils/theme';
import { RealmName } from '@/types/items';
import styled from '@emotion/styled';
import React from 'react';
interface Props {
  type: RealmName;
}

function CardIcon({ type }: Props) {
  const Icon: Record<RealmName, any> = {
    ['연극']: Theater,
    ['음악']: Music,
    ['무용']: Dancing,
    ['미술']: Culture,
    ['건축']: Construct,
    ['영상']: Video,
    ['문학']: Literature,
    ['문화정책']: Festival,
    ['축제문화공간']: Space,
    ['기타']: Etc,
  };

  const IconEl = Icon[type] ?? Etc;

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
