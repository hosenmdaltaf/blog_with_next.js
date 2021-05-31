// import Image from 'next/image'

export const getStaticPaths = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('https://altaf-blog-api.herokuapp.com/postList');

  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  // const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const res = await fetch('https://altaf-blog-api.herokuapp.com/postDetail/' + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ ninja.title }</h1>
      {/* <Image src={ ninja.image }  alt="site logo" width={128} height={77} /> */}
      <p>{ ninja.content }</p>
      
      <p>{ ninja.author}</p>

      
    </div>


  );
}

export default Details;