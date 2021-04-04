import Head from 'next/head';
import Button from '../components/Button';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Michael. I'm a web developer certified by the University of Texas at San Antonio.</p>
        <p>
          (This is a sample website - you can build a site like this on{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headinglg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <Button text="I do nothing"></Button>
    </Layout>
  )
}