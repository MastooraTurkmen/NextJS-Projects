import performanceImg from '/public/performance.jpg'
import Hero from "@/components/Hero";

const PerformancePage = () => {
    return (
        <Hero 
        imgData={performanceImg} 
        imgAlt="welding" 
        title="We serve high Performance Application"
    />    
  );  
}  

export default PerformancePage

