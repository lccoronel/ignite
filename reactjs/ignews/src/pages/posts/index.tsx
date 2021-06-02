import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia provident repudiandae, 
              voluptates nihil aperiam expedita repellat ipsam cum tenetur nobis, molestiae, repellendus quos. 
              Accusantium repellendus quas ipsam! Earum, sint.
            </p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia provident repudiandae, 
              voluptates nihil aperiam expedita repellat ipsam cum tenetur nobis, molestiae, repellendus quos. 
              Accusantium repellendus quas ipsam! Earum, sint.
            </p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia provident repudiandae, 
              voluptates nihil aperiam expedita repellat ipsam cum tenetur nobis, molestiae, repellendus quos. 
              Accusantium repellendus quas ipsam! Earum, sint.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response);

  return {
    props: {

    }
  }
}