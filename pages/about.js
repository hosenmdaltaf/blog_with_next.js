// import Head from 'next/head'

// const About = () => {
//   return (
//     <>
//       <Head>
//         <title>Ninja List | About</title>
//         <meta name="keywords" content="ninjas"/>
//       </Head>
//       <div>
//         <h1>About</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
//       </div>
//     </>
//   );
// }
 
// export default About;


export default function Aboutseaction() {
  return (
 
          
          <div id="about" className="about-seaction">

              <div className="detils">
              <h1 className=" title-for-all-header">Who am I</h1>
              <p>Hello! I'm Altaf, a passionate Software Engineer from Bangladesh,currently studing in China. who's experienced
                  in taking fullstack applications from scratch to production.</p>
              <p> I'm currently attending Henan University Of Technology,  as
                      a Software Engineering student and working at python based FullStack Web development,I am  eager to learn kew technologies and
                      looking for new opportunitys.</p>
              <p>Over the last 2 years, I've had the opportunity to develop for a handful of awesome companies / clients as a
                  consultant and continue to do so today.
                  My work includes developing  fullstack web apps, creating backend servers,designing font-end application,
                  small Big-data and data science projects,creating websites with wordpress.</p>
                  <p>Here are a few technologies I've been working with recently:</p>

                  <div className="skill-list">
                      <ul>
                          <div>
                          <li><i className='bx bx-caret-right'></i>Python</li>
                          <li><i className='bx bxs-chevron-right'></i>JavaScript</li>
                          <li><i className='bx bxs-chevron-right'></i>html & css</li>
                          </div>

                          <div >
                          <li><i className='bx bxs-chevron-right'></i>Django</li>
                          <li><i className='bx bxs-chevron-right'></i>React</li>
                          <li><i className='bx bxs-chevron-right'></i>Bootstrap</li>
                          </div>

                  <div className="">
                      <li><i className='bx bxs-chevron-right'></i>SQl</li>
                      <li><i className='bx bxs-chevron-right'></i>Git</li>
                      <li><i className='bx bxs-chevron-right'></i>Wordpress</li>
                      </div>
                  </ul>
              </div>

      </div>

          <img className="about-img" src="aa.jpg"  alt="altaf" />
      </div>




  )
}
