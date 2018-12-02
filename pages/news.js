// This is the Link API
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

//Name of news related Source
const source = 'Business';

const apikey = 'b63ca222c0744b1b9a3fd6d6e4392d59'
//Include any news api from the link
const url = 'https://newsapi.org/v2/everything?sources=financial-post&apiKey=b63ca222c0744b1b9a3fd6d6e4392d59'

// Pass this content as 'props' to child components
const News = props => (
    <div>
        <h2>News from {source.split("-").join(" ")}</h2>
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

News.getInitialProps = async function() 
{
  const res = await fetch(url);

  const data = await res.json();

 console.log(`Show data fetched. Count: ${data.articles.length}`);

  return {
    articles: data.articles
  }
}
export default News;
