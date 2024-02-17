import { apple,bill, google } from "../assets"
import styles, {layout} from "../style"
const Billing = () => 
   (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div  className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="white__gradient absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full" />
        <div className="white__pink absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere numquam, quidem dolorem nesciunt ipsa vitae qui perferendis tempora voluptas animi</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
<img src={apple} alt="App_Store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
<img src={google} alt="Google_Play_Store" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
        </div>
      </div>
      </section>
  )


export default Billing