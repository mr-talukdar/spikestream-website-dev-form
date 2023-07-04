import  {HOME_ICONS } from "../../../images";

const Navbar=()=>{  


    return(
        <div className="absolute top-5 right-5 tablet:top-8 tablet:right-8 laptop:top-10 laptop:right-10 bg-no-repeat">
          <div className="flex flex-row items-center">
          <div className="w-16 tablet:w-20 laptop:w-24">
              <img
                src={HOME_ICONS.Website}
                className="object-contain"
                alt="Menu Icon"
              />
            </div>
            <div className="ml-5 laptop:ml-8 w-5 tablet:w-6 laptop:w-7">
              <img
                src={HOME_ICONS.Menu}
                className="object-contain"
                alt="Menu Icon"
              />
            </div>
           
          </div>
        </div>
    )

}

export default Navbar;