// This is the Link API
import Link from 'next/link';
import fetch from 'isomorphic-unfetch' 

const source = 'News';

const apikey = 'b63ca222c0744b1b9a3fd6d6e4392d59'
//Include any news api from the link
const url = 'https://newsapi.org/v2/top-headlines?sources=time&apiKey=b63ca222c0744b1b9a3fd6d6e4392d59'

// Pass this content as 'props' to child components
const Index = props => (
  <div>
      <h2>General {source.split("-").join(" ")}</h2>
      <div>
        {props.articles.map(article => (
          <section>
            <h3>{article.title}</h3>
            <p className="author">{article.author} {article.publishedAt}</p>
            <img src={article.urlToImage} alt="article image" className="img-article"></img>
            <p>{article.descritpion}</p>
            <p>{article.content}</p>
            <p><Link href={article.url}>Read More</Link></p>
          </section>
        ))}
      </div>

      <style jsx>{`
        section {
          width: 50%
          border: 1px solid gray;
          background-color: rgb(240, 248, 255)
          padding: 1em;
          margin: 1em;
        }

        .author {
          font-style: italic
          font-size: 0.8em;
        }

        .img-article {
          height: auto;
          max-width: 100%;
        }
        
      `}</style>
  </div>
);

// see https://nextjs.org/learn/basics/fetching-data-for-pages

Index.getInitialProps = async function() {
  const res = await fetch(url);

  const data = await res.json();

 console.log(`Show data fetched. Count: ${data.articles.length}`);

  return {
    articles: data.articles
  }
}

export default Index