import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://i.seadn.io/gae/WhSILinNTNtrWedRU-1KGxpgT9wkJIzI8dQW02iNqeGwgzd12eypzE6emG-1iBShmj37cwHhMNTzAngcQ1ECcZ8CEvyq-psc_LQsxQ?w=500&auto=format')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#71717a] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`, 
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#5ac69f] rounded-lg mr-5 text-white hover:bg-[#80d3b5] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#3f3f46] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#52525b] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Homepage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell marvelous NFTs
            </div>
            <div className={style.description}>
              Mintfy is the highest end NFT Markeplace in the world
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://i.seadn.io/gae/WhSILinNTNtrWedRU-1KGxpgT9wkJIzI8dQW02iNqeGwgzd12eypzE6emG-1iBShmj37cwHhMNTzAngcQ1ECcZ8CEvyq-psc_LQsxQ?w=500&auto=format"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://i.seadn.io/gae/-J9HrpYDJbAEzOSe18Z_RWPivA7_jFw7kfiVi3fzaRbRjuOTc7zNJ_mRHhwGDXbq08oeC2WYrYiaZnmSiwgCoAxIMrnxy07bZq0XyA?w=500&auto=format"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Green Watercolor</div>
                <a
                  className="text-[#5ac69f]"
                  href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/54200551672689254812263585681251710388827705445677363635990318143686836224001"
                >
                  Mo's Watercolors
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage