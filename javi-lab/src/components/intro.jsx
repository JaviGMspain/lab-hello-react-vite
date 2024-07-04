

export default function Intro() {
  const image = "../assets/ironhack-logo-xs.png"
  return (
    <>
        <div className="intro">
         <img src={image} alt="Ironhack Logo" className="logo" />
         <h1>Say hello to ReactJS</h1>
         <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.</p>
         <button>Awesome!</button>
        </div>
    </>
    
  )
}
