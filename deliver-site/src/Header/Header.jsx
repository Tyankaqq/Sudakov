import "./Header.css"
import Imf1 from"../assets/img1.png"
export function Header () {
  return(
    <>
      <div className={"mainframe"}>

        <div className={"Header"}>

          <div className={"img"}>
            <img src={Imf1} alt={}/>
          </div>

          <div>

            <div className={'catalog'}>
              <a href={} "Программы питания" />
              <a href={} "Бизнес ланчи"/>
              <a href={} "Gastro shop"/>
              <a href={} "О нас"/>
              <a href={} "Блог"/>
            </div>

            <div className={'button-language'}>
              <button>RU</button>
              <button>UA</button>
              <button>EN</button>
            </div>

          </div>

          <div className={"phone"}>
            <p>+38 (068) 949 - 49 - 19</p>
          </div>

        </div>

        <div className={"Detox"}>

          <div className={"Detox-header"}>

            <div className={"Detox-description"}>
            </div>

            <div className={"Detox-buy"}>
              <div>

              </div>

              <div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )

}