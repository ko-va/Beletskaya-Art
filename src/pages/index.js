import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    title: 'Kabuki Girl',
    desc: 'Kabuki girl don\'t say sayanaro',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    title: 'High Up',
    desc: 'Lift me up',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    title: 'Any time ',
    desc: 'Can draw flowers any time',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    title: 'Curios eye',
    desc: 'Be the curios one',
    availability: 'SOLD',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    title: 'Herbal tea',
    desc: 'Tea anyone?',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    title: 'True face',
    desc: 'Honestly, I have no make up on',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/09.jpg'),
    thumbnail: require('../assets/images/thumbs/09.jpg'),
    title: 'Moment',
    desc: 'Be one with the moment',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/10.jpg'),
    thumbnail: require('../assets/images/thumbs/10.jpg'),
    title: 'Serenity',
    desc: 'Be one with the purity',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/11.jpg'),
    thumbnail: require('../assets/images/thumbs/11.jpg'),
    title: 'Keep  calm',
    desc: 'Big calm guy',
    availability: 'SOLD',
  },
  {
    src: require('../assets/images/fulls/12.jpg'),
    thumbnail: require('../assets/images/thumbs/12.jpg'),
    title: 'Nature',
    desc: 'Be one with the nature',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/13.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    title: 'Raspberry',
    desc: 'As soft as a kitten\'s feet',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/14.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    title: 'High Mountains',
    desc: 'Be one with the mountains',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/15.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    title: 'Bluebells',
    desc: 'Bluebells are blue, roses are red',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/16.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    title: 'Space',
    desc: 'Be one with the space',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/17.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    title: 'Secrets',
    desc: 'I know what you don\'t',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/18.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    title: 'Throught the space',
    desc: 'Into the thick of it',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/19.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    title: 'Peace',
    desc: 'I am not afraid anymore',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/20.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    title: 'Give away',
    desc: 'Be one with the empathy',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/21.jpg'),
    thumbnail: require('../assets/images/thumbs/09.jpg'),
    title: 'Life',
    desc: 'Seemingly insignificant moments',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/22.jpg'),
    thumbnail: require('../assets/images/thumbs/10.jpg'),
    title: 'Audacity',
    desc: 'Just do it',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/23.jpg'),
    thumbnail: require('../assets/images/thumbs/11.jpg'),
    title: 'Conscious',
    desc: 'Be one with the self',
    availability: 'SOLD',
  },
  {
    src: require('../assets/images/fulls/24.jpg'),
    thumbnail: require('../assets/images/thumbs/12.jpg'),
    title: 'Smoke ring',
    desc: 'Vey peaceful to look at',
    availability: 'SOLD',
  },
  {
    src: require('../assets/images/fulls/25.jpg'),
    thumbnail: require('../assets/images/thumbs/12.jpg'),
    title: 'Smoke',
    desc: 'My eyes are about to tear up',
    availability: 'Available',
  },
  {
    src: require('../assets/images/fulls/26.jpg'),
    thumbnail: require('../assets/images/thumbs/12.jpg'),
    title: 'Wild rose',
    desc: 'Be one with the nature',
    availability: 'Available',
  },
];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
