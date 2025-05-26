import { useCountriesQuery } from "../generated/graphql-types"
import "../App.css"
export default function HomePage() {

  const { data, } = useCountriesQuery()

  const dataCountries = data?.countries.filter(country => country.continent !== null)

  console.log("data:", dataCountries)


  return (<>
    <section className="cardCountries">

      {dataCountries?.map(c => (
        <article className="countries">
          <div key={c.id} />
          <div>
            {c.name}
          </div>
          <div>
            {c.emoji}
          </div>
        </article>
      ))}
    </section>
  </>)
}