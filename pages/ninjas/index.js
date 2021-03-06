import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('https://altaf-blog-api.herokuapp.com/');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Blog posts</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.title }</h3>
            {/* <h3>{ ninja.name }</h3> */}
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;
