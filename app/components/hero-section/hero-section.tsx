import css from "./hero.module.css"
const HeroSection=({props}:{props:string})=>{
  return(
    <section>
<div className={css.div}>
      <h1>{props}</h1>
      <h2>lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni obcaecati sunt cupiditate nihil fugiat, doloribus esse quidem, fuga aut accusantium maxime ad. Sequi odit exercitationem soluta dolores assumenda dolor? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa illum delectus sapiente iste enim incidunt labore ipsa in ullam dolore autem, voluptas distinctio. Optio eum omnis libero dolore velit nostrum.
      Aperiam odio consequuntur facere ut modi vero reprehenderit, veniam consectetur? Sint quos architecto doloremque officiis laborum neque atque animi minus earum, corrupti, officia expedita, omnis explicabo obcaecati a qui labore. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima mollitia impedit voluptatibus quas consectetur quam facere, nostrum quibusdam molestias, deserunt optio soluta veniam pariatur exercitationem recusandae autem, laudantium assumenda odit.</p>
    </div>
    <div className={css.container}>
    <div className={css.box}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem quidem quod. Rem impedit voluptatum soluta animi laudantium nobis sunt enim, hic, sit sint unde magni iusto deserunt eveniet accusamus. lorem </p> </div>
    <div className={css.box}><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem quidem quod. Rem impedit voluptatum soluta animi laudantium nobis sunt enim, hic, sit sint unde magni iusto deserunt eveniet accusamus. lorem </p></div>
    <div className={css.box}><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem quidem quod. Rem impedit voluptatum soluta animi laudantium nobis sunt enim, hic, sit sint unde magni iusto deserunt eveniet accusamus. lorem </p></div>
  </div>
  </section>
  )
}
export default HeroSection