import ErnstPortrait from "./Gallery";

function Header(){
  return(
      <section>
        <p>Welcome to the Ernst Behrend Gallery! This gallery is full of nothing but Ernst Behrend's wonderful portrait. You <em>definitely</em> shouldn't click any other link. </p>
      </section>
  )
}

export default function Gallery(){
  return(
      <section>
          <Header/>
          <ul>
              <li><ErnstPortrait/></li>
              <li><ErnstPortrait/></li>
              <li><ErnstPortrait/></li>
          </ul>
      </section>
  );
}
