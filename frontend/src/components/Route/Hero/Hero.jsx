import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    // <div
    //   className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    //   style={{
    //     backgroundImage:
    //       "url(https://devcomputer.co.in/wp-content/uploads/2022/04/1.jpg.png)",
    //   }}
    // >
    //   <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
    //     <h1
    //       className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
    //     >
    //       Best Collection for <br /> home Decoration
    //     </h1>
    //     <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
    //       assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
    //       quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
    //       <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
    //     </p>
    //     <Link to="/products" className="inline-block">
    //         <div className={`${styles.button} mt-5`}>
    //              <span className="text-[#fff] font-[Poppins] text-[18px]">
    //                 Shop Now
    //              </span>
    //         </div>
    //     </Link>
    //   </div>
    // </div>

    

<section class="bg-gray-900 text-white">
  <div
  className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
       style={{
         backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
         backgroundImage:
           "url(https://cdn.discordapp.com/attachments/1097096248173006920/1203663700201054238/1629451246311.webp?ex=65d1ea2d&is=65bf752d&hm=51ff43cf8d42fa6dec646f81886e1cff0f955bf11eed24aef59796ca2d4f0302&)",
      }}
    // class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">








      <h1
        class="text-black text-3xl font-extrabold  sm:text-5xl"
      >
        From Gaming To Education
LAPTOPS & COMPUTERS



        <span class="sm:block"> </span>
      </h1>

      <p class="mx-auto text-black mt-4 max-w-xl sm:text-xl/relaxed">
      The best quality latest systems for all kind of requirements
      </p>



      <div class="mt-8 flex flex-wrap justify-center gap-4">
         <Link to="/products" className="inline-block">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Shop Now
        </a>
</Link>

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="https://www.artworkarchive.com/blog"
        >
          Learn More
        </a>
        
         

      </div>



    </div>
  </div>


 <div className='bg-[url("https://cdn.discordapp.com/attachments/1097096248173006920/1203668492621062184/Screenshot_2024-02-04_at_5.18.18_PM.png?ex=65d1eea3&is=65bf79a3&hm=9e0bacfcd446622e074113abdaa4fd9b6dc304c7ab07e05ebdc854d35acb42a6&")] h-96 w-full bg-cover bg-center p-20'>
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-2 text-4xl text-white font-bold text-center">
                UPDATE YOUR SECURITY

WITH LATEST TECHNOLOGY
                </h1>
                {/* <p className="text-lg text-center text-white">
                  "Inspiring Minds, One Brushstroke at a Time"
                </p> */}
                <div className="mt-4">
                    <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
                        Get started
                    </button>
                </div>
            </div>
        </div>





</section>


  );
};

export default Hero;
