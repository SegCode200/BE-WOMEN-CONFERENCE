
import Head from "../../../components/Static/Head"
import { FaFacebook, FaYoutubeSquare, FaTwitter  } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"
import mix from "../../../assets/mixlr-1.svg"


function Prayer() {



// const SocialMediaLinks = () => (
//   <div className="social-media-links">
//     <a href="https://www.instagram.com/bewomenconference" target="_blank" rel="noopener noreferrer">
//       Instagram
//     </a>
//     <a href="https://www.youtube.com/watch?v=HAWkP-mtrBY" target="_blank" rel="noopener noreferrer">
//       YouTube
//     </a>

//   </div>
// );
// const InstagramEmbed = () => {
//   useEffect(() => {

//     // Dynamically load the Instagram embed script
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = '//www.instagram.com/embed.js';
//     document.body.appendChild(script);

//     return () => {
//       // Clean up the script when the component is unmounted
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         height: 'calc(100vh - 300px)', // Sets the height to 100% of viewport height minus 100px
//         overflowY: 'auto', // Allows scrolling if content overflows
//         padding: '16px', // Optional padding
//         boxSizing: 'border-box', // Ensures padding doesn't affect height
//       }}
//     >
//       <blockquote
//         className="instagram-media"
//         data-instgrm-captioned
//         data-instgrm-permalink="https://www.instagram.com/reel/C5_NaBYIQXK/?utm_source=ig_embed&utm_campaign=loading"
//         data-instgrm-version="14"
//         style={{
//           background: '#FFF',
//           border: '0',
//           borderRadius: '3px',
//           boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15)',
//           width: '400px',
//         }}
//       >
//         <a
//           href="https://www.instagram.com/reel/C5_NaBYIQXK/?utm_source=ig_embed&utm_campaign=loading"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{
//             textDecoration: 'none',
//             color: '#000',
//           }}
//         >
//           View this post on Instagram
//         </a>
//       </blockquote>
//     </div>
//   );

// };
// const InstagramEmbed =():any=>{
// <iframe
//   src="https://www.instagram.com/reel/C5_NaBYIQXK/embed"
//   width="400"
//   height="480"
//   frameborder="0"
//   scrolling="no"
//   allowtransparency="true"
//   allow="encrypted-media"
// >
// </iframe>
// }
const InstagramVideoEmbed = () => {
  return (
    <iframe
      src="https://www.instagram.com/reel/C6D1SgKMpnS/embed" // Direct link to the embedded Instagram reel
      width="40%" // Adjust width as needed
      height="315" // Adjust height to fill the viewport, minus an offset
      frameBorder="0"
      allowTransparency
      allow="encrypted-media" // Allow encrypted media to ensure the video can play
      scrolling="no" // Prevent scrolling within the iframe
      style={{ borderRadius: '10px' }} 
      // Optional border radius for styling
      className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
    ></iframe>
  );
};

const YouTubeEmbed = () => (
 

  <iframe width="40%" height="315" src="https://www.youtube.com/embed/Ns2JG5gc8Kw?si=4E6ZlFqLHon4JbyW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md"></iframe>

);




  return (
    <div className="h-screen bg-teal-50/45 flex flex-col">
    <Head name="Social"/>
   <div className="p-[15px]">
   <div className="my-[20px] text-[25px] font-bold text-teal-600">View Recent Post on TCN Women Social Media</div>
 
   
 <div className="flex w-full justify-between ">
 {InstagramVideoEmbed()}
  {YouTubeEmbed()}
 </div>

 <div className="w-full flex mt-[30px] justify-center">
  {/* Social Holder */}
    <div className="flex gap-4 bg-teal-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] items-center text-[40px] ">
      {/* FaceBook Icon */}
      <div>
        <a href="https://www.facebook.com/bewomenconference" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-pink-600">
          <FaFacebook />
        </a>
      </div>
      {/* Instagram Icon */}
      <div>
        <a href="https://www.instagram.com/bewomenconference" target="_blank" rel="noopener noreferrer" className="text-teal-600 text-[50px] hover:text-pink-600 ">
          <IoLogoInstagram />
        </a>
      </div>
      {/* Youtube Icon */}
      <div>
        <a href="https://www.youtube.com/covenantchristiancentre" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-pink-600">
          <FaYoutubeSquare />
        </a>
      </div>
      {/* Twitter Icon */}
      <div>
        <a href="https://www.twitter.com/covenantccentre" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-pink-600">
          <FaTwitter />
        </a>
      </div>
      {/* Mixlrl Icon */}
      <div>
        <a href="https://www.mixlr.com/tcnwomen" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-pink-600">
          <img src={mix} />
        </a>
      </div>

    </div>
 </div>
   </div>

  </div>
  
  )
}

export default Prayer
