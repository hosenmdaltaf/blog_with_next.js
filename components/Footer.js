

import Link from 'next/link'; 

const Footer = () => {
  return (
    <footer>
      

      <Link href="https://www.altafhosen.com/" passHref={true}>
          <a >Copyright 2021 Hosen MD Altaf</a>
      </Link>

    </footer>
  );
}
 
export default Footer;